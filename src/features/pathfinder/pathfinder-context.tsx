'use client';

import { shortestPath } from 'graph-data-structure';
import type React from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useGraph } from '../graph';
import type { Edge } from '../graph/edges';
import { isUnnavigaableRegion, type NavigableRegion, type Region } from '../graph/regions';
import { useSelectedItems } from '../items/selected-items-context';

export type PathfinderContextValue = {
	findPath: () => void;
	fromFormValue: Region | null;
	setFromFormValue: React.Dispatch<React.SetStateAction<Region | null>>;
	setToFormValue: React.Dispatch<React.SetStateAction<Region | null>>;
	toFormValue: Region | null;
	from: NavigableRegion | null;
	path: Edge[];
	to: Region | null;
	canPath: boolean;
};

export const PathfinderContext = createContext<PathfinderContextValue | null>(null);

export function PathfinderContextProvider({ children }: React.PropsWithChildren) {
	const [fromFormValue, setFromFormValue] = useState<Region | null>(null);
	const [toFormValue, setToFormValue] = useState<Region | null>(null);
	const [from, setFrom] = useState<NavigableRegion | null>(null);
	const [to, setTo] = useState<Region | null>(null);
	const [path, setPath] = useState<Edge[]>([]);
	const graph = useGraph();
	const { selectedItems } = useSelectedItems();

	const findPath = useCallback<PathfinderContextValue['findPath']>(() => {
		if (!toFormValue || !fromFormValue || isUnnavigaableRegion(fromFormValue)) return;

		setFrom(fromFormValue);
		setTo(toFormValue);

		try {
			const nodePath = shortestPath(graph, fromFormValue, toFormValue).nodes;
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
	}, [toFormValue, fromFormValue, graph]);

	const canPath = useMemo(() => {
		if (!fromFormValue || !toFormValue) return false;

		if (isUnnavigaableRegion(fromFormValue)) return false;

		if (fromFormValue === toFormValue) return false;

		if (toFormValue === 'Neo Tokyo' && !selectedItems['Gate Pass']) return false;

		return true;
	}, [fromFormValue, toFormValue, selectedItems]);

	const value = useMemo<PathfinderContextValue>(
		() => ({
			canPath,
			findPath,
			from,
			fromFormValue,
			path,
			setFromFormValue,
			setToFormValue,
			to,
			toFormValue,
		}),
		[canPath, findPath, from, fromFormValue, path, to, toFormValue],
	);

	return <PathfinderContext value={value}>{children}</PathfinderContext>;
}

export function usePathfinder() {
	const value = useContext(PathfinderContext);

	if (value === null) throw new Error('usePathfinder must be used within a PathFinderContextProvider');

	return value;
}
