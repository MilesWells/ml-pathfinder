import { Center, Divider, List, ListItem, Stack, Text, Title } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import { MapFeatureDetails } from '../map-features/map-feature-details';
import { NpcExternalLink } from '../npcs/npc-external-link';
import { ItemDrawerLink } from './item-drawer-link';

export const items = [
	'Command Center Warp Capsule',
	'Desert Coin',
	'Energy Shard',
	'Eos Rock Scroll',
	'Fruit Milk',
	'Gate Pass',
	'Ludibrium Warp Capsule',
	'Magic Seed',
	'Omega Sector Warp Capsule',
	'Orbis Rock Scroll',
	'Return to New Leaf City Scroll',
	'Return Scroll - Nearest Town',
	'Strawberry Milk',
	'VIP Ticket to Florina Beach',
	'Warp Card',
] as const;

export type Item = (typeof items)[number];

export type ItemDetails = {
	image: string;
	details: React.ReactNode;
};

const IMAGE_PLACEHOLDER = '/images/slime-sweat.png';

export const itemDetailsMap = {
	'Command Center Warp Capsule': {
		details: (
			<Text ta="center">
				Obtainable via quests. See{' '}
				<ExternalLink href="https://bbb.hidden-street.net/items/return-scroll/command-center-warp-capsule">
					BBB
				</ExternalLink>{' '}
				for quest info.
			</Text>
		),
		image: '/images/items/warp-capsule.png',
	},
	'Desert Coin': {
		details: (
			<Center style={{ flexDirection: 'column', gap: 8 }} ta="center">
				<Text>
					<ExternalLink href="https://maplelegends.com/lib/etc?id=4031889">
						Desert Coins
					</ExternalLink>{' '}
					are custom content that allow you to warp from Perion to the Sahel desert.
				</Text>

				<Text mb="sm">
					See the{' '}
					<ExternalLink href="https://forum.maplelegends.com/index.php?threads/general-patch-notes-october-9-2022.47422/">
						official patch notes
					</ExternalLink>{' '}
					to find how to obtain Desert Coins.
				</Text>

				<Divider my="lg" w="100%" />

				<Title order={5} td="underline">
					Victoria Island {`->`} Ariant
				</Title>

				<MapFeatureDetails disableDrawerLink mapFeature="Perion: Iron Boar Land" />
			</Center>
		),
		image: IMAGE_PLACEHOLDER,
	},
	'Energy Shard': {
		details: (
			<Center style={{ flexDirection: 'column', gap: 8 }} ta="center">
				<Text>
					<ExternalLink href="https://maplelegends.com/lib/etc?id=4035060">
						Energy Shards
					</ExternalLink>{' '}
					are custom content that allow warping between Korean Folk Town and Omega Sector.
				</Text>

				<Text>Obtaining Energy Shards first requires completing tier 3 of the HP Challenges.</Text>

				<Divider my="md" w="100%" />

				<List spacing={8} type="ordered">
					<ListItem>
						Read up on the{' '}
						<ExternalLink href="https://forum.maplelegends.com/index.php?threads/release-challenges-system-hp-wash-alternative.51808/">
							HP Challenge Release Notes
						</ExternalLink>
					</ListItem>

					<ListItem>
						Follow cereal box's{' '}
						<ExternalLink href="https://forum.maplelegends.com/index.php?threads/hp-challenges-storyline-quest-guide.51883/">
							HP Challenge Guide
						</ExternalLink>
					</ListItem>

					<ListItem>
						Obtain Energy Shards from{' '}
						<ExternalLink href="https://maplelegends.com/lib/npc?id=2041029">Karen</ExternalLink>
					</ListItem>
				</List>
			</Center>
		),
		image: IMAGE_PLACEHOLDER,
	},
	'Eos Rock Scroll': {
		details: (
			<Center style={{ flexDirection: 'column', gap: 8 }} ta="center">
				<Text>
					Obtainable via quests. See{' '}
					<ExternalLink href="https://bbb.hidden-street.net/items/quest/eos-rock-scroll">
						BBB
					</ExternalLink>{' '}
					for quest info.
				</Text>

				<Divider my="lg" w="100%" />

				<Title order={5} td="underline">
					Ludibrium {`->`} Omega Sector
				</Title>

				<List type="ordered">
					<ListItem>
						Talk to <NpcExternalLink npc="First Eos Rock" />
					</ListItem>
					<ListItem>Use Eos Rock Scrolls to reach the 41st floor</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>Arrive in Omega Sector</ListItem>
				</List>

				<Divider my="lg" w="100%" />

				<Title order={5} td="underline">
					Omega Sector {`->`} Ludibrium
				</Title>

				<List type="ordered">
					<ListItem>
						Talk to <NpcExternalLink npc="Fourth Eos Rock" />
					</ListItem>
					<ListItem>Use Eos Rock Scrolls to reach the 71st floor</ListItem>
					<ListItem>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" />
					</ListItem>
					<ListItem>Arrive in Ludibrium</ListItem>
				</List>
			</Center>
		),
		image: '/images/items/eos-rock-scroll.png',
	},
	'Fruit Milk': {
		details: (
			<Text ta="center">
				Purchased from{' '}
				<ExternalLink href="https://bbb.hidden-street.net/npc/momoyo">Momyo in Showa</ExternalLink>
			</Text>
		),
		image: '/images/items/fruit-milk.png',
	},
	'Gate Pass': {
		details: (
			<Text ta="center">
				Follow{' '}
				<ExternalLink href="https://forum.maplelegends.com/index.php?threads/neo-tokyo-guide.25729/">
					Zooploop's guide
				</ExternalLink>{' '}
				to access Neo Tokyo
			</Text>
		),
		image: IMAGE_PLACEHOLDER,
	},
	'Ludibrium Warp Capsule': {
		details: (
			<Text ta="center">
				Obtainable via quests. See{' '}
				<ExternalLink href="https://bbb.hidden-street.net/items/return-scroll/ludibrium-warp-capsule">
					BBB
				</ExternalLink>{' '}
				for quest info.
			</Text>
		),
		image: '/images/items/warp-capsule.png',
	},
	'Magic Seed': {
		details: (
			<Text ta="center">
				Purchased from{' '}
				<ExternalLink href="https://bbb.hidden-street.net/npc/chief-tatamo">
					Chief Tatamo
				</ExternalLink>{' '}
				after completion of{' '}
				<ExternalLink href="https://bbb.hidden-street.net/quest/victoria-island/the-messenger-of-the-fairy-forest">
					The Messenger of the Fairy Forest
				</ExternalLink>{' '}
				quest
			</Text>
		),
		image: '/images/items/magic-seed.png',
	},
	'Omega Sector Warp Capsule': {
		details: (
			<Text ta="center">
				Obtainable via quests. See{' '}
				<ExternalLink href="https://bbb.hidden-street.net/items/return-scroll/omega-sector-warp-capsule">
					BBB
				</ExternalLink>{' '}
				for quest info.
			</Text>
		),
		image: '/images/items/warp-capsule.png',
	},
	'Orbis Rock Scroll': {
		details: (
			<Center style={{ flexDirection: 'column', gap: 8 }} ta="center">
				<Text>
					Obtainable via quests. See{' '}
					<ExternalLink href="https://bbb.hidden-street.net/items/quest/orbis-rock-scroll">
						BBB
					</ExternalLink>{' '}
					for quest info.
				</Text>

				<Divider my="lg" w="100%" />

				<Title order={5} td="underline">
					Starting from Orbis
				</Title>

				<Stack>
					<Text>
						Talk to <NpcExternalLink npc="Orbis Magic Spot" /> to reach the 1st floor
					</Text>

					<Text>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" /> to get to El Nath
					</Text>

					<Text>
						OR continue to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=230010000">
							Aqua Road: Ocean I.C
						</ExternalLink>{' '}
						before using to reach Aquarium
					</Text>
				</Stack>

				<Divider my="lg" w="100%" />

				<Title order={5} td="underline">
					Starting from Aquarium or El Nath
				</Title>

				<Stack>
					<Text>
						Walk to{' '}
						<ExternalLink href="https://maplelegends.com/lib/map?id=200082100">
							Orbis Tower {`<1st Floor>`}
						</ExternalLink>
					</Text>

					<Text>
						Talk to <NpcExternalLink npc="El Nath Magic Spot" /> to reach the 20th floor
					</Text>

					<Text>
						Use a <ItemDrawerLink item="Return Scroll - Nearest Town" /> to get to Orbis
					</Text>
				</Stack>
			</Center>
		),
		image: '/images/items/orbis-rock-scroll.png',
	},
	'Return Scroll - Nearest Town': {
		details: (
			<Text ta="center">
				Purchased from many vendors. See{' '}
				<ExternalLink href="https://bbb.hidden-street.net/items/return-scroll/return-scroll-nearest-town">
					BBB
				</ExternalLink>{' '}
				for info.
			</Text>
		),
		image: '/images/items/return-scroll-nearest-town.png',
	},
	'Return to New Leaf City Scroll': {
		details: (
			<Center style={{ flexDirection: 'column', gap: 8 }} ta="center">
				<Text>
					Purchased from <ExternalLink href="https://bbb.hidden-street.net/npc/mo">Mo</ExternalLink>{' '}
					after becoming an ally of the Raven Ninja Clan
				</Text>

				<Text>
					To become an ally you must complete the quest{' '}
					<ExternalLink href="https://bbb.hidden-street.net/quest/masteria/the-right-path">
						The Right Path
					</ExternalLink>
				</Text>
			</Center>
		),
		image: '/images/items/return-to-new-leaf-city-scroll.png',
	},
	'Strawberry Milk': {
		details: (
			<Text ta="center">
				Purchased from{' '}
				<ExternalLink href="https://bbb.hidden-street.net/npc/momoyo">Momyo in Showa</ExternalLink>
			</Text>
		),
		image: '/images/items/strawberry-milk.png',
	},
	'VIP Ticket to Florina Beach': {
		details: (
			<Text ta="center">
				Obtainable from the{' '}
				<ExternalLink href="https://bbb.hidden-street.net/quest/ludus-lake/vip-ticket-to-florina-beach">
					VIP Ticket to Florina Beach Quest line
				</ExternalLink>
			</Text>
		),
		image: '/images/items/vip-ticket-to-florina-beach.png',
	},
	'Warp Card': {
		details: (
			<Text ta="center">
				Purchased from{' '}
				<ExternalLink href="https://bbb.hidden-street.net/npc/bartol">Bartol</ExternalLink> after
				completion of the quest{' '}
				<ExternalLink href="https://bbb.hidden-street.net/quest/victoria-island/bartols-request">
					Bartol's Request
				</ExternalLink>
			</Text>
		),
		image: '/images/items/warp-card.png',
	},
} satisfies Record<Item, ItemDetails>;
