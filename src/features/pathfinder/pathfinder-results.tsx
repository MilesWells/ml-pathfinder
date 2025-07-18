'use client';

import { Card, Center, Group, Stack, Title } from '@mantine/core';
import { EdgeDescription } from '@/lib/graph/edge-description';
import { EdgeMethodIcon } from '@/ui/edge-method-icon';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, to, path } = usePathfinder();

	if (!from || !to || path.length === 0) return null;

	return (
		<Center>
			<Card shadow="lg" withBorder>
				<Stack align="center" gap="lg">
					<Title c="maplelegends-blue.6" fs="italic" order={4}>
						{from} {`->`} {to}
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
