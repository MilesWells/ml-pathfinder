import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import isEqual from 'lodash/isEqual';
import type { ScrapedItem } from '@/lib/item';
import type { ScrapedMonster } from '@/lib/monster';
import currentItemData from '@/scraped-data/items.json' with { type: 'json' };
import currentMonsterData from '@/scraped-data/monsters.json' with { type: 'json' };

const BASE_OUTPUT_PATH = join(process.cwd(), 'src/scraped-data');

export function writeMonstersToFile(parsedMonsters: Record<string, ScrapedMonster>) {
	const monstersOutputPath = join(BASE_OUTPUT_PATH, 'monsters.json');
	const totalMonsters = Object.keys(parsedMonsters).length;

	if (
		currentMonsterData.totalMonsters === totalMonsters &&
		isEqual(currentMonsterData.monsters, parsedMonsters)
	) {
		console.log(
			`No changes detected between parsed monster data and existing data in ${monstersOutputPath}`,
		);
		console.log('Skipping writing monster data to file');
		return;
	}

	console.log(`Writing monsters to file...`);

	const monstersOutputData = {
		monsters: parsedMonsters,
		scrapedAt: new Date().toISOString(),
		totalMonsters,
	};

	writeFileSync(monstersOutputPath, JSON.stringify(monstersOutputData));

	console.log(`${totalMonsters} monsters written to file: ${monstersOutputPath}`);
}

export function writeItemsToFile(parsedItems: Record<string, ScrapedItem>) {
	const itemsOutputPath = join(BASE_OUTPUT_PATH, 'items.json');
	const totalItems = Object.keys(parsedItems).length;

	if (currentItemData.totalItems === totalItems && isEqual(currentItemData.items, parsedItems)) {
		console.log(
			`No changes detected between parsed item data and existing data in ${itemsOutputPath}`,
		);
		console.log('Skipping writing item data to file');
		return;
	}

	console.log(`Writing items to file...`);

	const itemsOutputData = {
		items: parsedItems,
		scrapedAt: new Date().toISOString(),
		totalItems,
	};

	writeFileSync(itemsOutputPath, JSON.stringify(itemsOutputData));

	console.log(`${totalItems} items written to file: ${itemsOutputPath}`);
}
