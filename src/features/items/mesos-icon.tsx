export type MesosIconProps = {
	mesos: number;
};

export function MesosIcon({ mesos }: MesosIconProps) {
	return (
		<img
			alt={`${mesos} mesos`}
			height={23}
			src="/images/mesos.png"
			width={23}
		/>
	);
}
