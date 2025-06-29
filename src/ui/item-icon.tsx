import { IconBase } from '@/ui/icon-base';
import { type Item, itemDetailsMap } from '../features/items';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	return (
		<IconBase title={item}>
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
