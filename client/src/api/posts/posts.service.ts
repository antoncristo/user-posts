import { type AxiosResponse } from 'axios';
import { type IPost } from 'types';

import { axiosInstance } from '../axios';
import { Endpoints } from '../enpoints';

export const getUserPosts = async ({
	userId
}: {
	userId: number;
}): Promise<AxiosResponse<IPost[]>> =>
	axiosInstance.get(Endpoints.GET_POSTS, { params: { userId } });
