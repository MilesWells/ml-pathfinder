import { Stack } from '@mantine/core';
import { SelectedItemsProvider } from '../items/selected-items-context';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<SelectedItemsProvider>
			<PathfinderContextProvider>
				<Stack gap="xl" mt={40}>
					<PathfinderInput />
					<PathfinderResults />
				</Stack>
			</PathfinderContextProvider>
		</SelectedItemsProvider>
	);
}
