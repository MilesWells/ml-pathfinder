import { ActionIcon, Group, Text, TextInput } from '@mantine/core';
import { IconCheck, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useCharactersStore } from '@/lib/zustand/characters-store';

const ICON_WRAPPER_SIZE = 'md';
const ICON_STYLES = {
	height: '80%',
	width: '80%',
};

export function EditCharacterName({ character }: { character: string }) {
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState(character);
	const { characterNames, deleteCharacter, renameCharacter } = useCharactersStore();

	const error = useMemo(() => {
		const trimmedNewName = newName.trim();

		if (trimmedNewName.length === 0) return 'Name must be non-empty';
		if (characterNames.includes(trimmedNewName) && trimmedNewName !== character)
			return 'Name must be unique';

		return null;
	}, [character, characterNames, newName]);

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
					{character}
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
							disabled={error !== null || newName.trim() === character}
							onClick={() => {
								renameCharacter(character, newName.trim());
								setEditing(false);
							}}
							size={ICON_WRAPPER_SIZE}
						>
							<IconCheck style={ICON_STYLES} />
						</ActionIcon>

						<ActionIcon
							color="gray.7"
							onClick={() => {
								setNewName(character);
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
					onClick={() => deleteCharacter(character)}
					size={ICON_WRAPPER_SIZE}
					title={characterNames.length === 1 ? 'Cannot delete last character' : undefined}
				>
					<IconTrash style={ICON_STYLES} />
				</ActionIcon>
			</Group>
		</Group>
	);
}
