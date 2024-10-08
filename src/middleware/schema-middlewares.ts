import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema): any {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if(validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
        }

        next();
    };
}