import { useQuery } from 'react-query';
import * as postsService from './posts.service';

export const GET_USER_POSTS_KEY = 'getUserPosts';

export const useGetUserPosts = ({ userId }: { userId: number }) => {
	const { data, isLoading, isError } = useQuery([GET_USER_POSTS_KEY], async () =>
		postsService.getUserPosts({ userId })
	);

	return {
		posts: data?.data,
		isError,
		isLoading
	};
};
