import { Router } from "express";
import { usersRouter } from "./users";

export const appRouter = Router();

appRouter.use("/users", usersRouter);
// Add posts routes
