'use client';

import { Select } from '@mantine/core';
import { CLASSES, type Class } from '@/lib/classes';
import { useDamageOptions } from './use-damage-options';

export function ClassSelect() {
	const { options, setOptions } = useDamageOptions();

	return (
		<Select
			data={CLASSES}
			label="Choose your class"
			maw="300px"
			mx="auto"
			onChange={c => setOptions({ ...options, class: c as Class })}
			searchable
			value={options.class}
		/>
	);
}
