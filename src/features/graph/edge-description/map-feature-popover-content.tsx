import { Text } from '@mantine/core';
import { mapFeatureDetailsMap } from '@/features/map-features';
import { ExternalLink } from '@/ui/external-link';
import type { Edge, MapFeatureEdge } from '../edges';

export type FullMapFeatureEdge = Extract<Edge, MapFeatureEdge>;

export type MapFeaturePopoverContentProps = {
	edge: FullMapFeatureEdge;
};

export function MapFeaturePopoverContent({ edge }: MapFeaturePopoverContentProps) {
	const { description, docsLink, image } = mapFeatureDetailsMap[edge.mapFeature];

	return (
		<>
			{image && (
				<ExternalLink href={docsLink} mb="md" mt="sm">
					<img alt={edge.mapFeature} src={image} />
				</ExternalLink>
			)}

			<Text ta="center">
				Map: <ExternalLink href={docsLink}>{edge.mapFeature}</ExternalLink>
			</Text>

			<Text ta="center">
				How:{' '}
				<Text component="span" fs="italic">
					{description}
				</Text>
			</Text>
		</>
	);
}
