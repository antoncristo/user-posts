import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const Header = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	height: 60px;
	padding: 24px;
	border-bottom: 1px solid black;
`;

export const Body = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: calc(100vh - 60px);
	overflow-y: auto;
`;
