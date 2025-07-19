'use client';

import { Button, Drawer, Fieldset, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CharacterSelect } from './character-select';

export function ManageCharacters() {
	const [opened, { open, close }] = useDisclosure(false);

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
			></Drawer>
		</>
	);
}
