import { Router } from "express";
import usersController from "../controllers/users-controller";
import { validateSchema } from "../middleware/schema-middlewares";
import userSchema from "../schemas/users-schema";

const usersRouter = Router();

usersRouter.post("/sign-up", validateSchema(userSchema), usersController.insertUser);

export default usersRouter;