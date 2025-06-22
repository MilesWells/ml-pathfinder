import { Group, Text } from '@mantine/core';
import Image from 'next/image';
import type { Edge } from '../graph/edges';

export type MethodIconProps = {
	edge: Edge;
	label: string;
};

export function MethodIcon({ edge, label }: MethodIconProps) {
	return (
		<Group align="center">
			<Icon edge={edge} />
			<Text>{label}</Text>
		</Group>
	);
}

function Icon({ edge }: { edge: Edge }) {
	switch (edge.method) {
		case 'Walk':
			return '🚶';
		case 'Taxi':
		case 'Timed Taxi':
		case 'Spinel':
			return <MesosIcon mesos={edge.mesos} />;
		case 'Item':
		case 'Item Taxi':
			return <ItemIcon item={edge.item} />;
	}
}

type MesosIconProps = {
	mesos: number;
};

function MesosIcon({ mesos }: MesosIconProps) {
	return (
		<Image
			alt={`${mesos} mesos`}
			height={23}
			src="/images/mesos.png"
			width={23}
		/>
	);
}

type ItemIconProps = {
	item: string;
};

function ItemIcon({ item }: ItemIconProps) {
	return <span title={item}>🟨</span>;
}
