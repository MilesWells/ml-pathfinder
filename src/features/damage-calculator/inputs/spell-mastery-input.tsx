import { NumberInput } from '@mantine/core';
import { useSpellMastery } from '@/lib/local-storage/stats';

export function SpellMasteryInput() {
	const { spellMastery, setSpellMastery } = useSpellMastery();

	return (
		<NumberInput
			label="Spell Mastery"
			max={100}
			min={0}
			onChange={n => setSpellMastery(Number(n))}
			suffix="%"
			value={spellMastery}
		/>
	);
}
