import { List, ListItem } from '@mantine/core';

export function PathfinderInstructions() {
	return (
		<List fw={500} mr="xs" ta="center" type="ordered">
			<ListItem>Select items from menu</ListItem>
			<ListItem>Choose starting continent</ListItem>
			<ListItem>Choose destination continent</ListItem>
			<ListItem>Path!</ListItem>
		</List>
	);
}
