import { Router } from "express";
import * as postsController from "./posts.controller";

export const postsRouter = Router();

postsRouter.route("/").get(postsController.getUserPosts);
postsRouter.route("/").delete(postsController.deleteUserPost);
