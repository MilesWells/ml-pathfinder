import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';
import { TaxiIcon } from '../pathfinder/taxi-icon';
import { WalkIcon } from '../pathfinder/walk-icon';
import type { Edge } from './edges';

export type EdgeMethodIconProps = {
	edge: Edge;
};

export function EdgeMethodIcon({ edge }: EdgeMethodIconProps) {
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
