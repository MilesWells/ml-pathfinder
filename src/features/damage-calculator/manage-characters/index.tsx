'use client';

import {
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
import React, { useMemo } from 'react';
import { useCharacters } from '@/lib/local-storage/characters';
import { CharacterSelect } from './character-select';

export function ManageCharacters() {
	const [opened, { open, close }] = useDisclosure(false);
	const { characters, deleteCharacter } = useCharacters();

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

					<SimpleGrid
						cols={2}
						style={{
							alignItems: 'center',
						}}
					>
						{characters.map(character => (
							<React.Fragment key={character}>
								<Text>{character}</Text>
								<Group>
									<Button>Rename</Button>
									<Button
										disabled={characters.length === 1}
										onClick={() => deleteCharacter(character)}
										title={characters.length === 1 ? 'Cannot delete last character' : undefined}
									>
										Delete
									</Button>
								</Group>
							</React.Fragment>
						))}
					</SimpleGrid>
				</Stack>
			</Drawer>
		</>
	);
}

function AddCharacter() {
	const { characters, addCharacter } = useCharacters();

	const field = useField({
		initialValue: '',
	});

	const error = useMemo(() => {
		if (!field.isDirty()) return null;

		const value = field.getValue().trim();

		if (value.length === 0) return 'Name must be non-empty';
		if (characters.includes(value)) return 'Name must be unique';

		return null;
	}, [characters, field]);

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
