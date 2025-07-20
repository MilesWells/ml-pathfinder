import { ActionIcon, Fieldset, Group, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useCharactersStore } from '@/lib/zustand/characters-store';

export function AddCharacter() {
	const { addCharacter, characterNames } = useCharactersStore();
	const [newName, setNewName] = useState('');
	const [dirty, setDirty] = useState(false);

	const error = useMemo(() => {
		if (!dirty) return null;

		const value = newName.trim();

		if (value.length === 0) return 'Name must be non-empty';
		if (characterNames.includes(value)) return 'Name must be unique';

		return null;
	}, [characterNames, dirty, newName]);

	return (
		<Fieldset legend="Add Character">
			<Group align="start" justify="space-between">
				<TextInput
					error={error !== null}
					maxLength={25}
					onChange={e => {
						const noWhitespace = e.target.value.replace(/\s/g, '');

						setNewName(noWhitespace);
						setDirty(noWhitespace.length !== 0);
					}}
					placeholder="Character Name"
					value={newName}
				/>

				<ActionIcon
					color="maplelegends-blue.9"
					disabled={error !== null || newName.length === 0}
					onClick={() => {
						addCharacter(newName);
						setNewName('');
						setDirty(false);
					}}
					size="lg"
				>
					<IconPlus />
				</ActionIcon>
			</Group>
		</Fieldset>
	);
}
