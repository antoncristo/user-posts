import { type AxiosResponse } from 'axios';
import { type IUser } from 'types';

import { axiosInstance } from '../axios';
import { Endpoints } from '../enpoints';

export const getUsers = async (): Promise<AxiosResponse<IUser[]>> =>
	axiosInstance.get(Endpoints.GET_USERS);
