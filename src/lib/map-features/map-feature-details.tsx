import { Text } from '@mantine/core';
import { type MapFeature, mapFeatureDetailsMap } from '@/lib/map-features';
import { ExternalLink } from '@/ui/external-link';
import { ItemDrawerLink } from '../items/item-drawer-link';
import { MapFeatureImage } from './map-feature-image';

export type MapFeatureDetailsProps = {
	disableDrawerLink?: boolean;
	mapFeature: MapFeature;
};

export function MapFeatureDetails({
	disableDrawerLink = false,
	mapFeature,
}: MapFeatureDetailsProps) {
	const { docsLink, image } = mapFeatureDetailsMap[mapFeature];

	return (
		<>
			{image && <MapFeatureImage mapFeature={mapFeature} mt="sm" />}

			<Text ta="center">
				Map: <ExternalLink href={docsLink}>{mapFeature}</ExternalLink>
			</Text>

			<Text ta="center">
				How:{' '}
				<Text component="span" fs="italic">
					<MapFeatureDescription disableDrawerLink={disableDrawerLink} mapFeature={mapFeature} />
				</Text>
			</Text>
		</>
	);
}

function MapFeatureDescription({ disableDrawerLink, mapFeature }: MapFeatureDetailsProps) {
	switch (mapFeature) {
		case 'Altaire Camp: Small Forest':
			return 'Enter the green portal';
		case 'Helios Tower <2nd Floor>':
			return 'Enter the elevator when the shutter is open';
		case 'Helios Tower <99th Floor>':
			return 'Enter the elevator when the shutter is open';
		case 'Helios Tower: Time Control Room':
			return 'Enter the time machine';
		case 'Minar Forest: West Border':
			return (
				<>
					<Text component="span">Enter the green portal with a </Text>
					{disableDrawerLink ? (
						<Text component="span">Magic Seed</Text>
					) : (
						<ItemDrawerLink item="Magic Seed" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case 'Nautilus: Navigation Room':
			return (
				<>
					<Text component="span">Enter the warp device with a </Text>
					{disableDrawerLink ? (
						<Text component="span">Warp Card</Text>
					) : (
						<ItemDrawerLink item="Warp Card" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case 'Omega Sector: Command Center':
			return (
				<>
					<Text component="span">Enter the warp device with a </Text>
					{disableDrawerLink ? (
						<Text component="span">Warp Card</Text>
					) : (
						<ItemDrawerLink item="Warp Card" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case 'Perion: Iron Boar Land':
			return (
				<>
					<Text component="span">Enter the red portal with a </Text>
					{disableDrawerLink ? (
						<Text component="span">Desert Coin</Text>
					) : (
						<ItemDrawerLink item="Desert Coin" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case 'The Field Up North of Ellinia':
			return (
				<>
					<Text component="span">Enter the green portal with a </Text>
					{disableDrawerLink ? (
						<Text component="span">Magic Seed</Text>
					) : (
						<ItemDrawerLink item="Magic Seed" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case "Omega Sector: Gray's Prairie":
			return (
				<>
					<Text component="span">Enter the marked tree with an </Text>
					{disableDrawerLink ? (
						<Text component="span">Energy Shard</Text>
					) : (
						<ItemDrawerLink item="Energy Shard" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
		case 'Korean Folk Town: Moon Ridge':
			return (
				<>
					<Text component="span">Enter the gnarled tree with an </Text>
					{disableDrawerLink ? (
						<Text component="span">Energy Shard</Text>
					) : (
						<ItemDrawerLink item="Energy Shard" />
					)}
					<Text component="span"> in your inventory</Text>
				</>
			);
	}
}
