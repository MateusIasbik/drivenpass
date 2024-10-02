import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import errorHandler from "./middleware/errorHandler-middlewares";
import usersRouter from "./routes/users-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("I'm OK!");
});

app.use(usersRouter);

app.use(errorHandler);

const port = process.env.PORT || 5550;
app.listen(port, () => console.log("Server is up."));