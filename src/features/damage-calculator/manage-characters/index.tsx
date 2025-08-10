'use client';

import { Button, Drawer, Fieldset, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCharacters } from '@/lib/jotai/characters-atom';
import { CustomFieldSet } from '@/ui/material/custom-field-set';
import { AddCharacter } from './add-character';
import { CharacterSelect } from './character-select';
import { EditCharacterName } from './edit-character-name';

export function ManageCharacters() {
	const [opened, { open, close }] = useDisclosure(false);
	const { characterNames } = useCharacters();

	return (
		<>
			<CustomFieldSet legendText="Select Character">
				<Group align="stretch">
					<CharacterSelect flex="1 1 0" />

					<Button h={{ root: '100%' }} onClick={open} w="fit-content">
						Manage
					</Button>
				</Group>
			</CustomFieldSet>

			<Drawer
				onClose={close}
				opened={opened}
				styles={{
					body: {
						flexGrow: '1',
					},
					content: {
						display: 'flex',
						flexDirection: 'column',
					},
					title: {
						fontSize: 22,
						fontWeight: 500,
					},
				}}
				title="Manage Characters"
			>
				<Stack gap={30}>
					<AddCharacter />

					<Fieldset legend="Edit Characters">
						<Stack>
							{characterNames.map(characterName => (
								<EditCharacterName characterName={characterName} key={characterName} />
							))}
						</Stack>
					</Fieldset>
				</Stack>
			</Drawer>
		</>
	);
}
