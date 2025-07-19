'use client';

import { Select } from '@mantine/core';
import { MAPLE_CLASSES, type MapleClass } from '@/lib/maple-classes';
import { useMapleClass } from './hooks';

export function ClassSelect() {
	const { mapleClass, setMapleClass } = useMapleClass();

	return (
		<Select
			data={MAPLE_CLASSES}
			label="Choose your class"
			maw="300px"
			mx="auto"
			onChange={c => setMapleClass(c as MapleClass)}
			searchable
			value={mapleClass}
		/>
	);
}
