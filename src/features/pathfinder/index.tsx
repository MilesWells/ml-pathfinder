import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';
import { PathfinderResults } from './pathfinder-results';

export function Pathfinder() {
	return (
		<PathfinderContextProvider>
			<PathfinderInput />
			<PathfinderResults />
		</PathfinderContextProvider>
	);
}
