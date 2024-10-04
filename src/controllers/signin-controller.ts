import { Request, Response, NextFunction } from "express";
import { UserData } from "../protocols";
import httpStatus from "http-status";
import signinService from "../services/signin-service";

async function loginUser(req: Request, res: Response, next: NextFunction) {
    const userData: UserData = req.body;
    
    try {
        const token = await signinService.loginUser(userData);
        res.status(httpStatus.OK).send(token);

    } catch (error) {
        next(error);
    }
}

const signinController = {
    loginUser
}

export default signinController;