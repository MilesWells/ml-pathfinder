import { shortestPath } from 'graph-data-structure';
import { describe, expect, test } from 'vitest';
import { getFullGraph, getGraphWithoutItemEdges } from '@/features/graph';
import { isUnnavigaableRegion, REGIONS } from '@/features/graph/regions';

describe('Navigable regions should be solvable', () => {
	const graph = getFullGraph();

	for (const from of REGIONS) {
		if (isUnnavigaableRegion(from)) continue;

		for (const to of REGIONS) {
			if (from === to) continue;

			test(`${from}->${to} should not throw an error`, () => {
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

			test(`${from}->${to} should not throw an error`, () => {
				expect(() => shortestPath(graph, from, to)).not.to.throw();
			});
		}
	}
});
