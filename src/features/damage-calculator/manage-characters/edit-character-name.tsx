import { ActionIcon, Group, Text, TextInput } from '@mantine/core';
import { IconCheck, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useCharacterNames, useCharactersStore } from '@/lib/zustand/characters-store';

const ICON_WRAPPER_SIZE = 'md';
const ICON_STYLES = {
	height: '80%',
	width: '80%',
};

export function EditCharacterName({ characterName }: { characterName: string }) {
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState(characterName);
	const { deleteCharacter, renameCharacter } = useCharactersStore();
	const characterNames = useCharacterNames();

	const error = useMemo(() => {
		const trimmedNewName = newName.trim();

		if (trimmedNewName.length === 0) return 'Name must be non-empty';
		if (characterNames.includes(trimmedNewName) && trimmedNewName !== characterName)
			return 'Name must be unique';

		return null;
	}, [characterName, characterNames, newName]);

	return (
		<Group h={40} justify="space-between" wrap="nowrap">
			{editing ? (
				<TextInput
					error={error !== null}
					flex="1 1 0"
					maxLength={25}
					onChange={e => setNewName(e.target.value.replace(/\s/g, ''))}
					styles={{
						input: {
							fontSize: '1rem',
						},
					}}
					value={newName}
				/>
			) : (
				<Text flex="1 1 0" pl={13} truncate>
					{characterName}
				</Text>
			)}

			<Group gap="xs">
				{!editing ? (
					<ActionIcon
						color="maplelegends-blue.9"
						onClick={() => setEditing(true)}
						size={ICON_WRAPPER_SIZE}
					>
						<IconPencil style={ICON_STYLES} />
					</ActionIcon>
				) : (
					<>
						<ActionIcon
							color="green.9"
							disabled={error !== null || newName.trim() === characterName}
							onClick={() => {
								renameCharacter(characterName, newName.trim());
								setEditing(false);
							}}
							size={ICON_WRAPPER_SIZE}
						>
							<IconCheck style={ICON_STYLES} />
						</ActionIcon>

						<ActionIcon
							color="gray.7"
							onClick={() => {
								setNewName(characterName);
								setEditing(false);
							}}
							size={ICON_WRAPPER_SIZE}
						>
							<IconX style={ICON_STYLES} />
						</ActionIcon>
					</>
				)}

				<ActionIcon
					color="kimmy-red.9"
					disabled={characterNames.length === 1}
					onClick={() => deleteCharacter(characterName)}
					size={ICON_WRAPPER_SIZE}
					title={characterNames.length === 1 ? 'Cannot delete last character' : undefined}
				>
					<IconTrash style={ICON_STYLES} />
				</ActionIcon>
			</Group>
		</Group>
	);
}
