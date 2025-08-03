import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import isEqual from 'lodash/isEqual';
import type { ScrapedItem } from '@/scraped-data/item';
import type { ScrapedMonster } from '@/scraped-data/monster';
import currentItemData from '@/scraped-data/raw/items.json';
import currentMonsterData from '@/scraped-data/raw/monsters.json';
import currentSkippedMonstersData from '@/scraped-data/raw/skipped-monsters.json';

const BASE_OUTPUT_PATH = join(process.cwd(), 'src/scraped-data/raw');

export type ScraperResults = {
	parsedItems: Record<string, ScrapedItem>;
	parsedMonsters: Record<string, ScrapedMonster>;
	skippedParsedMonsters: Record<string, ScrapedMonster>;
};

function writeMonstersToFile(parsedMonsters: ScraperResults['parsedMonsters']) {
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

function writeItemsToFile(parsedItems: ScraperResults['parsedItems']) {
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

function writeSkippedMonstersToFile(
	skippedParsedMonsters: ScraperResults['skippedParsedMonsters'],
) {
	const skippedMonstersOutputPath = join(BASE_OUTPUT_PATH, 'skipped-monsters.json');
	const totalSkippedMonsters = Object.keys(skippedParsedMonsters).length;

	if (
		currentSkippedMonstersData.totalSkippedMonsters === totalSkippedMonsters &&
		isEqual(currentSkippedMonstersData.skippedMonsters, skippedParsedMonsters)
	) {
		console.log(
			`No changes detected between parsed skipped monster data and existing data in ${skippedMonstersOutputPath}`,
		);
		console.log('Skipping writing skipped monster data to file');
		return;
	}

	console.log(`Writing skipped monsters to file...`);

	const skippedMonstersOutputData = {
		scrapedAt: new Date().toISOString(),
		skippedMonsters: skippedParsedMonsters,
		totalSkippedMonsters,
	};

	writeFileSync(skippedMonstersOutputPath, JSON.stringify(skippedMonstersOutputData));

	console.log(
		`${totalSkippedMonsters} skipped monsters written to file: ${skippedMonstersOutputPath}`,
	);
}

export function writeScraperResults({
	parsedItems,
	parsedMonsters,
	skippedParsedMonsters,
}: ScraperResults) {
	console.log(`\nWriting results to disk...`);

	writeMonstersToFile(parsedMonsters);
	writeItemsToFile(parsedItems);
	writeSkippedMonstersToFile(skippedParsedMonsters);

	console.log(`\nScraping completed successfully!`);
}
