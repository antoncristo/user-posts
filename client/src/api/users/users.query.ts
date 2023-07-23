import { useQuery } from 'react-query';
import * as usersService from './users.service';

const GET_USERS_KEY = 'getUsers';

export const useGetUsers = () => {
	const { data, isLoading, isError } = useQuery([GET_USERS_KEY], usersService.getUsers);

	return {
		users: data,
		isError,
		isLoading
	};
};
