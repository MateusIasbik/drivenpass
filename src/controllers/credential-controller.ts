import { Request, Response, NextFunction } from "express";
import { CredentialData } from "../protocols";
import httpStatus from "http-status";
import credentialService from "../services/credential-service";

async function insertCredential(req: Request, res: Response, next: NextFunction) {
    
    const credentialData: CredentialData = req.body;
    const user = res.locals.user;
    
    try {
        await credentialService.insertCredential(credentialData, user);
        res.sendStatus(httpStatus.OK);

    } catch (error) {
        next(error);
    }
}

async function getCredentialById(req: Request, res: Response, next: NextFunction) {
    const credentialId: number = parseInt(req.params.id);
    const user = res.locals.user;

    try {
        const result = await credentialService.getCredentialById(credentialId, user);
        res.status(httpStatus.OK).send(result);

    } catch (error) {
        next(error);
    }
}

const credentialController = {
    insertCredential,
    getCredentialById
}

export default credentialController;