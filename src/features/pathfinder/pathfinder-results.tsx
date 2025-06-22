'use client';

import { Title } from '@mantine/core';
import { isUnnavigaableRegion } from '../regions';
import { usePathfinder } from './pathfinder-context';

export function PathfinderResults() {
	const { from, path } = usePathfinder();

	if (!from) {
		return <div>Select a starting and ending region</div>;
	}

	if (isUnnavigaableRegion(from)) {
		return <div>Staring from Unnavigable region.</div>;
	}

	if (!path) {
		return <div>No path found.</div>;
	}

	return (
		<div>
			<Title order={2}>Pathfinder Results</Title>
			<ol>
				{path.map(step => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</div>
	);
}
