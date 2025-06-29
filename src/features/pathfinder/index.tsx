import { Stack } from '@mantine/core';
import { SelectedItemsProvider } from '@/lib/items/selected-items-context';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInputFeedback } from './pathfinder-input-feedback';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<SelectedItemsProvider>
			<PathfinderContextProvider>
				<Stack gap="xl" mt={40}>
					<PathfinderInput />
					<PathfinderInputFeedback />
					<PathfinderResults />
				</Stack>
			</PathfinderContextProvider>
		</SelectedItemsProvider>
	);
}
