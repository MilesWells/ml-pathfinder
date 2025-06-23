import { Center } from '@mantine/core';

export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	return (
		<Center styles={{ root: { height: 30, width: 30 } }}>
			<img alt={`${mesos} mesos`} src="/images/mesos.png" />
		</Center>
	);
}
