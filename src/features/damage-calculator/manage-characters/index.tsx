import { Fieldset, Title } from '@mantine/core';
import { CharacterSelect } from './character-select';

export function ManageCharacters() {
	return (
		<Fieldset
			legend={<Title order={3}>Manage Characters</Title>}
			maw="fit-content"
			mb="xl"
			mx="auto"
		>
			<CharacterSelect />
		</Fieldset>
	);
}
