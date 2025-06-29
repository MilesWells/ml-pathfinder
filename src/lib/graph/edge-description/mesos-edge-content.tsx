import { Text } from '@mantine/core';
import type { Edge, SpinelEdge, TaxiEdge } from '../edges';

export type MesosEdge = Extract<Edge, TaxiEdge | SpinelEdge>;

export type MesosEdgeContentProps = {
	edge: MesosEdge;
};

export function MesosEdgeContent({ edge }: MesosEdgeContentProps) {
	const mesoCost =
		edge.mesos !== 0 ? `${new Intl.NumberFormat().format(edge.mesos)} mesos` : 'Free!';

	return (
		<Text>
			Taxi Cost:{' '}
			<Text c="meso-yellow.6" component="span" fw="bold">
				{mesoCost}
			</Text>
		</Text>
	);
}
