// import { Request, Response, NextFunction } from 'express';
// import httpStatus from 'http-status';
// import jwt from 'jsonwebtoken';
// import { CredentialData } from '../protocols/index';

// const jwtSecret = process.env.JWT_SECRET as string;

// function authToken(req: Request, res: Response, next: NextFunction) {
//     const { authorization } = req.headers;

//     if (!authorization) {
//         return res.status(httpStatus.UNAUTHORIZED).send({ error: 'Token não fornecido.' });
//     }

//     const token = authorization.split(' ')[1];

//     if (!token) {
//         return res.status(httpStatus.UNAUTHORIZED).send({ error: 'Token malformado.' });
//     }

//     try {
//         jwt.verify(token, jwtSecret, async (err, user) => {
//             if (err) {
//                 return res.status(httpStatus.FORBIDDEN).json({ error: 'Token inválido.' });
//             }
//             req.user = user;
//             next();
//         })
//     } catch (err) {
//         return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
//     }
// }

// export default authToken;
