import { shortestPath } from 'graph-data-structure';
import { describe, expect, test } from 'vitest';
import { canPath } from '@/features/pathfinder/pathfinder-context';
import { getFullGraph, getGraphWithoutItemEdges } from '@/lib/graph';
import { isUnnavigaableRegion, REGIONS } from '@/lib/regions';

describe('Navigable regions should be solvable', () => {
	const graph = getFullGraph();

	for (const startingRegion of REGIONS) {
		if (isUnnavigaableRegion(startingRegion)) continue;

		for (const destinationRegion of REGIONS) {
			if (startingRegion === destinationRegion) continue;

			test(`${startingRegion}->${destinationRegion} should be solvable`, () => {
				expect(canPath({ destinationRegion, startingRegion })).toBeTruthy();
				expect(() => shortestPath(graph, startingRegion, destinationRegion)).not.to.throw();
			});
		}
	}
});

describe('Navigable regions should be solvable without items', () => {
	const graph = getGraphWithoutItemEdges();

	for (const startingRegion of REGIONS) {
		if (isUnnavigaableRegion(startingRegion)) continue;

		for (const destinationRegion of REGIONS) {
			if (startingRegion === destinationRegion) continue;
			if (destinationRegion === 'Neo Tokyo') continue; // Neo Tokyo requires an item to access

			test(`${startingRegion}->${destinationRegion} should be solveable`, () => {
				expect(canPath({ destinationRegion, startingRegion })).toBeTruthy();
				expect(() => shortestPath(graph, startingRegion, destinationRegion)).not.to.throw();
			});
		}
	}
});
