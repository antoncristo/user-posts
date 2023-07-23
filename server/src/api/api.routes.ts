import { Router } from "express";
import { usersRouter } from "./users";
import { postsRouter } from "./posts";

export const appRouter = Router();

appRouter.use("/users", usersRouter);
appRouter.use("/posts", postsRouter);
