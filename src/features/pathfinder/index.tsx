import { Stack } from '@mantine/core';
import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderInstructions } from './pathfinder-instructions';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<PathfinderContextProvider>
			<Stack gap="xl" mt={40}>
				<PathfinderInstructions />
				<PathfinderInput />
				<PathfinderResults />
			</Stack>
		</PathfinderContextProvider>
	);
}
