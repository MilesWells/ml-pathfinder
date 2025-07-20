import { NumberInput } from '@mantine/core';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';

export function TotalMagicInput() {
	const { updateSelectedCharacter } = useCharactersStore();
	const {
		equipment: { totalMagicAttack },
	} = useSelectedCharacter();

	return (
		<NumberInput
			description="'magic' from stats screen"
			label="Total Magic Attack"
			max={999999}
			min={1}
			onChange={n => updateSelectedCharacter({ equipment: { totalMagicAttack: Number(n) } })}
			value={totalMagicAttack}
		/>
	);
}
