import { Request, Response, NextFunction } from "express";
import { CredentialData } from "../protocols";
import httpStatus from "http-status";
import credentialService from "../services/credential-service";

async function insertCredential(req: Request, res: Response, next: NextFunction) {
    const credentialData: CredentialData = req.body;
    
    const user = res.locals.user;
    console.log(user);
    
    try {
        await credentialService.insertCredential(credentialData, user);
        res.sendStatus(httpStatus.OK);

    } catch (error) {
        next(error);
    }
}

const credentialController = {
    insertCredential
}

export default credentialController;