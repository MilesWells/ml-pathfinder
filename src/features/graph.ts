import { Graph } from 'graph-data-structure';
import { type Edge, edges } from './edges';
import { REGIONS, type Region } from './regions';

const graph = new Graph<Region, Edge>();

for (const node of REGIONS) graph.addNode(node);

for (const edge of edges)
	graph.addEdge(edge.from, edge.to, {
		weight: 1,
		props: edge,
	});

export default graph;
