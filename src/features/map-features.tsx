import { Text } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import { ItemIcon } from '../ui/item-icon';
import { itemDetailsMap } from './items';

export const mapFeatures = [
	'Altaire Camp: Small Forest',
	'Omega Sector: Command Center',
	'Helios Tower <2nd Floor>',
	'Helios Tower <99th Floor>',
	'Perion: Iron Boar Land',
	'Minar Forest: West Border',
	'Nautilus: Navigation Room',
	'The Field Up North of Ellinia',
	'Helios Tower: Time Control Room',
] as const;

export type MapFeature = (typeof mapFeatures)[number];

export type MapFeatureDetails = {
	description: React.ReactNode;
	docsLink: string;
	image: string | null;
};

export const mapFeatureDetailsMap = {
	'Altaire Camp: Small Forest': {
		description: 'Enter the green portal',
		docsLink: 'https://maplelegends.com/lib/map?id=300000100',
		image: '/images/map-features/altaire-camp-small-forest.png',
	},
	'Helios Tower <2nd Floor>': {
		description: 'Enter the elevator when the shutter is open',
		docsLink: 'https://maplelegends.com/lib/map?id=222020100',
		image: '/images/map-features/helios-tower-2nd-floor.png',
	},
	'Helios Tower <99th Floor>': {
		description: 'Enter the elevator when the shutter is open',
		docsLink: 'https://maplelegends.com/lib/map?id=222020200',
		image: '/images/map-features/helios-tower-99th-floor.png',
	},
	'Helios Tower: Time Control Room': {
		description: 'Enter the time machine',
		docsLink: 'https://maplelegends.com/lib/map?id=222020400',
		image: '/images/map-features/helios-tower-time-control-room.png',
	},
	'Minar Forest: West Border': {
		description: (
			<>
				<Text component="span">Enter the green portal with a </Text>
				<ExternalLink href={itemDetailsMap['Magic Seed'].docsLink}>
					<ItemIcon item="Magic Seed" />
					Magic Seed
				</ExternalLink>
				<Text component="span"> in your inventory</Text>
			</>
		),
		docsLink: 'https://maplelegends.com/lib/map?id=240010100',
		image: '/images/map-features/minar-forest-west-border.png',
	},
	'Nautilus: Navigation Room': {
		description: (
			<>
				<Text component="span">Enter the warp device with a </Text>
				<ExternalLink href={itemDetailsMap['Warp Card'].docsLink}>
					<ItemIcon item="Warp Card" />
					Warp Card
				</ExternalLink>
				<Text component="span"> in your inventory</Text>
			</>
		),
		docsLink: 'https://maplelegends.com/lib/map?id=120000101',
		image: null,
	},
	'Omega Sector: Command Center': {
		description: (
			<>
				<Text component="span">Enter the warp device with a </Text>
				<ExternalLink href={itemDetailsMap['Warp Card'].docsLink}>
					<ItemIcon item="Warp Card" />
					Warp Card
				</ExternalLink>
				<Text component="span"> in your inventory</Text>
			</>
		),
		docsLink: 'https://maplelegends.com/lib/map?id=221000300',
		image: null,
	},
	'Perion: Iron Boar Land': {
		description: (
			<>
				<Text component="span">Enter the red portal with a </Text>
				<ExternalLink href={itemDetailsMap['Desert Coin'].docsLink}>
					<ItemIcon item="Desert Coin" />
					Desert Coin
				</ExternalLink>
				<Text component="span"> in your inventory</Text>
			</>
		),
		docsLink: 'https://maplelegends.com/lib/map?id=101040003',
		image: '/images/map-features/perion-iron-boar-land.png',
	},
	'The Field Up North of Ellinia': {
		description: (
			<>
				<Text component="span">Enter the green portal with a </Text>
				<ExternalLink href={itemDetailsMap['Magic Seed'].docsLink}>
					<ItemIcon item="Magic Seed" />
					Magic Seed
				</ExternalLink>
				<Text component="span"> in your inventory</Text>
			</>
		),
		docsLink: 'https://maplelegends.com/lib/map?id=101010000',
		image: '/images/map-features/the-field-up-north-of-ellinia.png',
	},
} satisfies Record<MapFeature, MapFeatureDetails>;
