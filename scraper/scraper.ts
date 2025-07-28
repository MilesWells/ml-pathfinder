import * as cheerio from 'cheerio';
import type { ScrapedItem } from '@/scraped-data/item';
import type { ScrapedMonster } from '@/scraped-data/monster';

const BASE_URL = 'https://maplelegends.com';

const parsedMonsters: Record<string, ScrapedMonster> = {};
const parsedItems: Record<string, ScrapedItem> = {};
const skippedParsedMonsters: Record<string, ScrapedMonster> = {};

function parseNumberWithDefault(numberAsString?: string) {
	const parsedNumber = Number(numberAsString);

	return Number.isNaN(parsedNumber) ? 0 : parsedNumber;
}

function parseIdSearchParamFromHref(rawHref: string) {
	const match = /id=(\d+)/.exec(rawHref)?.at(1);

	if (match === undefined) {
		console.log('Error parsing id from href:', rawHref);
		return null;
	}

	return match;
}

export async function scrapeMonsterPage(monsterId: string): Promise<ScrapedMonster> {
	const libraryLink = `${BASE_URL}/lib/monster?id=${monsterId}`;

	const $ = await cheerio.fromURL(libraryLink);

	const $stats = $('.table');

	const monsterName = $stats.find('tr:first-child > th:first-child').text().trim();

	console.log('Scraping', monsterName, `(id: ${monsterId})`);

	const scrapedImageLocation = $(`object[data*=${monsterId}]`).attr('data');
	const imageLocation = scrapedImageLocation ? `${BASE_URL}${scrapedImageLocation}` : null;

	const $drops = $('.panel-body');

	function parseDropsCategory(nth: number) {
		return $drops
			.find(`p:nth(${nth}) a`)
			.map(function () {
				const id = parseIdSearchParamFromHref(this.attribs.href);
				if (id === null) return;

				const $img = $(this).find('img');
				const { src = null, title } = $img.attr() ?? {};

				if (title === undefined) {
					console.log('Error parsing', monsterName, 'drop item name. id:', id);
					return;
				}

				if (!parsedItems[id])
					parsedItems[id] = {
						id,
						imageLocation: `${BASE_URL}${src}`,
						libraryLink: `${BASE_URL}${this.attribs.href}`,
						name: title,
					};

				return id;
			})
			.toArray();
	}

	const drops: ScrapedMonster['drops'] = {
		equip: parseDropsCategory(1),
		etc: parseDropsCategory(3),
		setup: parseDropsCategory(5),
		use: parseDropsCategory(7),
	};

	const statsAsText = $stats.text().trim();

	function parseStat(statToFind: string) {
		const results = new RegExp(`${statToFind}: (-{0,1}[\\d,]+)`).exec(statsAsText)?.at(1);

		return parseNumberWithDefault(results);
	}

	function parseElementalStatus(statusToFind: string) {
		return new RegExp(`${statusToFind}: ([^-\n\r]+)`).exec(statsAsText)?.at(1) ?? null;
	}

	const mesosResults = /Meso: ([\d,]+) - ([\d,]+)/.exec(statsAsText);

	const stats: ScrapedMonster['stats'] = {
		accuracy: parseStat('Accuracy'),
		avoidability: parseStat('Avoidability'),
		elements: {
			immune: parseElementalStatus('Immune'),
			strong: parseElementalStatus('Strong'),
			weak: parseElementalStatus('Weak'),
		},
		exp: parseStat('EXP'),
		hp: parseStat('HP'),
		hpRegen: parseStat('HP Regen'),
		knockback: parseStat('Knockback'),
		level: parseStat('Level'),
		magicAttack: parseStat('M. Attack'),
		magicDefense: parseStat('M. Defense'),
		mesos: {
			max: parseNumberWithDefault(mesosResults?.at(2)),
			min: parseNumberWithDefault(mesosResults?.at(1)),
		},
		mp: parseStat('MP'),
		mpRegen: parseStat('MP Regen'),
		speed: parseStat('Speed'),
		weaponAttack: parseStat('W. Attack'),
		weaponDefense: parseStat('W. Defense'),
	};

	return {
		drops,
		id: monsterId,
		imageLocation,
		libraryLink,
		libraryPage: -1,
		name: monsterName,
		stats,
	};
}

export async function scrapeMonsterTablePage(page: number) {
	const url = `${BASE_URL}/lib/monster?page=${page}`;

	console.log(`\nScraping monster table page ${page}: ${url}`);
	const $ = await cheerio.fromURL(url);

	// table.text-center is currently unique enough to select the correct table.
	// thead not used. first tr in tbody contains th instead of td.
	// both the image of the monster and its name are links. But the image is td > center > a
	const $monsterLinks = $('table.text-center tr:not(:has(th)) td > a');

	return Promise.all(
		$monsterLinks
			// cheerio.map automatically filters out null/undefined values
			.map((_, monsterLink) => parseIdSearchParamFromHref(monsterLink.attribs.href))
			.toArray()
			.map(async monsterId => {
				const monster = await scrapeMonsterPage(monsterId);

				monster.libraryPage = page;

				return monster;
			}),
	);
}

function shouldSkipMonster(monster: ScrapedMonster) {
	const noDrops = Object.values(monster.drops).every(parsedDrops => parsedDrops.length === 0);

	return noDrops;
}

export type ScrapeOptions = {
	maxPages?: number;
	startPage?: number;
};

export async function scrapeAllMonstersAndDrops(options: ScrapeOptions) {
	const { maxPages, startPage = 1 } = options;

	if (startPage < 1) throw new Error('startPage must be at least 1');

	let page = startPage;

	while (maxPages === undefined || page < maxPages + startPage) {
		try {
			const scrapedMonsters = await scrapeMonsterTablePage(page);

			if (scrapedMonsters.length === 0) {
				console.log(`No monsters found on page ${page}, stopping`);
				break;
			}

			for (const monster of scrapedMonsters) {
				if (shouldSkipMonster(monster)) {
					console.log(`Skipping monster on page ${page}: ${monster.name} (id: ${monster.id})`);
					skippedParsedMonsters[monster.id] = monster;
					continue;
				}

				if (parsedMonsters[monster.id]) {
					console.log(`Duplicate monster on page ${page}: ${monster.name} (id: ${monster.id})`);
					console.log(
						`Existing monster on page ${parsedMonsters[monster.id].libraryPage}: ${parsedMonsters[monster.id].name} (id: ${parsedMonsters[monster.id].id})`,
					);
					continue;
				}

				parsedMonsters[monster.id] = monster;
			}

			console.log(`Completed scraping monsters on page ${page}`);
		} catch (error) {
			console.log(`Error processing page ${page}:`, error);
			break;
		} finally {
			page++;
		}
	}

	return {
		parsedItems,
		parsedMonsters,
		skippedParsedMonsters,
	};
}
