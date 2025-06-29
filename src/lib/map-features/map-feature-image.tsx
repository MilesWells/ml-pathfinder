import { ExternalLink, type ExternalLinkProps } from '@/ui/external-link';
import { type MapFeature, mapFeatureDetailsMap } from '.';

export type MapFeatureImageProps = Omit<ExternalLinkProps, 'href'> & {
	mapFeature: MapFeature;
};

export function MapFeatureImage({ mapFeature, ...props }: MapFeatureImageProps) {
	const { docsLink, image } = mapFeatureDetailsMap[mapFeature];

	return (
		<ExternalLink href={docsLink} {...props}>
			{image ? <img alt={mapFeature} src={image} /> : mapFeature}
		</ExternalLink>
	);
}
