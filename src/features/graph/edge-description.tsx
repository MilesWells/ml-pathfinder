'use client';

import { Box, Center, Group, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ExternalLink } from '@/ui/external-link';
import { type Item, itemDetailsMap } from '../items';
import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';
import { npcDetailsMap } from '../npcs';
import { TaxiIcon } from '../pathfinder/taxi-icon';
import { WalkIcon } from '../pathfinder/walk-icon';
import type { Edge, ItemEdge, ItemTaxiEdge, SpinelEdge, TaxiEdge, TimedTaxiEdge } from './edges';

export type EdgeDescription = {
	edge: Edge;
};

export function EdgeDescription({ edge }: EdgeDescription) {
	const label = `${edge.from} -> ${edge.to}`;

	let content = <Text>{label}</Text>;
	if (edge.method === 'Item') content = <ItemEdgeCost edge={edge} label={label} />;
	else if (edge.method !== 'Walk') content = <NpcEdge edge={edge} label={label} />;

	return (
		<Group align="center">
			<Icon edge={edge} />

			{content}
		</Group>
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

					{'item' in edge ? <ItemConsumption item={edge.item} /> : null}
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

function ItemEdgeCost({ edge, label }: { edge: Extract<Edge, ItemEdge | ItemTaxiEdge>; label: string }) {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<Popover opened={opened} position="right" shadow="md" withArrow>
			<PopoverTarget>
				<Center onMouseEnter={open} onMouseLeave={close}>
					<ExternalLink href={itemDetailsMap[edge.item].docsLink}>{label}</ExternalLink>
				</Center>
			</PopoverTarget>

			<PopoverDropdown style={{ pointerEvents: 'none' }}>
				<Center style={{ flexDirection: 'column' }}>
					<Text c="maplelegends-blue.6" component="span" fw="bold">
						{edge.item}
					</Text>

					<ItemContent item={edge.item} />

					<ItemConsumption item={edge.item} />
				</Center>
			</PopoverDropdown>
		</Popover>
	);
}

function ItemContent({ item }: { item: Item }) {
	if (
		item === 'Command Center Warp Capsule' ||
		item === 'Ludibrium Warp Capsule' ||
		item === 'Omega Sector Warp Capsule'
	)
		return <Text>Only works within Ludus Lake</Text>;

	if (item === 'Return to New Leaf City Scroll') return <Text>Only works within Victoria Island</Text>;

	if (item === 'Fruit Milk' || item === 'Strawberry Milk') return <Text>Only works within Zipangu</Text>;

	return null;
}

function ItemConsumption({ item }: { item: Item }) {
	if (item === 'VIP Ticket to Florina Beach' || item === 'Gate Pass') return <Text>Not consumed on use</Text>;

	return <Text c="kimmy-red.5">Consumed on use</Text>;
}
