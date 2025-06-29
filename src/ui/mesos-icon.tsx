import { IconBase } from '@/ui/icon-base';

export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	const mesosIntl = new Intl.NumberFormat().format(mesos);

	return (
		<IconBase title={`${mesosIntl} mesos`}>
			<img
				alt={`${mesosIntl} mesos`}
				src="/images/items/mesos.png"
				style={{
					margin: 'auto',
				}}
			/>
		</IconBase>
	);
}
