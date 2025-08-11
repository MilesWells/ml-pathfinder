'use client';

import { useDrawersStack } from '@mantine/core';
import { createContext, useContext, useMemo } from 'react';
import { type Item, items } from '.';

function useItemDrawersInternal() {
	const stack = useDrawersStack(['item-selection', ...items]);

	const registrations = useMemo(() => {
		return items.reduce<Record<Item, ReturnType<typeof stack.register>>>(
			(acc, cur) => {
				acc[cur] = stack.register(cur);
				return acc;
			},
			{} as Record<Item, ReturnType<typeof stack.register>>,
		);
	}, [stack.register]);

	const itemSelection = useMemo(() => {
		return {
			'item-selection': stack.register('item-selection'),
		};
	}, [stack.register]);

	return useMemo(
		() => ({
			itemStack: stack,
			...registrations,
			...itemSelection,
		}),
		[itemSelection, registrations, stack],
	);
}

export type ItemDrawersContextValue = ReturnType<typeof useItemDrawersInternal>;

export const ItemDrawersContext = createContext<ItemDrawersContextValue | null>(null);

export function ItemDrawersProvider({ children }: React.PropsWithChildren) {
	const value = useItemDrawersInternal();

	return <ItemDrawersContext value={value}>{children}</ItemDrawersContext>;
}

export function useItemDrawersStack() {
	const value = useContext(ItemDrawersContext);

	if (value === null) {
		throw new Error('useItemDrawersStack must be used within a ItemDrawersProvider');
	}

	return value;
}
