import type { Item } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	return <span title={item}>🟨</span>;
}
