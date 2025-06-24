'use client';

import { shortestPath } from 'graph-data-structure';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useGraph } from '../graph';
import type { Edge } from '../graph/edges';
import type { Region } from '../graph/regions';

export type PathfinderContextValue = {
	findPath: (from: Region, to: Region) => void;
} & (
	| {
			from: undefined;
			path: undefined;
			to: undefined;
	  }
	| {
			from: Region;
			path: Edge[];
			to: Region;
	  }
);

export const PathfinderContext = createContext<PathfinderContextValue | null>(null);

export function PathfinderContextProvider({ children }: React.PropsWithChildren) {
	const [from, setFrom] = useState<Region>();
	const [to, setTo] = useState<Region>();
	const [path, setPath] = useState<Edge[]>([]);
	const graph = useGraph();

	const findPath = useCallback<PathfinderContextValue['findPath']>(
		(from, to) => {
			setFrom(from);
			setTo(to);

			try {
				const nodePath = shortestPath(graph, from, to).nodes;
				const edgePath = nodePath.reduce<Edge[]>((acc, cur, idx, arr) => {
					if (idx === arr.length - 1) return acc;

					const edge = graph.getEdgeProperties(cur, arr[idx + 1]);

					if (!edge) return acc;

					acc.push(edge);

					return acc;
				}, []);

				setPath(edgePath);
			} catch {
				setPath([]);
			}
		},
		[graph],
	);

	const value = useMemo<PathfinderContextValue>(() => {
		if (!from || !to) return { findPath };

		return {
			findPath,
			from,
			path,
			to,
		};
	}, [findPath, from, path, to]);

	return <PathfinderContext value={value}>{children}</PathfinderContext>;
}

export function usePathfinder() {
	const value = useContext(PathfinderContext);

	if (value === null) throw new Error('usePathfinder must be used within a PathFinderContextProvider');

	return value;
}
