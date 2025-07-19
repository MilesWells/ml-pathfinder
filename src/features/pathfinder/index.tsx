import { DrawerStack, Stack } from '@mantine/core';
import { ItemDrawersProvider } from '@/lib/items/item-drawer-context';
import { ItemDrawers } from '@/lib/items/item-drawers';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInputFeedback } from './pathfinder-input-feedback';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<PathfinderContextProvider>
			<DrawerStack>
				<ItemDrawersProvider>
					<Stack gap="xl">
						<PathfinderInput />
						<PathfinderInputFeedback />
						<PathfinderResults />
					</Stack>
					<ItemDrawers />
				</ItemDrawersProvider>
			</DrawerStack>
		</PathfinderContextProvider>
	);
}
