import { Fieldset, type FieldsetProps, Title } from '@mantine/core';

export type CustomFieldSetProps = React.PropsWithChildren<FieldsetProps> & {
	legendText?: React.ReactNode;
};

export function CustomFieldSet({ children, legendText, ...props }: CustomFieldSetProps) {
	return (
		<Fieldset
			legend={legendText ? <Title order={3}>{legendText}</Title> : undefined}
			maw="calc(100dvw - 40px"
			miw={320}
			{...props}
		>
			{children}
		</Fieldset>
	);
}
