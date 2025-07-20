'use client';

import { Button, Drawer, Fieldset, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCharactersStore } from '@/lib/zustand/characters-store';
import { AddCharacter } from './add-character';
import { CharacterSelect } from './character-select';
import { EditCharacterName } from './edit-character-name';

export function ManageCharacters() {
	const [opened, { open, close }] = useDisclosure(false);
	const { characterNames } = useCharactersStore();

	return (
		<>
			<Fieldset
				legend={<Title order={3}>Select Character</Title>}
				maw="fit-content"
				mb="xl"
				mx="auto"
			>
				<Group align="stretch">
					<CharacterSelect flex="1 1 0" />

					<Button h={{ root: '100%' }} onClick={open} w="fit-content">
						Manage
					</Button>
				</Group>
			</Fieldset>

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
							{characterNames.map(character => (
								<EditCharacterName character={character} key={character} />
							))}
						</Stack>
					</Fieldset>
				</Stack>
			</Drawer>
		</>
	);
}
