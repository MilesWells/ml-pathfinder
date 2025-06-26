import { shortestPath } from 'graph-data-structure';
import { describe, expect, test } from 'vitest';
import { getFullGraph } from '@/features/graph';
import { isUnnavigaableRegion, REGIONS } from '@/features/graph/regions';

const graph = getFullGraph();

describe('Navigable regions should be solvable', () => {
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
