import { RequestHandler } from "express";

import * as postsService from "./posts.service";

export const getUserPosts: RequestHandler = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const userPosts = await postsService.isDatabasePopulated({
      userId: userId as unknown as number,
    });

    if (userPosts.length) {
      res.send(userPosts);
    } else {
      const externalPosts = await postsService.fetchExternal({
        userId: userId as unknown as number,
      });
      postsService.populateUserPosts(externalPosts.data);

      res.send(externalPosts.data);
    }
  } catch (err) {
    return next(err);
  }
};

export const deleteUserPost: RequestHandler = async (req, res, next) => {
  const { userId, postId } = req.query;

  try {
    await postsService.deletePost({
      postId: postId as unknown as number,
      userId: userId as unknown as number,
    });

    res.send().status(200);
  } catch (err) {
    return next(err);
  }
};
