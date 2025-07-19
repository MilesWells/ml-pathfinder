import { Select, type SelectProps } from '@mantine/core';

export function SelectNoInput({ styles, ...props }: SelectProps) {
	return (
		<Select
			allowDeselect={false}
			styles={{
				input: {
					caretColor: 'transparent',
				},
				...styles,
			}}
			{...props}
		/>
	);
}
