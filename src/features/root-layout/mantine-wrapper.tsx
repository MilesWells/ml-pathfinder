import {
	createTheme,
	type MantineColorsTuple,
	MantineProvider,
} from '@mantine/core';

const paleIndigo: MantineColorsTuple = [
	'#eff2ff',
	'#dfe2f2',
	'#bdc2de',
	'#99a0ca',
	'#7a84b9',
	'#6672af',
	'#5c69ac',
	'#4c5897',
	'#424e88',
	'#36437a',
];

const theme = createTheme({
	colors: {
		'pale-indigo': paleIndigo,
	},
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
