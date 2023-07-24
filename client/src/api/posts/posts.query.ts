import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as postsService from './posts.service';

export const GET_USER_POSTS_KEY = 'getUserPosts';
export const useGetUserPosts = ({ userId }: { userId: number }) => {
	const { data, isLoading, isError } = useQuery(
		[GET_USER_POSTS_KEY, { userId }],
		async () => postsService.getUserPosts({ userId })
	);

	return {
		posts: data?.data,
		isError,
		isLoading
	};
};

export const DELETE_USER_POSTS_KEY = 'deleteUserPosts';
export const useDeleteUserPost = () => {
	const queryClient = useQueryClient();

	const { mutate, isError, isLoading } = useMutation(
		[DELETE_USER_POSTS_KEY],
		async ({ userId, postId }: { userId: number; postId: number }) =>
			postsService.deleteUserPosts({ postId, userId }),
		{
			onSuccess: async () => queryClient.invalidateQueries(GET_USER_POSTS_KEY)
		}
	);

	return {
		deletePost: mutate,
		isError,
		isLoading
	};
};
