import { Text } from '@mantine/core';
import { npcDetailsMap } from '@/lib/npcs';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, ItemTaxiEdge, SpinelEdge, TaxiEdge } from '../edges';

export type NPCEdge = Extract<Edge, TaxiEdge | SpinelEdge | ItemTaxiEdge>;

export type NpcEdgeContentProps = {
	edge: NPCEdge;
};

export function NpcEdgeContent({ edge }: NpcEdgeContentProps) {
	const { docsLink, image } = npcDetailsMap[edge.npc];

	return (
		<>
			{image && (
				<ExternalLink href={docsLink} mb="md" mt="sm">
					<img alt={edge.npc} src={image} />
				</ExternalLink>
			)}

			<Text>
				NPC: <ExternalLink href={docsLink}>{edge.npc}</ExternalLink>
			</Text>
		</>
	);
}
