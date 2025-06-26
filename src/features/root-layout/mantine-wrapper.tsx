import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core';

const mapleLegends: MantineColorsTuple = [
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
		maplelegends: mapleLegends,
	},
	cursorType: 'pointer',
	fontFamily: 'Geist',
	fontFamilyMonospace: 'Geist Mono',
	primaryColor: 'maplelegends',
});

export function MantineWrapper({ children }: React.PropsWithChildren) {
	return (
		<MantineProvider forceColorScheme="dark" theme={theme}>
			{children}
		</MantineProvider>
	);
}
