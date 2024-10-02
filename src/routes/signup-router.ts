import { Router } from "express";
import { validateSchema } from "../middleware/schema-middlewares";
import userSchema from "../schemas/signup-schema";
import signupController from "../controllers/signup-controller";

const signupRouter = Router();

signupRouter.post("/sign-up", validateSchema(userSchema), signupController.insertUser);

export default signupRouter;