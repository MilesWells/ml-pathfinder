import { DrawerStack, Stack } from '@mantine/core';
import { ItemDrawersProvider } from '@/lib/pathfinder-items/item-drawer-context';
import { ItemDrawers } from '@/lib/pathfinder-items/item-drawers';
import { NullIfNotMounted } from '@/ui/null-if-not-mounted';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInputFeedback } from './pathfinder-input-feedback';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<PathfinderContextProvider>
			<DrawerStack>
				<ItemDrawersProvider>
					<NullIfNotMounted>
						<Stack gap="xl" pt="sm">
							<PathfinderInput />
							<PathfinderInputFeedback />
							<PathfinderResults />
						</Stack>
					</NullIfNotMounted>
					<ItemDrawers />
				</ItemDrawersProvider>
			</DrawerStack>
		</PathfinderContextProvider>
	);
}
