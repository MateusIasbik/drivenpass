import joi from "joi";
import { CredentialData } from "../protocols";

const credentialEditSchema = joi.object<CredentialData>({
    title: joi.string(),
    url: joi.string(),
    username: joi.string(),
    password: joi.string()
});

export default credentialEditSchema;