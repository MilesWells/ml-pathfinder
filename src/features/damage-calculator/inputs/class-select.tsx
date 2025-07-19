'use client';

import { Select, type SelectProps } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage/maple-class';
import { MAPLE_CLASSES, type MapleClass } from '@/lib/maple-classes';

export function ClassSelect(props: SelectProps) {
	const { mapleClass, setMapleClass } = useMapleClass();

	return (
		<Select
			allowDeselect={false}
			data={MAPLE_CLASSES}
			label="Class"
			onChange={c => setMapleClass(c as MapleClass)}
			styles={{
				input: {
					caretColor: 'transparent',
				},
			}}
			value={mapleClass}
			{...props}
		/>
	);
}
