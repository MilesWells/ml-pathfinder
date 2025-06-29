import { Box, type BoxProps } from '@mantine/core';

export type IconBaseProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> &
	BoxProps;

const MAX_ICON_SIZE = '31px';

export function IconBase({ style, ...boxProps }: IconBaseProps) {
	return (
		<Box
			component="span"
			h={MAX_ICON_SIZE}
			style={{
				verticalAlign: 'middle',
				...style,
			}}
			w={MAX_ICON_SIZE}
			{...boxProps}
		/>
	);
}
