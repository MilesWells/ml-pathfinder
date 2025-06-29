import type { Edge } from '../lib/graph/edges';
import { ItemIcon } from './item-icon';
import { MesosIcon } from './mesos-icon';
import { TaxiIcon } from './taxi-icon';
import { WalkIcon } from './walk-icon';

export type EdgeMethodIconProps = {
	edge: Edge;
};

export function EdgeMethodIcon({ edge }: EdgeMethodIconProps) {
	if ('mesos' in edge && edge.mesos > 0) return <MesosIcon mesos={edge.mesos} />;

	if ('item' in edge && edge.item !== null) return <ItemIcon item={edge.item} />;

	if (
		edge.method === 'Walk' ||
		edge.method === 'Map Feature' ||
		edge.method === 'Timed Map Feature'
	)
		return <WalkIcon />;

	return <TaxiIcon />;
}
