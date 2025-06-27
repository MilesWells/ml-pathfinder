import { Text } from '@mantine/core';
import { npcDetailsMap } from '@/features/npcs';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, ItemTaxiEdge, SpinelEdge, TaxiEdge, TimedTaxiEdge } from '../edges';

export type NPCEdge = Extract<Edge, TaxiEdge | TimedTaxiEdge | SpinelEdge | ItemTaxiEdge>;

export type NpcPopoverContentProps = {
	edge: NPCEdge;
};

export function NpcPopoverContent({ edge }: NpcPopoverContentProps) {
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
