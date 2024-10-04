import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { UserPayload } from '../protocols/index';

const JWT_SECRET = process.env.JWT_SECRET as string;

function authToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(httpStatus.UNAUTHORIZED).send({ error: "Token não fornecido." });
        return;
    }

    const token = authorization.split(' ')[1];

    if (!token) {
        res.status(httpStatus.UNAUTHORIZED).send({ error: "Token malformado." });
        return;
    }

    try {
        jwt.verify(token, JWT_SECRET, async (err, user) => {
            if (err) {
                res.status(httpStatus.FORBIDDEN).send({ error: "Token inválido." });
                return;
            }
            res.locals.user = user as UserPayload;
            next();
        })
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        return
    }
}

export default authToken;