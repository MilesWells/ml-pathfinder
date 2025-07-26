import { Box, Loader, LoadingOverlay } from '@mantine/core';

export type LoadingContainerProps = React.PropsWithChildren<{
	loading: boolean;
	overlayChildren?: React.ReactNode;
}>;

export function LoadingContainer({ children, loading, overlayChildren }: LoadingContainerProps) {
	return (
		<Box flex="1 1 0" pos="relative">
			<LoadingOverlay visible={loading}>{overlayChildren || <Loader />}</LoadingOverlay>

			{children}
		</Box>
	);
}
