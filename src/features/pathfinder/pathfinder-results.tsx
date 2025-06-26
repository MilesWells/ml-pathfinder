'use client';

import { Center, Stack, Title } from '@mantine/core';
import { isUnnavigaableRegion } from '../graph/regions';
import { useSelectedItems } from '../items/selected-items-context';
import { MethodIcon } from './method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, to, path } = usePathfinder();
	const { selectedItems } = useSelectedItems();

	if (!from) return null;

	if (from === to) return <Center component="h2">You're already there!</Center>;

	if (isUnnavigaableRegion(from)) {
		if (from === 'Florina Beach')
			return <Center component="h2">You must first move back to either Ludibrium or Lith Harbor.</Center>;

		return <Center component="h2">You must first move back to your original location via Spinel.</Center>;
	}

	if (to === 'Neo Tokyo' && !selectedItems['Gate Pass'])
		return <Center component="h2">Accessing Neo Tokyo requires the Gate Pass.</Center>;

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
