'use client';

import { Box, Center, Group, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ExternalLink } from '@/ui/external-link';
import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';
import { npcDetailsMap } from '../npcs';
import { TaxiIcon } from '../pathfinder/taxi-icon';
import { WalkIcon } from '../pathfinder/walk-icon';
import type { Edge, ItemTaxiEdge, SpinelEdge, TaxiEdge, TimedTaxiEdge } from './edges';

export type EdgeDescription = {
	edge: Edge;
};

export function EdgeDescription({ edge }: EdgeDescription) {
	const label = `${edge.from} -> ${edge.to}`;

	return (
		<Group align="center">
			<Icon edge={edge} />

			{'npc' in edge ? <NpcEdge edge={edge} label={label} /> : <Text>{label}</Text>}
		</Group>
	);
}

type NPCEdge = Extract<Edge, TaxiEdge | TimedTaxiEdge | SpinelEdge | ItemTaxiEdge>;

function NpcEdge({ edge, label }: { edge: NPCEdge; label: string }) {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<Popover opened={opened} position="right" shadow="md" withArrow>
			<PopoverTarget>
				<Center onMouseEnter={open} onMouseLeave={close}>
					<ExternalLink href={npcDetailsMap[edge.npc].docsLink}>{label}</ExternalLink>
				</Center>
			</PopoverTarget>

			<PopoverDropdown style={{ pointerEvents: 'none' }}>
				<Center style={{ flexDirection: 'column' }}>
					<Box mb="md">
						<img alt={edge.npc} src={npcDetailsMap[edge.npc].image} />
					</Box>

					<Box>
						<Text>
							NPC:{' '}
							<Text c="maplelegends-blue.6" component="span" fw="bold">
								{edge.npc}
							</Text>
						</Text>
					</Box>

					<EdgeCost edge={edge} />
				</Center>
			</PopoverDropdown>
		</Popover>
	);
}

function EdgeCost({ edge }: { edge: NPCEdge }) {
	if (edge.method === 'Item Taxi')
		return (
			<Text>
				Taxi Cost:{' '}
				<Text c="maplelegends-blue.6" component="span" fw="bold">
					{edge.item}
				</Text>
			</Text>
		);

	return (
		<Text>
			Taxi Cost:{' '}
			<Text c="meso-yellow.6" component="span" fw="bold">
				{'mesos' in edge && edge.mesos !== 0 ? `${new Intl.NumberFormat().format(edge.mesos)} mesos` : 'Free!'}
			</Text>
		</Text>
	);
}

function Icon({ edge }: { edge: Edge }) {
	switch (edge.method) {
		case 'Walk':
			return <WalkIcon />;
		case 'Taxi':
		case 'Timed Taxi':
		case 'Spinel':
			if (edge.mesos === 0) return <TaxiIcon />;

			return <MesosIcon mesos={edge.mesos} />;
		case 'Item':
		case 'Item Taxi':
			return <ItemIcon item={edge.item} />;
	}
}
