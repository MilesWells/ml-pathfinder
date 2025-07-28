import { type ScrapeOptions, scrapeAllMonstersAndDrops } from './scraper';
import { writeScraperResults } from './write-scraper-results';

async function main() {
	const scrapeOptions: ScrapeOptions = {};

	const results = await scrapeAllMonstersAndDrops(scrapeOptions);

	writeScraperResults(results);
}

main();
