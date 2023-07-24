import { type SVGProps } from 'react';

export const ClearIcon = ({
	width = 48,
	height = 48
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg height={height} viewBox='0 -960 960 960' width={width}>
		<path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
	</svg>
);
