import { shortestPath } from 'graph-data-structure';
import { describe, expect, test } from 'vitest';
import { canPath } from '@/features/pathfinder/pathfinder-context';
import { getFullGraph, getGraphWithoutItemEdges } from '@/lib/graph';
import { isUnnavigaableRegion, REGIONS } from '@/lib/regions';

describe('Navigable regions should be solvable', () => {
	const graph = getFullGraph();

	for (const from of REGIONS) {
		if (isUnnavigaableRegion(from)) continue;

		for (const to of REGIONS) {
			if (from === to) continue;

			test(`${from}->${to} should be solvable`, () => {
				expect(canPath({ from, to }, true)).toBeTruthy();
				expect(() => shortestPath(graph, from, to)).not.to.throw();
			});
		}
	}
});

describe('Navigable regions should be solvable without items', () => {
	const graph = getGraphWithoutItemEdges();

	for (const from of REGIONS) {
		if (isUnnavigaableRegion(from)) continue;

		for (const to of REGIONS) {
			if (from === to) continue;
			if (to === 'Neo Tokyo') continue; // Neo Tokyo requires an item to access

			test(`${from}->${to} should be solveable`, () => {
				expect(canPath({ from, to }, false)).toBeTruthy();
				expect(() => shortestPath(graph, from, to)).not.to.throw();
			});
		}
	}
});
