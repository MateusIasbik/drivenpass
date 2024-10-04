import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import eraseService from "../services/erase-service";

async function deleteAccount(req: Request, res: Response, next: NextFunction) {
    const user = res.locals.user;
    
    try {
        await eraseService.deleteAccount(user);
        res.sendStatus(httpStatus.OK);

    } catch (error) {
        next(error);
    }
}

const eraseController = {
    deleteAccount
}

export default eraseController;