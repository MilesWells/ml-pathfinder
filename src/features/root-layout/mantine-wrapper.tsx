import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core';

const maplelegendsBlue: MantineColorsTuple = [
	'#eff4fb',
	'#dde5ef',
	'#b7cae2',
	'#8eacd5',
	'#6c93ca',
	'#5784c3',
	'#4b7cc2',
	'#3c6aab',
	'#335e99',
	'#26538b',
];

const kimmyRed: MantineColorsTuple = [
	'#ffe8e8',
	'#ffcfcf',
	'#ff9c9c',
	'#fe6565',
	'#fd3937',
	'#fe1e1a',
	'#fe0e0b',
	'#ec0000',
	'#cb0000',
	'#b10000',
];

const theme = createTheme({
	colors: {
		'kimmy-red': kimmyRed,
		'maplelegends-blue': maplelegendsBlue,
	},
	cursorType: 'pointer',
	fontFamily: 'Geist',
	fontFamilyMonospace: 'Geist Mono',
	primaryColor: 'maplelegends-blue',
});

export function MantineWrapper({ children }: React.PropsWithChildren) {
	return (
		<MantineProvider forceColorScheme="dark" theme={theme}>
			{children}
		</MantineProvider>
	);
}
