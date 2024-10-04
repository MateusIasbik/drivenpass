import { Router } from "express";
import { validateSchema } from "../middleware/schema-middlewares";
import credentialSchema from "../schemas/credentials-schema";
import credentialController from "../controllers/credential-controller";
import authToken from "../middleware/auth-middleware";
import credentialEditSchema from "../schemas/credentials-edit-schema";

const credentialsRouter = Router();

credentialsRouter.use(authToken);

credentialsRouter.post("/credentials", validateSchema(credentialSchema), credentialController.insertCredential);
credentialsRouter.get("/credentials/", credentialController.getCredentials);
credentialsRouter.get("/credentials/:id", credentialController.getCredentialById);
credentialsRouter.put("/credentials/:id", validateSchema(credentialEditSchema), credentialController.editCredential);
credentialsRouter.delete("/credentials/:id", credentialController.deleteCredentialById);

export default credentialsRouter;
