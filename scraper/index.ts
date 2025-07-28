import { type ScrapeOptions, scrapeAllMonstersAndDrops } from './scraper';
import { writeScraperResults } from './write-scraper-results';

async function main() {
	const scrapeOptions: ScrapeOptions = {
		maxPages: 1,
		// startPage: 2,
	};

	const results = await scrapeAllMonstersAndDrops(scrapeOptions);

	writeScraperResults(results);
}

main();
