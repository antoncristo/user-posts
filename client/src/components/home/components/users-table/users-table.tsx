import { Loader, Table, type Sorter } from '@antoncristo/react-ev';
import { type IUser } from 'types';

import { usersColumns } from './users-table.config';

import * as S from './users-table.styled';
import { useState } from 'react';

export interface UsersTableProps {
	users?: IUser[];
	isLoading: boolean;
}

export const UsersTable = (props: UsersTableProps) => {
	const { users, isLoading } = props;
	const [sortedUsers, setSortedUsers] = useState<IUser[] | undefined>(users);

	if (isLoading) {
		return <Loader />;
	}

	if (!users) {
		return null;
	}

	const sortHandler = (sortBy: Partial<Sorter<IUser>>) => {
		const { direction } = sortBy;

		const sorted = users.sort((userA, userB) => {
			if (userA.name > userB.name) {
				return direction === 'asc' ? 1 : -1;
			}

			return direction === 'asc' ? -1 : 1;
		});

		setSortedUsers(sorted);
	};

	return (
		<S.TableContainer>
			<Table
				columns={usersColumns}
				data={sortedUsers ?? users}
				sortSetup={{ handler: sortHandler, defaultSortBy: 'name' }}
			/>
		</S.TableContainer>
	);
};
