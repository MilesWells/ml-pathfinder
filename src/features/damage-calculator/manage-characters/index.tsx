'use client';

import {
	Box,
	Button,
	Drawer,
	Fieldset,
	Group,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { useField } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useMemo, useState } from 'react';
import { useCharacters } from '@/lib/zustand/characters-store';
import { CharacterSelect } from './character-select';

export function ManageCharacters() {
	const [opened, { open, close }] = useDisclosure(false);
	const { characterNames, deleteCharacter } = useCharacters();

	return (
		<>
			<Fieldset
				legend={<Title order={3}>Select Character</Title>}
				maw="fit-content"
				mb="xl"
				mx="auto"
			>
				<Group align="stretch">
					<CharacterSelect />

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
				<Stack gap={100}>
					<AddCharacter />

					<Stack>
						{characterNames.map(character => (
							<EditCharacter character={character} key={character} />
						))}
					</Stack>
				</Stack>
			</Drawer>
		</>
	);
}

function AddCharacter() {
	const { addCharacter, characterNames } = useCharacters();

	const field = useField({
		initialValue: '',
	});

	const error = useMemo(() => {
		if (!field.isDirty()) return null;

		const value = field.getValue().trim();

		if (value.length === 0) return 'Name must be non-empty';
		if (characterNames.includes(value)) return 'Name must be unique';

		return null;
	}, [characterNames, field]);

	return (
		<Fieldset legend="Add Character">
			<Group align="start" justify="space-between">
				<TextInput {...field.getInputProps()} error={error} />

				<Button
					disabled={error !== null || !field.isDirty()}
					onClick={() => {
						addCharacter(field.getValue().trim());
						field.reset();
					}}
				>
					Add
				</Button>
			</Group>
		</Fieldset>
	);
}

function EditCharacter({ character }: { character: string }) {
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState(character);
	const { characterNames, deleteCharacter, renameCharacter } = useCharacters();

	const error = useMemo(() => {
		if (newName.length === 0) return 'Name must be non-empty';
		if (characterNames.includes(newName) && newName !== character) return 'Name must be unique';

		return null;
	}, [character, characterNames, newName]);

	return (
		<Group justify="space-between">
			{editing ? (
				<TextInput error={error} onChange={e => setNewName(e.target.value)} value={newName} />
			) : (
				<Text>{character}</Text>
			)}

			<Group>
				{!editing ? (
					<Button onClick={() => setEditing(true)}>Rename</Button>
				) : (
					<>
						<Button onClick={() => renameCharacter(character, newName)}>Confirm</Button>
						<Button
							onClick={() => {
								setNewName(character);
								setEditing(false);
							}}
						>
							Cancel
						</Button>
					</>
				)}
				<Button
					disabled={characterNames.length === 1}
					onClick={() => deleteCharacter(character)}
					title={characterNames.length === 1 ? 'Cannot delete last character' : undefined}
				>
					Delete
				</Button>
			</Group>
		</Group>
	);
}
