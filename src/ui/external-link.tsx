import { Anchor, type BoxProps } from '@mantine/core';

export type ExternalLinkProps = React.PropsWithChildren<BoxProps> & {
	href: string;
};

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
	return (
		<Anchor c="maplelegends-blue.6" fw="bold" fz="inherit" {...props} rel="noopener" target="_blank">
			{children}
		</Anchor>
	);
}
