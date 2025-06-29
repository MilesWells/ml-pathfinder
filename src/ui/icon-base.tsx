import { Box, type BoxProps } from '@mantine/core';

export type IconBaseProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> &
	BoxProps;

export function IconBase({ ...boxProps }: IconBaseProps) {
	return <Box component="span" display="inline-flex" h={30} w={30} {...boxProps} />;
}
