'use client';

import type { SelectProps } from '@mantine/core';
import { useMapleClass } from '@/lib/local-storage/maple-class';
import { MAPLE_CLASSES, type MapleClass } from '@/lib/maple-classes';
import { SelectNoInput } from '@/ui/select-no-input';

export function ClassSelect(props: Omit<SelectProps, 'data' | 'value' | 'onChange'>) {
	const { mapleClass, setMapleClass } = useMapleClass();

	return (
		<SelectNoInput
			data={MAPLE_CLASSES}
			label="Class"
			onChange={c => setMapleClass(c as MapleClass)}
			value={mapleClass}
			{...props}
		/>
	);
}
