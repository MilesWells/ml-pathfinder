import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { scrapeAllMonstersAndDrops } from './scraper';

async function main() {
	try {
		console.log('Starting monster scraper...');
		const { parsedMonsters, parsedItems } = await scrapeAllMonstersAndDrops(1);

		if (parsedMonsters.array.length === 0) {
			console.log('No monsters with drops found.');
			return;
		}

		const monstersOutputPath = join(process.cwd(), 'public/data/monsters.json');
		const itemsOutputPath = join(process.cwd(), 'public/data/items.json');

		const monstersOutputData = {
			monsters: parsedMonsters.map,
			scrapedAt: new Date().toISOString(),
			totalMonsters: parsedMonsters.array.length,
		};

		writeFileSync(monstersOutputPath, JSON.stringify(monstersOutputData, null, 2));

		const itemsOutputData = {
			items: parsedItems.map,
			scrapedAt: new Date().toISOString(),
			totalItems: parsedItems.array.length,
		};

		writeFileSync(itemsOutputPath, JSON.stringify(itemsOutputData, null, 2));

		console.log(`\nScraping completed successfully!`);
		console.log(`Total monsters with drops: ${parsedMonsters.array.length}`);
		console.log(`Total items: ${parsedItems.array.length}`);
		console.log(`Monsters saved to: ${monstersOutputPath}`);
		console.log(`Items saved to: ${itemsOutputPath}`);
	} catch (error) {
		console.error('Scraping failed:', error);
		process.exit(1);
	}
}

main();
