import { RequestHandler } from "express";

import { IUser } from "./users.type";
import * as usersService from "./users.service";

export const getUsers: RequestHandler = async (req, res, next) => {
  const { page, count } = req.query;
  const _page = page as unknown as number;
  const _count = count as unknown as number;

  try {
    let usersResponse: IUser[] = [];

    // TODO: pass req.page and req.count to the user service
    const externalUsers = await usersService.fetchExternal({
      start: (_page - 1) * _count,
      limit: _count,
    });

    usersResponse = externalUsers.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        address: {
          city: user.address.city,
          street: user.address.street,
          suite: user.address.suite,
          zipcode: user.address.zipcode,
        },
        email: user.email,
      };
    });

    res.send(usersResponse);
  } catch (err) {
    return next(err);
  }
};
