import { Anchor, type AnchorProps } from '@mantine/core';

export type ExternalLinkProps = React.PropsWithChildren<AnchorProps> & {
	href: string;
};

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
	return (
		<Anchor fw="inherit" fz="inherit" {...props} rel="noopener" target="_blank">
			{children}
		</Anchor>
	);
}
