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

const mesoYellow: MantineColorsTuple = [
	'#fbfbe5',
	'#f4f4d5',
	'#e8e8b0',
	'#dbdb87',
	'#d1d164',
	'#cccc55',
	'#c6c640',
	'#aeaf31',
	'#9b9b27',
	'#858618',
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
		'meso-yellow': mesoYellow,
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
