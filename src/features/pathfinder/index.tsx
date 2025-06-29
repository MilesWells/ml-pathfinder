import { DrawerStack, Stack } from '@mantine/core';
import { ItemDrawersProvider } from '@/lib/items/item-drawer-context';
import { ItemDrawers } from '@/lib/items/item-drawers';
import { SelectedItemsProvider } from '@/lib/items/selected-items-context';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInputFeedback } from './pathfinder-input-feedback';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<SelectedItemsProvider>
			<PathfinderContextProvider>
				<DrawerStack>
					<ItemDrawersProvider>
						<Stack gap="xl" mt={40}>
							<PathfinderInput />
							<PathfinderInputFeedback />
							<PathfinderResults />
						</Stack>
						<ItemDrawers />
					</ItemDrawersProvider>
				</DrawerStack>
			</PathfinderContextProvider>
		</SelectedItemsProvider>
	);
}
