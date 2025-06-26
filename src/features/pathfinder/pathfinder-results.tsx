'use client';

import { Stack, Title } from '@mantine/core';
import { MethodIcon } from './method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, to, path } = usePathfinder();

	if (!from || !to || path.length === 0) return null;

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
