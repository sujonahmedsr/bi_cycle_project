import { Request, Response } from "express"
import asyncFunc from "../../utils/asyncFunc"
import { userServices } from "./userServices"
import sendResponse from "../../utils/sendRespose"
import { StatusCodes } from "http-status-codes"

const registerUser = asyncFunc(async (req: Request, res: Response) => {
    const body = req.body
    
    const result = await userServices.resgisterUserIntoDb(body)
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        message: 'User registered successfully',
        data: result
    })
})

const loginUser = asyncFunc(async (req: Request, res: Response) => {
    const body = req.body
    const result = await userServices.loginUserDb(body)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Login successful',
        data: result
    })
})

const resetPassword = asyncFunc(async (req: Request, res: Response) => {
    const body = req.body
    const user = req.user
    
    await userServices.resetPassword(body, user)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Password Change Successfull.',
        data: null
    })
})
export const userController = {
    registerUser,
    loginUser,
    resetPassword
}