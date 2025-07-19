import { NumberInput } from '@mantine/core';
import { useTotalMagicAttack } from '@/lib/local-storage/stats';

export function TotalMagicInput() {
	const { totalMagicAttack, setTotalMagicAttack } = useTotalMagicAttack();

	return (
		<NumberInput
			clampBehavior="strict"
			description="'magic' from stats screen"
			label="Total Magic Attack"
			max={999999}
			min={1}
			onChange={n => setTotalMagicAttack(Number(n))}
			value={totalMagicAttack}
		/>
	);
}
