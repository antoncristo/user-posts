import { type ReactNode } from 'react';

import * as S from './layout.styled';
import { TextField } from '@antoncristo/react-ev';
import { useLocation, useNavigate } from 'react-router';

export interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
	const { children } = props;
	const { pathname } = useLocation();

	return (
		<S.LayoutContainer>
			<S.Header>
				{pathname === '/' ? (
					<TextField fontSize='28px'>Users List</TextField>
				) : (
					<TextField fontSize='28px'>Users Posts</TextField>
				)}
			</S.Header>
			<S.Body>{children}</S.Body>
		</S.LayoutContainer>
	);
};
