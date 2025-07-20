'use client';

import type { SelectProps } from '@mantine/core';
import { MAPLE_CLASSES, type MapleClass } from '@/lib/maple-classes';
import { useCharactersStore, useSelectedCharacter } from '@/lib/zustand/characters-store';
import { SelectNoInput } from '@/ui/select-no-input';

export function ClassSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange'>) {
	const { updateSelectedCharacter } = useCharactersStore();
	const selectedCharacter = useSelectedCharacter();

	return (
		<SelectNoInput
			data={MAPLE_CLASSES}
			label="Class"
			onChange={c => updateSelectedCharacter({ mapleClass: c as MapleClass })}
			value={selectedCharacter.mapleClass}
			{...props}
		/>
	);
}
