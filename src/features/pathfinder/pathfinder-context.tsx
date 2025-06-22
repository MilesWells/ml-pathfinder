'use client';

import { shortestPath } from 'graph-data-structure';
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import graph from '../graph';
import type { Region } from '../regions';

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
			path: Region[];
			to: Region;
	  }
);

export const PathfinderContext = createContext<PathfinderContextValue | null>(
	null,
);

export function PathfinderContextProvider({
	children,
}: React.PropsWithChildren) {
	const [from, setFrom] = useState<Region>();
	const [to, setTo] = useState<Region>();
	const [path, setPath] = useState<Region[]>([]);

	const findPath = useCallback<PathfinderContextValue['findPath']>(
		(from, to) => {
			setFrom(from);
			setTo(to);

			try {
				setPath(shortestPath(graph, from, to).nodes);
			} catch {}
		},
		[],
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

	if (value === null)
		throw new Error(
			'usePathfinder must be used within a PathFinderContextProvider',
		);

	return value;
}
