import { Group, Text } from '@mantine/core';
import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';
import { RightArrowIcon } from '../pathfinder/right-arrow-icon';
import { WalkIcon } from '../pathfinder/walk-icon';
import type { Edge } from './edges';

export type EdgeDescription = {
	edge: Edge;
};

export function EdgeDescription({ edge }: EdgeDescription) {
	return (
		<Group align="center">
			<Icon edge={edge} />
			<Text>
				{edge.from}
				{`->`}
				{edge.to}
			</Text>
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
			if (edge.mesos === 0) return <RightArrowIcon />;

			return <MesosIcon mesos={edge.mesos} />;
		case 'Item':
		case 'Item Taxi':
			return <ItemIcon item={edge.item} />;
	}
}
