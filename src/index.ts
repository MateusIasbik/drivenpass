import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import errorHandler from "./middleware/errorHandler-middlewares";
import signupRouter from "./routes/signup-router";
import signinRouter from "./routes/signin-router";
import credentialsRouter from "./routes/credentials-router";
import eraseRouter from "./routes/erase-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("I'm OK!");
});

app.use(signupRouter);
app.use(signinRouter);
app.use(credentialsRouter);
app.use(eraseRouter);

app.use(errorHandler);

const port = process.env.PORT || 5450;
app.listen(port, () => console.log("Server is up."));