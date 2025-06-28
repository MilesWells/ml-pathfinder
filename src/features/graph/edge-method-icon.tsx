import { ItemIcon } from '../items/item-icon';
import { MesosIcon } from '../items/mesos-icon';
import { TaxiIcon } from '../pathfinder/taxi-icon';
import { WalkIcon } from '../pathfinder/walk-icon';
import type { Edge } from './edges';

export type EdgeMethodIconProps = {
	edge: Edge;
};

export function EdgeMethodIcon({ edge }: EdgeMethodIconProps) {
	if (edge.method === 'Walk') return <WalkIcon />;

	if ('mesos' in edge && edge.mesos > 0) return <MesosIcon mesos={edge.mesos} />;

	if ('item' in edge && edge.item !== null) return <ItemIcon item={edge.item} />;

	return <TaxiIcon />;
}
