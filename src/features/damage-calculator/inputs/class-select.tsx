'use client';

import type { SelectProps } from '@mantine/core';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { MAPLE_CLASSES, type MapleClass } from '@/lib/maple-classes';
import { SelectNoInput } from '@/ui/select-no-input';

export function ClassSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange'>) {
	const {
		selectedCharacter: { mapleClass, name },
		updateCharacter,
	} = useCharacters();

	return (
		<SelectNoInput
			data={MAPLE_CLASSES}
			label="Class"
			onChange={c => updateCharacter(name, { mapleClass: c as MapleClass })}
			value={mapleClass}
			{...props}
		/>
	);
}
