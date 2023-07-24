import { type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { TextField } from '@antoncristo/react-ev';

import { LogoIcon } from '../assets';

import * as S from './layout.styled';

export interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
	const { children } = props;
	const { pathname } = useLocation();

	return (
		<S.LayoutContainer>
			<S.Header>
				<LogoIcon />
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
