import { NumberInput } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';

export function TotalMagicInput() {
	const {
		selectedCharacter: {
			name,
			equipment: { totalMagicAttack },
		},
		updateCharacter,
	} = useCharacters();

	return (
		<NumberInput
			description="'magic' from stats screen"
			label="Total Magic Attack"
			max={999999}
			min={1}
			onChange={n => updateCharacter(name, { equipment: { totalMagicAttack: Number(n) } })}
			value={totalMagicAttack}
		/>
	);
}
