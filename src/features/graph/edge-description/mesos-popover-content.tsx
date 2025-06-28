import { Text } from '@mantine/core';
import type { Edge, SpinelEdge, TaxiEdge, TimedTaxiEdge } from '../edges';

export type MesosEdge = Extract<Edge, TaxiEdge | TimedTaxiEdge | SpinelEdge>;

export type MesosPopoverContentProps = {
	edge: MesosEdge;
};

export function MesosPopoverContent({ edge }: MesosPopoverContentProps) {
	const mesoCost = edge.mesos !== 0 ? `${new Intl.NumberFormat().format(edge.mesos)} mesos` : 'Free!';

	return (
		<Text>
			Taxi Cost:{' '}
			<Text c="meso-yellow.6" component="span" fw="bold">
				{mesoCost}
			</Text>
		</Text>
	);
}
