'use client';

import { useMounted } from '@mantine/hooks';

export function NullIfNotMounted(props: React.PropsWithChildren) {
	const hasMounted = useMounted();

	if (!hasMounted) return null;

	return props.children;
}
