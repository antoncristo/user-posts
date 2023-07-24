import { useState } from 'react';

import { useGetUsers } from '../../api';
import { UsersTable } from './components/users-table';
import { Pagination } from './components';

import * as S from './home.styled';

const PAGINATION_BULK = 4;

export const Home = () => {
	const [page, setPage] = useState(1);

	const { users, isLoading, isError } = useGetUsers({ page, count: PAGINATION_BULK });

	if (isError) {
		// Should be fallback component
		return <div>Error, could now load users table</div>;
	}

	return (
		<S.HomeContainer>
			<UsersTable users={users} isLoading={isLoading} />
			<Pagination setPage={setPage} page={page} currentList={users} />
		</S.HomeContainer>
	);
};
