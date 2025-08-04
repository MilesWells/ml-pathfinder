import { DrawerStack, Stack } from '@mantine/core';
import { ItemDrawersProvider } from '@/lib/items/item-drawer-context';
import { ItemDrawers } from '@/lib/items/item-drawers';
import { RegionsStoreHydrated } from '@/lib/zustand/regions-store';
import { SelectedItemsStoreHydrated } from '@/lib/zustand/selected-items-store';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInputFeedback } from './pathfinder-input-feedback';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<RegionsStoreHydrated>
			<SelectedItemsStoreHydrated>
				<PathfinderContextProvider>
					<DrawerStack>
						<ItemDrawersProvider>
							<Stack gap="xl" pt="sm">
								<PathfinderInput />
								<PathfinderInputFeedback />
								<PathfinderResults />
							</Stack>
							<ItemDrawers />
						</ItemDrawersProvider>
					</DrawerStack>
				</PathfinderContextProvider>
			</SelectedItemsStoreHydrated>
		</RegionsStoreHydrated>
	);
}
