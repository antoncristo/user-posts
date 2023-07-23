import { IconButton, TextField } from '@antoncristo/react-ev';
import { styled } from 'styled-components';

export const PostsBlock = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
	gap: 16px;
`;

export const PostContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	max-width: 600px;
	padding: 24px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
	border-radius: 6px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled(TextField)`
	color: darkblue;
	font-style: italic;
`;

export const DeleteButton = styled(IconButton)`
	background-color: transparent;

	svg {
		border-radius: 6px;
	}

	:hover {
		opacity: 0.6;
	}
`;
