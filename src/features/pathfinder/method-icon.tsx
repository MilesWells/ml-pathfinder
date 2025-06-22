import { Group, Text } from '@mantine/core';
import type { Edge } from '../graph/edges';
import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';

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
