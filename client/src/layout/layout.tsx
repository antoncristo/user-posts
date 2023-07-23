import { type ReactNode } from 'react';

import * as S from './layout.styled';

export interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
	const { children } = props;
	return (
		<S.LayoutContainer>
			<S.Header>header</S.Header>
			<S.Body>{children}</S.Body>
		</S.LayoutContainer>
	);
};
