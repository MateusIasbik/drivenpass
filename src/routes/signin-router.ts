import { Router } from "express";
import { validateSchema } from "../middleware/schema-middlewares";
import signinSchema from "../schemas/signin-schema";
import signinController from "../controllers/signin-controller";

const signinRouter = Router();

signinRouter.post("/sign-in", validateSchema(signinSchema), signinController.loginUser);

export default signinRouter;