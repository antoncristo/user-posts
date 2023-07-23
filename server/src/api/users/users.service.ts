import axios, { AxiosResponse } from "axios";
import { IUser } from "./users.type";

interface FetchExternalQueryParams {
  start?: number;
  limit?: number;
}

export const fetchExternal = async (
  queryParams: FetchExternalQueryParams
): Promise<AxiosResponse<IUser[]>> => {
  const { start = 0, limit = 100 } = queryParams;

  return axios.get(
    `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`
  );
};
