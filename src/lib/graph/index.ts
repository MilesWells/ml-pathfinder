'use client';

import { Graph } from 'graph-data-structure';
import { useMemo } from 'react';
import { useSelectedItems } from '../items/selected-items-context';
import { REGIONS, type Region } from '../regions';
import { type Edge, type EdgeMethod, edges } from './edges';

const edgeMethodWeights: Record<EdgeMethod, number> = {
	Item: 0,
	'Item Taxi': 1,
	'Map Feature': 1,
	Spinel: 1,
	Taxi: 1,
	'Timed Map Feature': 3,
	'Timed Taxi': 3,
	Walk: 10,
};

export function useGraph() {
	const { selectedItems } = useSelectedItems();

	return useMemo(() => {
		const graph = new Graph<Region, Edge>();

		for (const node of REGIONS) graph.addNode(node);

		const filteredEdges = edges.filter(edge => {
			if (!('item' in edge) || edge.item === null) return true;

			if (selectedItems[edge.item]) return true;

			return false;
		});

		for (const edge of filteredEdges)
			graph.addEdge(edge.from, edge.to, {
				props: edge,
				weight: edge.weight ?? edgeMethodWeights[edge.method],
			});

		return graph;
	}, [selectedItems]);
}

export function getFullGraph() {
	const graph = new Graph<Region, Edge>();

	for (const node of REGIONS) graph.addNode(node);

	for (const edge of edges)
		graph.addEdge(edge.from, edge.to, {
			props: edge,
			weight: edge.weight ?? edgeMethodWeights[edge.method],
		});

	return graph;
}

export function getGraphWithoutItemEdges() {
	const graph = new Graph<Region, Edge>();

	for (const node of REGIONS) graph.addNode(node);

	for (const edge of edges) {
		if ('item' in edge && edge.item !== null) continue;

		graph.addEdge(edge.from, edge.to, {
			props: edge,
			weight: edge.weight ?? edgeMethodWeights[edge.method],
		});
	}

	return graph;
}
