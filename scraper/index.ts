import { program } from 'commander';
import z from 'zod';
import { scrapeMonsters } from './monster-scraper';
import { writeMonstersToFile } from './write-scraper-results';

program.name('maplelegends-scraper').description('CLI for scraping Maplelegends Library');

export const monsterScrapeOptionsSchema = z.object({
	maxPages: z.coerce.number().optional().default(undefined),
	startPage: z.coerce.number().optional().default(undefined),
	write: z.boolean(),
});

export type MonsterScrapeOptions = z.infer<typeof monsterScrapeOptionsSchema>;

program
	.command('monsters')
	.description('scrape monsters')
	.option('--start-page <num>', 'page to start at', undefined)
	.option('--max-pages <num>', 'maximum number of pages to scrape', undefined)
	.option('-w, --write', 'write scrape results to file', false)
	.action(async rawOptions => {
		const options = monsterScrapeOptionsSchema.parse(rawOptions);
		const scrapedMonsters = await scrapeMonsters(options);

		if (options.write) writeMonstersToFile(scrapedMonsters);
		else console.log(scrapedMonsters);
	});

program.parseAsync();
