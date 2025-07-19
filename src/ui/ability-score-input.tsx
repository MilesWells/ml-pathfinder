import { NumberInput, type NumberInputProps } from '@mantine/core';

export function AbilityScoreInput(props: NumberInputProps) {
	return (
		<NumberInput
			clampBehavior="strict"
			maw={80}
			max={9999}
			min={4}
			styles={{
				input: {
					paddingLeft: 0,
					textAlign: 'center',
				},
			}}
			{...props}
		/>
	);
}
