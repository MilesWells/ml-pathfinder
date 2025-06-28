import { Center, Popover, PopoverDropdown, PopoverTarget, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { itemDetailsMap } from '@/features/items';
import { ExternalLink } from '@/ui/external-link';
import type { Edge } from '../edges';
import { ItemConsumption } from './item-consumption';
import { ItemUseEdgeDetails } from './item-use-edge-details';
import { MapFeaturePopoverContent } from './map-feature-popover-content';
import { MesosPopoverContent } from './mesos-popover-content';
import { NpcPopoverContent } from './npc-popover-content';

export type EdgePopoverProps = {
	edge: Edge;
	label: string;
};

export function EdgePopover({ edge, label }: EdgePopoverProps) {
	const [opened, { close, open }] = useDisclosure(false);
	const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

	useEffect(() => {
		() => clearTimeout(closeTimeout);
	}, [closeTimeout]);

	function handleOpen() {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			setCloseTimeout(undefined);
		}

		open();
	}

	function handleClose() {
		setCloseTimeout(setTimeout(close, 75));
	}

	return (
		<Popover opened={opened} position="right" shadow="md" withArrow>
			<PopoverTarget>
				<Center onMouseEnter={handleOpen} onMouseLeave={handleClose} style={{ cursor: 'pointer' }}>
					{label}
				</Center>
			</PopoverTarget>

			<PopoverDropdown onMouseEnter={handleOpen} onMouseLeave={handleClose}>
				<Center style={{ flexDirection: 'column' }}>
					{edge.method === 'Walk' && <Text>Walk</Text>}
					{'npc' in edge && <NpcPopoverContent edge={edge} />}
					{'mapFeature' in edge && <MapFeaturePopoverContent edge={edge} />}
					{'item' in edge && edge.item && (
						<>
							<Text>
								Item: <ExternalLink href={itemDetailsMap[edge.item].docsLink}>{edge.item}</ExternalLink>
							</Text>

							<ItemUseEdgeDetails edge={edge} />

							<ItemConsumption item={edge.item} />
						</>
					)}
					{'mesos' in edge && <MesosPopoverContent edge={edge} />}
				</Center>
			</PopoverDropdown>
		</Popover>
	);
}
