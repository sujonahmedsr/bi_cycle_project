import { StatusCodes } from "http-status-codes"
import AppError from "../../errors/AppError"
import { loginInterface, userInterface } from "./user.Interface"
import { userModel } from "./userSchema.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../../../config"

const resgisterUserIntoDb = async (paylod: userInterface) => {
    const result = await userModel.create(paylod)
    return result
}

const loginUserDb = async (paylod: loginInterface) => {
    const user = await userModel.findOne({ email: paylod.email }).select("+password")

    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND,'This user is not found !')
    }

    const userStatus = user?.isBlocked
    if (userStatus) {
        throw new AppError(StatusCodes.BAD_REQUEST,'User is already blocked!')
    }

    const isPassMatched = await bcrypt.compare(paylod?.password, user?.password)
    if (!isPassMatched) {
        throw new AppError(StatusCodes.BAD_REQUEST,'Wrong Password!!! Tell me who are you? 😈')
    }

    const jwtPayload = {
        email: user?.email,
        role: user?.role,
        id: user?._id
    }
    const token = jwt.sign(jwtPayload, config.SECRET_JWT as string, { expiresIn: '1d'})
    

    return { token };
}

console.log(config.DBURL);
console.log(config.PORT);


const resetPassword = async(payload: string) => {
    console.log(payload);
}


export const userServices = {
    resgisterUserIntoDb,
    loginUserDb
}