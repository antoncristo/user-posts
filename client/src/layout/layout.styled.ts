import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const Header = styled.div`
	box-sizing: border-box;
	gap: 16px;
	display: flex;
	align-items: center;
	height: 60px;
	padding: 24px;
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Body = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: calc(100vh - 60px);
`;
