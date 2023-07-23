import { type ReactNode } from 'react';

import * as S from './layout.styled';
import { TextField } from '@antoncristo/react-ev';

export interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
	const { children } = props;
	return (
		<S.LayoutContainer>
			<S.Header>
				<TextField fontSize='28px'>Users Posts Application</TextField>
			</S.Header>
			<S.Body>{children}</S.Body>
		</S.LayoutContainer>
	);
};
