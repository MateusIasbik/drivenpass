import { Router } from "express";
import authToken from "../middleware/auth-middleware";
import eraseController from "../controllers/erase-controller";

const eraseRouter = Router();

eraseRouter.use(authToken);

eraseRouter.delete("/erase", eraseController.deleteAccount);

export default eraseRouter;