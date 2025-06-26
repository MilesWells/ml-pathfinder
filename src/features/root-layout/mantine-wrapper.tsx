import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core';

/*

button: #26538b
title font: #4a9eff
regular font: #a7b3be
background: #020817

*/

// generated with #26538b
const mlpPrimary: MantineColorsTuple = [
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

// generated with #4a9eff
const mlpBright: MantineColorsTuple = [
	'#e2f5ff',
	'#cbe6ff',
	'#99caff',
	'#62acff',
	'#4a9eff',
	'#1883ff',
	'#007bff',
	'#0069e5',
	'#005dce',
	'#0050b7',
];

// generated with #020817
const mlpDark: MantineColorsTuple = [
	'#ecf1fd',
	'#d6dff6',
	'#a8bbef',
	'#7896ea',
	'#5176e5',
	'#3a63e3',
	'#2f59e3',
	'#2349ca',
	'#1c41b5',
	'#020817',
];

// generated with #a7b3be
const mlpFont: MantineColorsTuple = [
	'#ecf6ff',
	'#e0e8ef',
	'#c5ced6',
	'#a7b3be',
	'#8c9ba8',
	'#7b8c9c',
	'#728597',
	'#5f7284',
	'#526677',
	'#41586c',
];

const theme = createTheme({
	colors: {
		'mlp-bright': mlpBright,
		'mlp-dark': mlpDark,
		'mlp-font': mlpFont,
		'mlp-primary': mlpPrimary,
	},
	cursorType: 'pointer',
	fontFamily: 'Geist',
	fontFamilyMonospace: 'Geist Mono',
	primaryColor: 'mlp-primary',
});

export function MantineWrapper({ children }: React.PropsWithChildren) {
	return (
		<MantineProvider forceColorScheme="dark" theme={theme}>
			{children}
		</MantineProvider>
	);
}
