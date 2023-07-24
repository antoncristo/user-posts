import { type AxiosResponse } from 'axios';
import { type IPost } from 'types';

import { axiosInstance } from '../axios';
import { Endpoints } from '../enpoints';

export const getUserPosts = async ({
	userId
}: {
	userId: number;
}): Promise<AxiosResponse<IPost[]>> =>
	axiosInstance.get(Endpoints.POSTS, { params: { userId } });

export const deleteUserPosts = async ({
	userId,
	postId
}: {
	userId: number;
	postId: number;
}): Promise<AxiosResponse<IPost[]>> =>
	axiosInstance.delete(Endpoints.POSTS, { params: { userId, postId } });
