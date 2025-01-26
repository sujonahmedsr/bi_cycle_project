import { StatusCodes } from "http-status-codes"
import AppError from "../../errors/AppError"
import { userInterface } from "../User Model/user.Interface"
import { userModel } from "../User Model/userSchema.model"

const getAllUser = async () => {
    const result = await userModel.find()
    return result
}

const blockUserDb = async (id: string, payload: userInterface) => {
    const user = await userModel.findOne({ _id: id })

    // check if user still alive 😁
    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND,'User not found!')
    }

    // check if user already block 
    let isBlocked = user?.isBlocked
    if (isBlocked) {
        throw new AppError(StatusCodes.FORBIDDEN,'This user already Blocked')
    }

    const result = await userModel.findOneAndUpdate({ _id: id }, { ...payload, isBlocked: true }, { new: true })

    return result
}

export const adminServices = {
    blockUserDb,
    getAllUser
}