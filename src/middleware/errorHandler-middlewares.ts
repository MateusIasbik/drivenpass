import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

interface CustomError extends Error {
    type?: string;
}

export default function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction): string | any {

    if (err.type === "invalid") {
        return res.status(httpStatus.NOT_FOUND).send(err.message);
    }

    if (err.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(err.message);
    }

    if (err.type === "unauthorized") {
        return res.status(httpStatus.UNAUTHORIZED).send(err.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
}
