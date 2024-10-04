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

async function getCredentials(req: Request, res: Response, next: NextFunction) {

    const user = res.locals.user;

    try {
        const result = await credentialService.getCredentials(user);
        res.status(httpStatus.OK).send(result);

    } catch (error) {
        next(error);
    }
}

async function getCredentialById(req: Request, res: Response, next: NextFunction) {
    const credentialId: number = parseInt(req.params.id);

    try {
        const result = await credentialService.getCredentialById(credentialId);
        res.status(httpStatus.OK).send(result);

    } catch (error) {
        next(error);
    }
}

async function editCredential(req: Request, res: Response, next: NextFunction) {
    const credentialId: number = parseInt(req.params.id);
    const credentialData: CredentialData = req.body;

    try {
        await credentialService.editCredential(credentialId, credentialData);
        res.sendStatus(httpStatus.NO_CONTENT);

    } catch (error) {
        next(error);
    }
}

async function deleteCredentialById(req: Request, res: Response, next: NextFunction) {
    const credentialId: number = parseInt(req.params.id);

    try {
        await credentialService.deleteCredentialById(credentialId);
        res.sendStatus(httpStatus.NO_CONTENT);
    } catch (error) {
        next(error)
    }
}

const credentialController = {
    insertCredential,
    getCredentials,
    getCredentialById,
    editCredential,
    deleteCredentialById
}

export default credentialController;