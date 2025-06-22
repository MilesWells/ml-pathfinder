'use client';

import { Center, Checkbox, Flex, Title } from '@mantine/core';
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
		<Flex align="center" direction="column">
			<Title my="lg" order={2}>
				Pathfinder Results
			</Title>

			<Flex direction="column" gap="sm">
				{path.map(edge => (
					<Checkbox
						key={edge.id}
						label={
							<MethodIcon edge={edge} label={`${edge.from} -> ${edge.to}`} />
						}
					/>
				))}
			</Flex>
		</Flex>
	);
}
