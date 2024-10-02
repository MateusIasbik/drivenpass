import joi from "joi";
import { UserData } from "../protocols";

const signinSchema = joi.object<UserData>({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

export default signinSchema;