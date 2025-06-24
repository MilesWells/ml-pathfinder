'use client';

import { Center, Stack, Title } from '@mantine/core';
import { isUnnavigaableRegion } from '../graph/regions';
import { MethodIcon } from './method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, path } = usePathfinder();

	if (!from) {
		return <Center component="h2">Select a starting and ending region</Center>;
	}

	if (isUnnavigaableRegion(from)) {
		return <Center component="h2">Staring from Unnavigable region.</Center>;
	}

	if (!path) {
		return <Center component="h2">No path found.</Center>;
	}

	return (
		<Stack align="center">
			<Title my="lg" order={2}>
				Pathfinder Results
			</Title>

			<Stack gap="sm">
				{path.map(edge => (
					<MethodIcon key={edge.id} edge={edge} label={`${edge.from} -> ${edge.to}`} />
				))}
			</Stack>
		</Stack>
	);
}
