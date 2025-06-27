'use client';

import { Group, Stack, Title } from '@mantine/core';
import { EdgeMethodIcon } from '../graph/edge-method-icon';
import { EdgePopover } from '../graph/edge-popover';
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
					<Group align="center" key={edge.id}>
						<EdgeMethodIcon edge={edge} />

						<EdgePopover edge={edge} label={`${edge.from} -> ${edge.to}`} />
					</Group>
				))}
			</Stack>
		</Stack>
	);
}
