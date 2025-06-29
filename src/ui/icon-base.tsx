import { Box, type BoxProps } from '@mantine/core';

export type IconBaseProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> &
	BoxProps;

export function IconBase({ style, ...boxProps }: IconBaseProps) {
	return (
		<Box
			component="span"
			display="inline-flex"
			h={30}
			style={{
				verticalAlign: 'middle',
				...style,
			}}
			w={30}
			{...boxProps}
		/>
	);
}
