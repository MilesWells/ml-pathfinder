'use client';

import { Center, Group, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
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
	return (
		<Group align="center">
			<Icon edge={edge} />

			<EdgePopover edge={edge} label={`${edge.from} -> ${edge.to}`} />
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

function EdgePopover({ edge, label }: { edge: Edge; label: string }) {
	const [opened, { close, open }] = useDisclosure(false);
	const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

	useEffect(() => {
		() => clearTimeout(closeTimeout);
	}, [closeTimeout]);

	function handleOpen() {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			setCloseTimeout(undefined);
		}

		open();
	}

	function handleClose() {
		setCloseTimeout(setTimeout(close, 75));
	}

	let content: React.ReactNode = 'Walk';
	if (edge.method === 'Item') content = <ItemEdgeCost edge={edge} />;
	else if (edge.method !== 'Walk') content = <NpcEdge edge={edge} />;

	return (
		<Popover opened={opened} position="right" shadow="md" withArrow>
			<PopoverTarget>
				<Center onMouseEnter={handleOpen} onMouseLeave={handleClose} style={{ cursor: 'pointer' }}>
					{label}
				</Center>
			</PopoverTarget>

			<PopoverDropdown onMouseEnter={handleOpen} onMouseLeave={handleClose}>
				{content}
			</PopoverDropdown>
		</Popover>
	);
}

type NPCEdge = Extract<Edge, TaxiEdge | TimedTaxiEdge | SpinelEdge | ItemTaxiEdge>;

function NpcEdge({ edge }: { edge: NPCEdge }) {
	const { docsLink, image } = npcDetailsMap[edge.npc];

	return (
		<Center style={{ flexDirection: 'column' }}>
			<ExternalLink href={docsLink} mb="md" mt="sm">
				<img alt={edge.npc} src={image} />
			</ExternalLink>

			<Text>
				NPC: <ExternalLink href={docsLink}>{edge.npc}</ExternalLink>
			</Text>

			<EdgeCost edge={edge} />

			{'item' in edge ? <ItemConsumption item={edge.item} /> : null}
		</Center>
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

function ItemEdgeCost({ edge }: { edge: Extract<Edge, ItemEdge | ItemTaxiEdge> }) {
	return (
		<Center style={{ flexDirection: 'column' }}>
			<Text>
				Item: <ExternalLink href={itemDetailsMap[edge.item].docsLink}>{edge.item}</ExternalLink>
			</Text>

			<ItemContent edge={edge} />

			<ItemConsumption item={edge.item} />
		</Center>
	);
}

function ItemContent({ edge: { from, to, item } }: { edge: Extract<Edge, ItemEdge | ItemTaxiEdge> }) {
	if (
		item === 'Command Center Warp Capsule' ||
		item === 'Ludibrium Warp Capsule' ||
		item === 'Omega Sector Warp Capsule'
	)
		return <Text>Only works within Ludus Lake</Text>;

	if (item === 'Return to New Leaf City Scroll') return <Text>Only works within Victoria Island</Text>;

	if (item === 'Fruit Milk' || item === 'Strawberry Milk') return <Text>Only works within Zipangu</Text>;

	if (item === 'Return Scroll - Nearest Town') {
		if (from === 'Korean Folk Town' && to === 'Aqua Road')
			return (
				<Text>
					Use in <ExternalLink href="https://maplelegends.com/lib/map?id=230030200">The Sharp Unknown</ExternalLink>
				</Text>
			);
	}

	return null;
}

function ItemConsumption({ item }: { item: Item }) {
	if (item === 'VIP Ticket to Florina Beach' || item === 'Gate Pass') return <Text>Not consumed on use</Text>;

	return <Text c="kimmy-red.5">Consumed on use</Text>;
}
