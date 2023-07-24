import { type Dispatch, type SetStateAction } from 'react';
import { TextField } from '@antoncristo/react-ev';

import { type IUser } from '../../../../types';

import * as S from './pagination.styled';

export const Pagination = ({
	setPage,
	page,
	currentList
}: {
	setPage: Dispatch<SetStateAction<number>>;
	page: number;
	currentList: IUser[] | undefined;
}) => {
	const hasNext = currentList?.length;

	const next = () => {
		if (hasNext) {
			setPage(page => page + 1);
		}
	};

	const prev = () => {
		if (page > 0) {
			setPage(page => page - 1);
		}
	};

	return (
		<S.PaginationContainer>
			<button disabled={page === 1} onClick={prev}>
				{'<'} prev
			</button>
			{hasNext ? null : <TextField fontWeight='bold'>No more records</TextField>}
			<button disabled={!hasNext} onClick={next}>
				next {'>'}
			</button>
		</S.PaginationContainer>
	);
};
