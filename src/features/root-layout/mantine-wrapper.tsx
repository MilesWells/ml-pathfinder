import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core';

const paleIndigo: MantineColorsTuple = [
	'#e6f5ff',
	'#d2e7fe',
	'#a6cbf5',
	'#76afed',
	'#4f96e7',
	'#3687e3',
	'#2780e3',
	'#156dca',
	'#0361b6',
	'#0053a2',
];

const theme = createTheme({
	colors: {
		'pale-indigo': paleIndigo,
	},
	cursorType: 'pointer',
	fontFamily: 'Geist',
	fontFamilyMonospace: 'Geist Mono',
	primaryColor: 'pale-indigo',
});

export function MantineWrapper({ children }: React.PropsWithChildren) {
	return (
		<MantineProvider defaultColorScheme="dark" theme={theme}>
			{children}
		</MantineProvider>
	);
}
