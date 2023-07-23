import axios, { AxiosResponse } from "axios";
import { execute } from "../../database";
import { IPost } from "./posts.type";

export const isDatabasePopulated = ({
  userId,
}: {
  userId: number;
}): Promise<IPost[]> => {
  return execute(`select * from posts where userId=${userId}`, []);
};

export const fetchExternal = ({
  userId,
}: {
  userId: number;
}): Promise<AxiosResponse<IPost[]>> => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
};

export const populateUserPosts = (posts: IPost[]) => {
  const values = posts.map(
    (post) => `(${post.id}, ${post.userId}, '${post.title}', '${post.body}')`
  );

  execute(
    "insert into posts (`id`,`userId`,`title`,`body`) values " + values,
    []
  );
};
