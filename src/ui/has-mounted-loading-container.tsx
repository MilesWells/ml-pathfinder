'use client';

import { useHasMounted } from '@/lib/hooks/use-has-mounted';
import { LoadingContainer } from './loading-container';

export function HasMountedLoadingContainer({ children }: React.PropsWithChildren) {
	const hasMounted = useHasMounted();

	return <LoadingContainer loading={!hasMounted}>{children}</LoadingContainer>;
}
