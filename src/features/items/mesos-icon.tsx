import { Center } from '@mantine/core';

export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	const mesosIntl = new Intl.NumberFormat().format(mesos);

	return (
		<Center styles={{ root: { height: 30, width: 30 } }} title={`${mesosIntl} mesos`}>
			<img alt={`${mesosIntl} mesos`} src="/images/items/mesos.png" />
		</Center>
	);
}
