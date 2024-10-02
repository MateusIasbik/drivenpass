import { Request, Response, NextFunction } from "express";
import { UserData } from "../protocols";
import httpStatus from "http-status";
import signupService from "../services/signup-service";

async function insertUser(req: Request, res: Response, next: NextFunction) {
    const userData: UserData = req.body;
    
    try {
        await signupService.insertUser(userData);
        res.sendStatus(httpStatus.CREATED);

    } catch (error) {
        next(error);
    }
}

const signupController = {
    insertUser
}

export default signupController;