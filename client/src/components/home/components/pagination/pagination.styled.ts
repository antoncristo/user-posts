import { styled } from 'styled-components';

export const PaginationContainer = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		width: fit-content;
	}

	button {
		width: 60px;
		height: 30px;
		font-weight: bold;
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
		border: none;
		border-radius: 6px;
		cursor: pointer;

		&:hover {
			background-color: white;
			color: rgba(0, 0, 0, 0.8);
		}

		&:disabled {
			background-color: grey;
			pointer-events: none;
		}
	}
`;
