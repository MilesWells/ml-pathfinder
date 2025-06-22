import { PathfinderContextProvider } from './pathfinder-context';
import { PathfinderInput } from './pathfinder-input';

export function PathfinderRoot() {
	return (
		<PathfinderContextProvider>
			<PathfinderInput />
		</PathfinderContextProvider>
	);
}
