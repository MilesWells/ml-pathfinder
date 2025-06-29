import { IconBase } from '@/ui/icon-base';
import { type Item, itemDetailsMap } from '../features/items';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	return (
		<IconBase>
			<img
				alt={item}
				src={itemDetailsMap[item].image}
				style={{
					margin: 'auto',
				}}
				title={item}
			/>
		</IconBase>
	);
}
