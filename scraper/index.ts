import { join } from 'node:path';
import { program } from 'commander';
import z from 'zod';
import { scrapeMonsters } from './monster-scraper';
import { writeScraperResults } from './write-scraper-results';

program.name('maplelegends-scraper').description('CLI for scraping Maplelegends Library');

const BASE_OUTPUT_PATH = join(process.cwd(), 'src/scraped-data');

const DEFAULT_MONSTERS_OUTPUT_PATH = join(BASE_OUTPUT_PATH, 'monsters.json');

export const monsterScrapeOptionsSchema = z.object({
	maxPages: z.coerce.number().optional().default(undefined),
	outPath: z.string(),
	pretty: z.boolean(),
	startPage: z.coerce.number().optional().default(undefined),
	write: z.boolean(),
});

export type MonsterScrapeOptions = z.infer<typeof monsterScrapeOptionsSchema>;

program
	.command('monsters')
	.description('scrape monsters')
	.option('--start-page <num>', 'page to start at')
	.option('--max-pages <num>', 'maximum number of pages to scrape')
	.option('--write', 'write scrape results to file', false)
	.option('--out-path <path>', 'path to write scrape results to', DEFAULT_MONSTERS_OUTPUT_PATH)
	.option('--pretty', 'pretty print the output when writing to file', false)
	.action(async rawOptions => {
		const options = monsterScrapeOptionsSchema.parse(rawOptions);

		const scrapedMonsters = await scrapeMonsters(options);

		if (options.write)
			await writeScraperResults({
				dataType: 'monsters',
				derivedData: {
					totalMonsters: Object.keys(scrapedMonsters).length,
				},
				outPath: options.outPath,
				pretty: options.pretty,
				scrapedData: scrapedMonsters,
			});
		else console.log(scrapedMonsters);
	});

program.parseAsync();
