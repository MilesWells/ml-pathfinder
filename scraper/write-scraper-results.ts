import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { ScrapedItem } from '@/scraped-data/item';
import type { ScrapedMonster } from '@/scraped-data/monster';

export type ScraperResults = {
	parsedItems: Record<string, ScrapedItem>;
	parsedMonsters: Record<string, ScrapedMonster>;
};

export function writeScraperResults({ parsedItems, parsedMonsters }: ScraperResults) {
	const monstersOutputPath = join(process.cwd(), 'public/data/monsters.json');
	const itemsOutputPath = join(process.cwd(), 'public/data/items.json');

	const totalMonsters = Object.keys(parsedMonsters).length;
	const totalItems = Object.keys(parsedItems).length;

	const monstersOutputData = {
		monsters: parsedMonsters,
		scrapedAt: new Date().toISOString(),
		totalMonsters,
	};

	writeFileSync(monstersOutputPath, JSON.stringify(monstersOutputData, null, 2));

	const itemsOutputData = {
		items: parsedItems,
		scrapedAt: new Date().toISOString(),
		totalItems,
	};

	writeFileSync(itemsOutputPath, JSON.stringify(itemsOutputData, null, 2));

	console.log(`\nScraping completed successfully!`);
	console.log(`Total monsters with drops: ${totalMonsters}`);
	console.log(`Total items: ${totalItems}`);
	console.log(`Monsters saved to: ${monstersOutputPath}`);
	console.log(`Items saved to: ${itemsOutputPath}`);
}
