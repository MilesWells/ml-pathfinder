import { Text } from '@mantine/core';
import { type NPC, npcDetailsMap } from '@/lib/npcs';
import { ExternalLink } from '@/ui/external-link';

export type NpcDescriptionProps = {
	npc: NPC;
};

export function NpcDescription({ npc }: NpcDescriptionProps) {
	const { docsLink, image } = npcDetailsMap[npc];

	return (
		<>
			<ExternalLink href={docsLink} mb="md" mt="sm">
				<img alt={npc} src={image} />
			</ExternalLink>

			<Text>
				NPC: <ExternalLink href={docsLink}>{npc}</ExternalLink>
			</Text>
		</>
	);
}
