import { IconButton, Input, TextField } from '@antoncristo/react-ev';
import { styled } from 'styled-components';

export const PostsBlock = styled.div`
	padding: 10px 0;
	box-sizing: border-box;
	width: 100vw;
	height: calc(100vh - 180px);
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 16px;
	overflow-y: auto;
`;

export const SearchBlock = styled.div`
	display: flex;
	align-items: center;

	height: 80px;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;

	button {
		padding: 0;
		margin-inline-start: 16px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		border-radius: 6px;
		width: 40px;
		aspect-ratio: 1/1;

		:hover {
			border-radius: 6px;
			box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
		}
	}
`;

export const SearchInput = styled(Input)`
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 40px;
`;

export const PostContainer = styled.div<{ isDeleted: boolean }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	max-width: 600px;
	padding: 24px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
	border-radius: 6px;
	opacity: ${({ isDeleted }) => (isDeleted ? 0 : 1)};
	transition: opacity 1.3s ease-out;
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
