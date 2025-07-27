import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { scrapeAllMonsters } from './scraper';

async function main() {
	try {
		console.log('Starting monster scraper...');
		const monsters = await scrapeAllMonsters(1);

		if (monsters.length === 0) {
			console.log('No monsters with drops found.');
			return;
		}

		const outputPath = join(process.cwd(), 'public/data/monsters.json');
		const outputData = {
			monsters,
			scrapedAt: new Date().toISOString(),
			totalMonsters: monsters.length,
		};

		writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

		console.log(`\nScraping completed successfully!`);
		console.log(`Total monsters with drops: ${monsters.length}`);
		console.log(`Results saved to: ${outputPath}`);
	} catch (error) {
		console.error('Scraping failed:', error);
		process.exit(1);
	}
}

main().then(() => process.exit(0));
