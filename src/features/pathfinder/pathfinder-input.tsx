'use client';

import { Button, Drawer, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { REGIONS, type Region } from '@/features/graph/regions';
import { ItemCheckList } from '../items/item-check-list';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const { canPath, findPath, fromFormValue, setFromFormValue, setToFormValue, toFormValue } = usePathfinder();
	const [itemsListOpened, { open: openItemsList, close: closeItemsList }] = useDisclosure(false);

	return (
		<Stack>
			<Button mx="auto" onClick={openItemsList} w="fit-content">
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
				onChange={from => setFromFormValue(from as Region)}
				placeholder="Choose starting continent"
				searchable
				value={fromFormValue}
			/>

			<Select
				clearable
				data={REGIONS}
				maw="300px"
				mx="auto"
				onChange={to => setToFormValue(to as Region)}
				placeholder="Choose destination continent"
				searchable
				value={toFormValue}
			/>

			<Button disabled={!canPath} mx="auto" onClick={findPath} w="fit-content">
				Path Me!
			</Button>
		</Stack>
	);
}
