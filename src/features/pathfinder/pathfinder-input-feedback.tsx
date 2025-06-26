'use client';

import { Center, Title } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import { isUnnavigaableRegion } from '../graph/regions';
import { useSelectedItems } from '../items/selected-items-context';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInputFeedback() {
	const { from, to } = usePathfinder();
	const { selectedItems } = useSelectedItems();

	if (from !== null && from === to) return <Center component="h2">You're already there!</Center>;

	if (to === 'Neo Tokyo' && !selectedItems['Gate Pass'])
		return (
			<Center>
				<Title order={2}>
					Accessing Neo Tokyo requires the{' '}
					<ExternalLink href="https://forum.maplelegends.com/index.php?threads/neo-tokyo-guide.25729/">
						Gate Pass
					</ExternalLink>
				</Title>
			</Center>
		);

	if (from && isUnnavigaableRegion(from)) {
		return (
			<Center>
				<Title order={2}>
					First move back to your original location via {from === 'Florina Beach' ? <PisonLink /> : <SpinelLink />}
				</Title>
			</Center>
		);
	}

	return null;
}

function SpinelLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=9000020">Spinel</ExternalLink>;
}

function PisonLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=1081001">Pison</ExternalLink>;
}
