'use client';

import {
	Group,
	type GroupProps,
	Image,
	SimpleGrid,
	Stack,
	Text,
	type TextProps,
} from '@mantine/core';
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

export function MonsterField() {
	const { selectedMonster } = useSelectedMonster();

	return (
		<Group justify="center">
			<CustomFieldSet legendText="Select Monster">
				<Stack>
					<MonsterSelect mx="auto" w="fit-content" />

					<Group gap="xl" justify="center">
						{selectedMonster.imageLocation && (
							<Image
								fallbackSrc="/images/slime-sweat.png"
								maw="230px"
								src={selectedMonster.imageLocation}
								w="unset"
							/>
						)}

						<SimpleGrid cols={4} flex="1 1 fit-content" style={{ placeItems: 'center' }}>
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
						</SimpleGrid>
					</Group>

					<pre>{JSON.stringify(selectedMonster, null, 2)}</pre>
				</Stack>
			</CustomFieldSet>
		</Group>
	);
}
