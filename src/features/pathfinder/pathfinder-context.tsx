'use client';

import { shortestPath } from 'graph-data-structure';
import type React from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { z } from 'zod';
import { useGraph } from '@/lib/graph';
import type { Edge } from '@/lib/graph/edges';
import { useSelectedItems } from '@/lib/items/selected-items-context';
import { isUnnavigaableRegion, type NavigableRegion, REGIONS, type Region } from '@/lib/regions';

const FROM_LOCAL_STORAGE_KEY = 'ml-p-from';
const TO_LOCAL_STORAGE_KEY = 'ml-p-to';

const regionSchema = z.enum(REGIONS).nullable();

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

	useEffect(() => {
		const fromParseResult = regionSchema.safeParse(
			JSON.parse(localStorage.getItem(FROM_LOCAL_STORAGE_KEY) ?? 'null'),
		);
		const toParseResult = regionSchema.safeParse(
			JSON.parse(localStorage.getItem(TO_LOCAL_STORAGE_KEY) ?? 'null'),
		);

		if (fromParseResult.success) setFrom(fromParseResult.data);
		if (toParseResult.success) setTo(toParseResult.data);
	}, []);

	const path = useMemo<Edge[]>(() => {
		const path = { from, to };

		if (!canPath(path, selectedItems['Gate Pass'])) return [];

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

	const setFromWrapped = useCallback<PathfinderContextValue['setFrom']>(localFrom => {
		setFrom(localFrom);
		localStorage.setItem(FROM_LOCAL_STORAGE_KEY, JSON.stringify(localFrom));
	}, []);

	const setToWrapped = useCallback<PathfinderContextValue['setTo']>(localTo => {
		setTo(localTo);
		localStorage.setItem(TO_LOCAL_STORAGE_KEY, JSON.stringify(localTo));
	}, []);

	const value = useMemo<PathfinderContextValue>(
		() => ({
			from,
			path,
			setFrom: setFromWrapped,
			setTo: setToWrapped,
			to,
		}),
		[from, path, setFromWrapped, setToWrapped, to],
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

	if (value === null)
		throw new Error('usePathfinder must be used within a PathFinderContextProvider');

	return value;
}
