import { CharacterStatsInput } from './inputs/character-stats-input';
import { ClassSelect } from './inputs/class-select';

export function DamageCalculator() {
	return (
		<div>
			<ClassSelect />
			<CharacterStatsInput />
		</div>
	);
}
