import { type SVGProps } from 'react';

export const LogoIcon = ({
	width = 48,
	height = 48
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg height={height} viewBox='0 -960 960 960' width={width}>
		<path
			fill='#d2d2d2'
			d='M281-240q-14 0-27.5-14T240-282v-98h500v-340h100q14 0 27 14t13 29v596L721-240H281ZM80-280v-558q0-14 13-28t27-14h519q15 0 28 13.5t13 28.5v356q0 14-13 28t-28 14H240L80-280Zm540-220v-320H140v400l74-80h406Zm-480 0v-320 320Z'
		/>
	</svg>
);
