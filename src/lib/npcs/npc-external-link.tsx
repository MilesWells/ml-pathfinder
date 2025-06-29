import { ExternalLink, type ExternalLinkProps } from '@/ui/external-link';
import { type NPC, npcDetailsMap } from '.';

export type NpcExternalLinkProps = Omit<ExternalLinkProps, 'href'> & {
	npc: NPC;
};

export function NpcExternalLink({ npc, ...props }: NpcExternalLinkProps) {
	return (
		<ExternalLink href={npcDetailsMap[npc].docsLink} {...props}>
			{npc}
		</ExternalLink>
	);
}
