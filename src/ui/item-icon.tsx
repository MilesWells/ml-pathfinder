'use client';

import { useContext } from 'react';
import { type Item, itemDetailsMap } from '@/lib/items';
import { ItemDrawersContext } from '@/lib/items/item-drawer-context';
import { IconBase, type IconBaseProps } from '@/ui/icon-base';

export type ItemIconProps = IconBaseProps & {
	item: Item;
};

export function ItemIcon({ item, onClick, style, ...baseProps }: ItemIconProps) {
	const drawersStack = useContext(ItemDrawersContext);

	return (
		<IconBase
			display="inline-flex"
			onClick={e => {
				onClick?.(e);
				drawersStack?.itemStack.open(item);
			}}
			style={{
				...style,
				cursor: drawersStack === null ? 'default' : 'pointer',
			}}
			title={item}
			{...baseProps}
		>
			<img
				alt={item}
				src={itemDetailsMap[item].image}
				style={{
					margin: 'auto',
				}}
			/>
		</IconBase>
	);
}
