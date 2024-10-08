import joi from "joi";
import { UserData } from "../protocols";

const signupSchema = joi.object<UserData>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

export default signupSchema;