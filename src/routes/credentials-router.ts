import { Router } from "express";
import { validateSchema } from "../middleware/schema-middlewares";
import credentialSchema from "../schemas/credentials-schema";
import credentialController from "../controllers/credential-controller";
import authToken from "../middleware/auth-middleware";

const credentialsRouter = Router();

credentialsRouter.use(authToken);

credentialsRouter.post("/credentials", validateSchema(credentialSchema), credentialController.insertCredential);
credentialsRouter.get("/credentials/:id", credentialController.getCredentialById);

export default credentialsRouter;
