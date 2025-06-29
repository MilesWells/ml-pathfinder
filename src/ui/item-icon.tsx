import { IconBase, type IconBaseProps } from '@/ui/icon-base';
import { type Item, itemDetailsMap } from '../lib/items';

export type ItemIconProps = IconBaseProps & {
	item: Item;
};

export function ItemIcon({ item, ...baseProps }: ItemIconProps) {
	return (
		<IconBase display="inline-flex" title={item} {...baseProps}>
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
