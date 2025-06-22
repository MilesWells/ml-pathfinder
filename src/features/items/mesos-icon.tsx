import Image from 'next/image';

export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	return (
		<Image
			alt={`${mesos} mesos`}
			height={23}
			src="/images/mesos.png"
			width={23}
		/>
	);
}
