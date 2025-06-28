'use client';

import { Card, Center, Group, Stack, Title } from '@mantine/core';
import { EdgeMethodIcon } from '../graph/edge-method-icon';
import { EdgePopover } from '../graph/edge-popover';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, to, path } = usePathfinder();

	if (!from || !to || path.length === 0) return null;

	return (
		<Center>
			<Card shadow="lg" withBorder>
				<Stack align="center" gap="xl">
					<Title c="dark.2" order={4}>
						{from} {`->`} {to}
					</Title>

					<Stack gap="xs">
						{path.map(edge => (
							<Group align="center" key={edge.id}>
								<EdgeMethodIcon edge={edge} />
								<EdgePopover edge={edge} label={`${edge.from} -> ${edge.to}`} />
							</Group>
						))}
					</Stack>
				</Stack>
			</Card>
		</Center>
	);
}
