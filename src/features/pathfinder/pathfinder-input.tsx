'use client';

import { Button, Drawer, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { REGIONS, type Region } from '@/features/regions';
import { ItemCheckList } from '../items/item-check-list';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const { from, setFrom, setTo, to } = usePathfinder();
	const [itemsListOpened, { open: openItemsList, close: closeItemsList }] = useDisclosure(false);

	return (
		<Stack>
			<Button mx="auto" onClick={openItemsList} size="compact-lg" w="fit-content">
				Select Items
			</Button>

			<Drawer onClose={closeItemsList} opened={itemsListOpened} title="Select items to use">
				<ItemCheckList />
			</Drawer>

			<Select
				clearable
				data={REGIONS}
				maw="300px"
				mx="auto"
				onChange={from => setFrom(from as Region)}
				placeholder="Choose starting continent"
				searchable
				value={from}
			/>

			<Select
				clearable
				data={REGIONS}
				maw="300px"
				mx="auto"
				onChange={to => setTo(to as Region)}
				placeholder="Choose destination continent"
				searchable
				value={to}
			/>
		</Stack>
	);
}
