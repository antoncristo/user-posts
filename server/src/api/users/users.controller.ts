import { RequestHandler } from "express";

export const getUsers: RequestHandler = (req, res) => {
  res.send("[get all users]");
};

export const getUsersById: RequestHandler = (req, res) => {
  res.send("[get user by id]");
};
