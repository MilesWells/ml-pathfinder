import { Box, LoadingOverlay } from '@mantine/core';

export type LoadingContainerProps = React.PropsWithChildren<{
	loading: boolean;
}>;

export function LoadingContainer({ children, loading }: LoadingContainerProps) {
	return (
		<Box flex="1 1 0" pos="relative">
			<LoadingOverlay
				loaderProps={{ type: 'bars' }}
				overlayProps={{ backgroundOpacity: 1, radius: 'md' }}
				visible={loading}
			/>

			{children}
		</Box>
	);
}
