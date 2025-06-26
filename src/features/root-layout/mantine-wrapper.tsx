import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core';

const maplelegendsPathfinder: MantineColorsTuple = [
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

const theme = createTheme({
	colors: {
		'maplelegends-pathfinder': maplelegendsPathfinder,
	},
	cursorType: 'pointer',
	fontFamily: 'Geist',
	fontFamilyMonospace: 'Geist Mono',
	primaryColor: 'maplelegends-pathfinder',
});

export function MantineWrapper({ children }: React.PropsWithChildren) {
	return (
		<MantineProvider forceColorScheme="dark" theme={theme}>
			{children}
		</MantineProvider>
	);
}
