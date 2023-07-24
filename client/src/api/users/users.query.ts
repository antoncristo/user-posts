import { useQuery } from 'react-query';
import * as usersService from './users.service';

const ONE_HOUR = 36000000;

const GET_USERS_KEY = 'getUsers';

export const useGetUsers = ({ page, count }: { page: number; count: number }) => {
	const { data, isLoading, isError } = useQuery(
		[GET_USERS_KEY, { page }],
		async () => usersService.getUsers({ page, count }),
		{
			staleTime: ONE_HOUR
		}
	);

	return {
		users: data?.data,
		isError,
		isLoading
	};
};
