import { Graph } from 'graph-data-structure';
import { type Edge, type EdgeMethod, edges } from './edges';
import { REGIONS, type Region } from './regions';

const graphWeights: Record<EdgeMethod, number> = {
	Item: 0,
	Taxi: 1,
	Spinel: 1,
	'Item Taxi': 1,
	'Timed Taxi': 2,
	Walk: 2,
};

const graph = new Graph<Region, Edge>();

for (const node of REGIONS) graph.addNode(node);

for (const edge of edges)
	graph.addEdge(edge.from, edge.to, {
		weight: graphWeights[edge.method],
		props: edge,
	});

export default graph;
