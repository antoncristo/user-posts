import { styled } from 'styled-components';

export const TableContainer = styled.div`
	width: 60%;

	.thead {
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 6px;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
	}

	.thead .th:nth-child(1) {
		cursor: pointer;
	}

	.body-row {
		padding: 10px;
		border-radius: 6px;
	}

	.body-row:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.03);
	}
`;
