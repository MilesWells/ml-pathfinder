'use client';

import { List, ListItem, Stack, Title } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import type { EdgeId, EdgeMethod } from './graph/edges';
import { ItemDrawerLink } from './items/item-drawer-link';
import { useSelectedItems } from './items/selected-items-context';
import { REGION_LINK_MAP, type Region } from './regions';

const EDGE_IDS_WITH_STEPS = [
	'Walk|Aqua Road|El Nath',
	'Walk|El Nath|Aqua Road',

	'Walk|El Nath|Orbis',
	'Walk|Orbis|El Nath',

	'Walk|Ludibrium|Omega Sector',
	'Walk|Omega Sector|Ludibrium',

	'Walk|Korean Folk Town|Aqua Road',

	'Walk|Mushroom Shrine|Showa',
] as const satisfies EdgeId[];

type EdgeIdWithSteps = (typeof EDGE_IDS_WITH_STEPS)[number];

function isEdgeIdWithSteps(edgeId: EdgeId): edgeId is EdgeIdWithSteps {
	return EDGE_IDS_WITH_STEPS.some(e => e === edgeId);
}

export type WalkPathingDetailsProps = {
	edgeId: EdgeId;
};

export function WalkPathingSteps({ edgeId }: WalkPathingDetailsProps) {
	const {
		selectedItems: { 'Return Scroll - Nearest Town': hasNearestTownScroll },
	} = useSelectedItems();

	const [, from, to] = edgeId.split('|') as [EdgeMethod, Region, Region];

	return (
		<Stack ta="center">
			<Title order={5} td="underline">
				Walking from {from} to {to}
			</Title>

			{isEdgeIdWithSteps(edgeId) && (
				<List type="ordered">
					<Steps edgeId={edgeId} hasNearestTownScroll={hasNearestTownScroll} />
				</List>
			)}
		</Stack>
	);
}

type StepsProps = {
	edgeId: EdgeIdWithSteps;
	hasNearestTownScroll: boolean;
};

function Steps({ edgeId, hasNearestTownScroll }: StepsProps) {
	const [, , to] = edgeId.split('|') as [EdgeMethod, Region, Region];

	if (!hasNearestTownScroll)
		return (
			<ListItem>
				Walk to <ExternalLink href={REGION_LINK_MAP[to]}>{to}</ExternalLink>
			</ListItem>
		);

	switch (edgeId) {
		case 'Walk|Aqua Road|El Nath':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=200082300">{`Orbis Tower <B2>`}</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP['El Nath']}>El Nath</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|El Nath|Aqua Road':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=230010000">
							Ocean I.C
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP['Aqua Road']}>Aqua Road</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|El Nath|Orbis':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=200081400">
							{'Orbis Tower <8th Floor>'}
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP.Orbis}>Orbis</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|Orbis|El Nath':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=200081500">
							{'Orbis Tower <7th Floor>'}
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP['El Nath']}>El Nath</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|Ludibrium|Omega Sector':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=221022100">
							Eos Tower 45th Floor
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in{' '}
						<ExternalLink href={REGION_LINK_MAP['Omega Sector']}>Omega Sector</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|Omega Sector|Ludibrium':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=221022200">
							Eos Tower 46th ~ 55th Floor
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP.Ludibrium}>Ludibrium</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|Korean Folk Town|Aqua Road':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=230030200">
							The Sharp Unknown
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP['Aqua Road']}>Aqua Road</ExternalLink>
					</ListItem>
				</>
			);
		case 'Walk|Mushroom Shrine|Showa':
			return (
				<>
					<ListItem>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=801030000">
							Showa Street 3
						</ExternalLink>
					</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>
						Arrived in <ExternalLink href={REGION_LINK_MAP.Showa}>Showa</ExternalLink>
					</ListItem>
				</>
			);
	}
}
