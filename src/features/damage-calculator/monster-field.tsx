import {
	Box,
	Group,
	type GroupProps,
	SimpleGrid,
	Stack,
	Text,
	type TextProps,
} from '@mantine/core';
import { useSelectedMonster } from '@/lib/jotai/selected-monster-atom';
import { formatPositiveInteger } from '@/lib/number-formatter';
import { HasMountedLoadingContainer } from '@/ui/has-mounted-loading-container';
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
					<Group>
						{selectedMonster.imageLocation && (
							<HasMountedLoadingContainer>
								<Box mah={230} maw={230}>
									<img alt={selectedMonster.name} src={selectedMonster.imageLocation} />
								</Box>
							</HasMountedLoadingContainer>
						)}
						<SimpleGrid cols={4} style={{ placeItems: 'center' }}>
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
