import joi from "joi";
import { CredentialData } from "../protocols";

const credentialSchema = joi.object<CredentialData>({
    title: joi.string().required(),
    url: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
});

export default credentialSchema;