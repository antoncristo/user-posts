import { type SVGProps } from 'react';

export const DeleteIcon = ({
	width = 48,
	height = 48
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg height={width} viewBox='0 -960 960 960' width={height}>
		<path
			fill='#000'
			d='M261-120q-24.75 0-42.375-17.625T201-180v-570h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-810h158q0-13 8.625-21.5T378-840h204q12.75 0 21.375 8.625T612-810h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-750h-11v570q0 24.75-17.625 42.375T699-120H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z'
		/>
	</svg>
);
