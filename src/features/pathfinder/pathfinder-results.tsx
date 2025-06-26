'use client';

import { Center, Stack, Title } from '@mantine/core';
import { isUnnavigaableRegion } from '../graph/regions';
import { MethodIcon } from './method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, to, path } = usePathfinder();

	if (!from) return null;

	if (from === to) return <Center component="h2">You're already there!</Center>;

	if (isUnnavigaableRegion(from)) {
		return <Center component="h2">Staring from Unnavigable region.</Center>;
	}

	return (
		<Stack align="center">
			<Title my="lg" order={4}>
				{from} {`->`} {to}
			</Title>

			<Stack gap="sm">
				{path.map(edge => (
					<MethodIcon edge={edge} key={edge.id} label={`${edge.from} -> ${edge.to}`} />
				))}
			</Stack>
		</Stack>
	);
}
