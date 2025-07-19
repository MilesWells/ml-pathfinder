'use client';

import { shortestPath } from 'graph-data-structure';
import type React from 'react';
import { createContext, useContext, useMemo } from 'react';
import { useGraph } from '@/lib/graph';
import type { Edge } from '@/lib/graph/edges';
import { useDestinationRegion, useStartingRegion } from '@/lib/local-storage/pathfinder/regions';
import { isUnnavigaableRegion, type NavigableRegion, type Region } from '@/lib/regions';

export type PathfinderContextValue = {
	startingRegion: Region;
	destinationRegion: Region;
	setStartingRegion: (region: Region) => void;
	setDestinationRegion: (region: Region) => void;
	path: Edge[];
};

export const PathfinderContext = createContext<PathfinderContextValue | null>(null);

export function PathfinderContextProvider({ children }: React.PropsWithChildren) {
	const graph = useGraph();
	const { startingRegion, setStartingRegion } = useStartingRegion();
	const { destinationRegion, setDestinationRegion } = useDestinationRegion();

	const path = useMemo<Edge[]>(() => {
		const path = { destinationRegion, startingRegion };

		if (!canPath(path)) return [];

		try {
			const nodePath = shortestPath(graph, path.startingRegion, path.destinationRegion).nodes;

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
	}, [startingRegion, destinationRegion, graph]);

	const value = useMemo<PathfinderContextValue>(
		() => ({
			destinationRegion,
			path,
			setDestinationRegion,
			setStartingRegion,
			startingRegion,
		}),
		[startingRegion, destinationRegion, path, setDestinationRegion, setStartingRegion],
	);

	return <PathfinderContext value={value}>{children}</PathfinderContext>;
}

export function canPath(input: {
	startingRegion: Region;
	destinationRegion: Region;
}): input is { startingRegion: NavigableRegion; destinationRegion: Region } {
	const { startingRegion, destinationRegion } = input;

	if (isUnnavigaableRegion(startingRegion)) return false;

	if (startingRegion === destinationRegion) return false;

	return true;
}

export function usePathfinder() {
	const value = useContext(PathfinderContext);

	if (value === null)
		throw new Error('usePathfinder must be used within a PathFinderContextProvider');

	return value;
}
