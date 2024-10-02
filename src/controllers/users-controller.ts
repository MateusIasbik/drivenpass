import { Request, Response, NextFunction } from "express";
import { UserData } from "../protocols";
import usersService from "../services/users-service";
import httpStatus from "http-status";

async function insertUser(req: Request, res: Response, next: NextFunction) {
    const userData: UserData = req.body;
    
    try {
        await usersService.insertUser(userData);
        res.sendStatus(httpStatus.CREATED);

    } catch (error) {
        next(error);
    }
}

const usersController = {
    insertUser
}

export default usersController;