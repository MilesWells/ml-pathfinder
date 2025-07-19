import { NumberInput } from '@mantine/core';
import { useSpellDamage } from '@/lib/local-storage/stats';

export function SpellDamageInput() {
	const { spellDamage, setSpellDamage } = useSpellDamage();

	return (
		<NumberInput
			label="Spell Damage"
			max={9999}
			min={1}
			onChange={n => setSpellDamage(Number(n))}
			value={spellDamage}
		/>
	);
}
