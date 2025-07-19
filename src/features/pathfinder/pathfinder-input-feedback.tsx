'use client';

import { Alert, Center, Text } from '@mantine/core';
import { isUnnavigaableRegion } from '@/lib/regions';
import { ExternalLink } from '@/ui/external-link';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInputFeedback() {
	const { startingRegion, destinationRegion } = usePathfinder();

	let content: React.ReactNode;

	if (startingRegion && isUnnavigaableRegion(startingRegion)) {
		content = (
			<Text fz="lg" ta="center">
				First move back to your original location via{' '}
				{startingRegion === 'Florina Beach' ? <PisonLink /> : <SpinelLink />}
			</Text>
		);
	}

	if (startingRegion !== null && startingRegion === destinationRegion)
		content = <Text fz="lg">You're already there!</Text>;

	if (content)
		return (
			<Center>
				<Alert color="kimmy-red.5">{content}</Alert>
			</Center>
		);

	return null;
}

function SpinelLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=9000020">Spinel</ExternalLink>;
}

function PisonLink() {
	return <ExternalLink href="https://maplelegends.com/lib/npc?id=1081001">Pison</ExternalLink>;
}
