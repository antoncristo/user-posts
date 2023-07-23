import { TextField } from '@antoncristo/react-ev';
import { useGetUsers } from '../../api';

import * as S from './home.styled';
import { UsersTable } from './components/users-table';

export const Home = () => {
	const { users, isLoading, isError } = useGetUsers();

	if (isError) {
		// Should be fallback component
		return <div>Error, could now load users table</div>;
	}

	return (
		<S.HomeContainer>
			<UsersTable users={users} isLoading={isLoading} />
		</S.HomeContainer>
	);
};
