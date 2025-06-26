'use client';

import { Center, Stack, Title } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
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
		return (
			<Center>
				<Title order={2}>
					First move back to your original location via {from === 'Florina Beach' ? <PisonLink /> : <SpinelLink />}.
				</Title>
			</Center>
		);
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

function SpinelLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=9000020">Spinel</ExternalLink>;
}

function PisonLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=1081001">Pison</ExternalLink>;
}
