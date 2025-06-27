'use client';

import { Center, Popover, PopoverDropdown, PopoverTarget } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ExternalLink } from '@/ui/external-link';
import { type Item, itemDetailsMap } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	const [opened, { close, open }] = useDisclosure(false);

	const image = itemDetailsMap[item].image;

	return (
		<Popover opened={opened} position="left" shadow="md" withArrow>
			<PopoverTarget>
				<ExternalLink href={itemDetailsMap[item].docsLink}>
					<Center
						onMouseEnter={open}
						onMouseLeave={close}
						styles={{
							root: {
								height: 30,
								width: 30,
							},
						}}
					>
						<img alt={item} src={image} />
					</Center>
				</ExternalLink>
			</PopoverTarget>
			<PopoverDropdown style={{ pointerEvents: 'none' }}>{item}</PopoverDropdown>
		</Popover>
	);
}
