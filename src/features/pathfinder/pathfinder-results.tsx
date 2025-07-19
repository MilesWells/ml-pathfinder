'use client';

import { Card, Center, Group, Stack, Title } from '@mantine/core';
import { EdgeDescription } from '@/lib/graph/edge-description';
import { EdgeMethodIcon } from '@/ui/edge-method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { destinationRegion, path, startingRegion } = usePathfinder();

	if (path.length === 0) return null;

	return (
		<Center>
			<Card shadow="lg" withBorder>
				<Stack align="center" gap="lg">
					<Title c="maplelegends-blue.6" fs="italic" order={4}>
						{startingRegion} {`->`} {destinationRegion}
					</Title>

					<Stack gap="xs">
						{path.map(edge => (
							<Group align="center" gap={12} key={edge.id}>
								<EdgeMethodIcon edge={edge} />
								<EdgeDescription edge={edge} />
							</Group>
						))}
					</Stack>
				</Stack>
			</Card>
		</Center>
	);
}
