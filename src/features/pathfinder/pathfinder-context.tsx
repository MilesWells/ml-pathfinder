'use client';

import { shortestPath } from 'graph-data-structure';
import type React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useGraph } from '../graph';
import type { Edge } from '../graph/edges';
import { isUnnavigaableRegion, type NavigableRegion, type Region } from '../graph/regions';
import { useSelectedItems } from '../items/selected-items-context';

export type PathfinderContextValue = {
	from: Region | null;
	setFrom: React.Dispatch<React.SetStateAction<Region | null>>;
	setTo: React.Dispatch<React.SetStateAction<Region | null>>;
	to: Region | null;
	path: Edge[];
};

export const PathfinderContext = createContext<PathfinderContextValue | null>(null);

export function PathfinderContextProvider({ children }: React.PropsWithChildren) {
	const [from, setFrom] = useState<Region | null>(null);
	const [to, setTo] = useState<Region | null>(null);
	const graph = useGraph();
	const { selectedItems } = useSelectedItems();

	const path = useMemo<Edge[]>(() => {
		const path = { from, to };

		if (!canPath(path, selectedItems['Warp Card'])) return [];

		try {
			const nodePath = shortestPath(graph, path.from, path.to).nodes;

			return nodePath.reduce<Edge[]>((acc, cur, idx, arr) => {
				if (idx === arr.length - 1) return acc;

				const edge = graph.getEdgeProperties(cur, arr[idx + 1]);

				if (!edge) return acc;

				acc.push(edge);

				return acc;
			}, []);
		} catch {
			return [];
		}
	}, [from, graph, selectedItems, to]);

	const value = useMemo<PathfinderContextValue>(
		() => ({
			from: from,
			path,
			setFrom: setFrom,
			setTo: setTo,
			to: to,
		}),
		[from, path, to],
	);

	return <PathfinderContext value={value}>{children}</PathfinderContext>;
}

export function canPath(
	input: { from: Region | null; to: Region | null },
	hasGatePass: boolean,
): input is { from: NavigableRegion; to: Region } {
	const { from, to } = input;

	if (!from || !to) return false;

	if (isUnnavigaableRegion(from)) return false;

	if (from === to) return false;

	if (to === 'Neo Tokyo' && !hasGatePass) return false;

	return true;
}

export function usePathfinder() {
	const value = useContext(PathfinderContext);

	if (value === null) throw new Error('usePathfinder must be used within a PathFinderContextProvider');

	return value;
}
