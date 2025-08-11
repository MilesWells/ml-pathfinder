'use client';

import {
	Group,
	type GroupProps,
	Image,
	Stack,
	Text,
	type TextProps,
	ThemeIcon,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useSelectedMonster } from '@/lib/jotai/selected-monster-atom';
import { formatPositiveInteger } from '@/lib/number-formatter';
import { CustomFieldSet } from '@/ui/mantine/custom-field-set';
import { MonsterSelect } from '@/ui/monster-select';

function StatBlock({ children, ...props }: React.PropsWithChildren<GroupProps>) {
	return (
		<Group align="flex-end" gap={6} {...props}>
			{children}
		</Group>
	);
}

function StatLabelText(props: React.PropsWithChildren<TextProps>) {
	return <Text lh="1em" size="xs" {...props} />;
}

function StatValueText(props: React.PropsWithChildren<TextProps>) {
	return <Text lh="1em" size="xl" {...props} />;
}

function StatBlocks() {
	const { selectedMonster } = useSelectedMonster();

	return (
		<Group justify="center" wrap="nowrap">
			<StatBlock>
				<StatLabelText>Lv.</StatLabelText>
				<StatValueText>{selectedMonster.stats.level}</StatValueText>
			</StatBlock>
			<StatBlock c="meso-yellow.6">
				<StatLabelText>EXP</StatLabelText>
				<StatValueText>{formatPositiveInteger(selectedMonster.stats.exp)}</StatValueText>
			</StatBlock>
			<StatBlock c="kimmy-red.6">
				<StatLabelText>HP</StatLabelText>
				<StatValueText>{formatPositiveInteger(selectedMonster.stats.hp)}</StatValueText>
			</StatBlock>
			<StatBlock c="maplelegends-blue.6">
				<StatLabelText>MP</StatLabelText>
				<StatValueText>{formatPositiveInteger(selectedMonster.stats.mp)}</StatValueText>
			</StatBlock>
		</Group>
	);
}

function MesosAndFlags() {
	const { selectedMonster } = useSelectedMonster();

	return (
		<Group justify="center" wrap="nowrap">
			<Group gap={2} justify="center">
				<Image src="/images/pathfinder/items/mesos.png" w="unset" />

				<Group gap={2} justify="center">
					<Text>{formatPositiveInteger(selectedMonster.stats.mesos.min)}</Text>
					<Text>-</Text>
					<Text>{formatPositiveInteger(selectedMonster.stats.mesos.max)}</Text>
				</Group>
			</Group>

			<Group gap={4} justify="center">
				<Text size="xs">Boss</Text>

				<ThemeIcon color={selectedMonster.isBoss ? 'green' : 'red'} size="sm" variant="light">
					{selectedMonster.isBoss ? <IconCheck /> : <IconX />}
				</ThemeIcon>
			</Group>

			<Group gap={4} justify="center">
				<Text size="xs" ta="center">
					Auto Aggro
				</Text>

				<ThemeIcon color={selectedMonster.isAutoAggro ? 'green' : 'red'} size="sm" variant="light">
					{selectedMonster.isAutoAggro ? <IconCheck /> : <IconX />}
				</ThemeIcon>
			</Group>
		</Group>
	);
}

function MonsterImage() {
	const { selectedMonster } = useSelectedMonster();

	if (selectedMonster.imageLocation === null) return null;

	return <Image maw={300} src={selectedMonster.imageLocation} w="unset" />;
}

export function MonsterField() {
	return (
		<Group justify="center">
			<CustomFieldSet legendText="Select Monster">
				<Stack>
					<MonsterSelect mx="auto" w="fit-content" />

					<Group gap="xl" justify="center">
						<MonsterImage />

						<Stack flex="1 1 fit-content">
							<StatBlocks />
							<MesosAndFlags />
						</Stack>
					</Group>
				</Stack>
			</CustomFieldSet>
		</Group>
	);
}
