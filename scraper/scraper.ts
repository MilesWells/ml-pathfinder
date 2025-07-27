import * as cheerio from 'cheerio';
import type { Item, Monster } from './types';

const BASE_URL = 'https://maplelegends.com';

const parsedMonsters: Record<string, Monster> = {};
const parsedItems: Record<string, Item> = {};

function parseIdSearchParamFromHref(rawHref: string) {
	const match = /id=(\d+)/.exec(rawHref)?.at(1);

	if (match === undefined) {
		console.log('Error parsing id from href:', rawHref);
		return null;
	}

	return match;
}

export async function scrapeMonsterPage(monsterId: string): Promise<Monster | null> {
	const libraryLink = `${BASE_URL}/lib/monster?id=${monsterId}`;

	const $ = await cheerio.fromURL(libraryLink);

	const monsterName = $('.table > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)')
		.text()
		.trim();

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

				const item: Item = {
					id,
					imageLocation: `${BASE_URL}${src}`,
					libraryLink: `${BASE_URL}${this.attribs.href}`,
					name: title,
				};

				if (!parsedItems[id]) parsedItems[id] = item;

				return item.id;
			})
			.toArray();
	}

	const drops: Monster['drops'] = {
		equip: parseDropsCategory(1),
		etc: parseDropsCategory(3),
		setup: parseDropsCategory(5),
		use: parseDropsCategory(7),
	};

	const noDrops = Object.values(drops).every(parsedDrops => parsedDrops.length === 0);

	if (noDrops) return null;

	return {
		drops,
		id: monsterId,
		imageLocation,
		libraryLink,
		libraryPage: -1,
		name: monsterName,
	};
}

export async function scrapeMonsterTablePage(page: number) {
	const url = `${BASE_URL}/lib/monster?page=${page}`;

	console.log(`Scraping ${url}`);
	const $ = await cheerio.fromURL(url);

	// table.text-center is currently unique enough to select the correct table.
	// thead not used. first tr in tbody contains th instead of td.
	// both the image of the monster and its name are links. But the image is td > center > a
	const $monsterLinks = $('table.text-center tr:not(:has(th)) td > a');

	// cheerio.map automatically filters out null/undefined values
	const scrapedMonsters = (
		await Promise.all(
			$monsterLinks
				.map((_, monsterLink) => parseIdSearchParamFromHref(monsterLink.attribs.href))
				.slice(0, 1) // TODO: remove this after testing
				.toArray()
				.map(async monsterId => {
					const monster = await scrapeMonsterPage(monsterId);

					if (monster === null) return null;

					monster.libraryPage = page;

					return monster;
				}),
		)
	).filter(monster => monster !== null);

	return {
		scrapedMonsters,
		totalMonsterLinks: $monsterLinks.length,
	};
}

export type ScrapeOptions = {
	maxPages?: number;
	startPage?: number;
};

export async function scrapeAllMonstersAndDrops(options: ScrapeOptions = {}) {
	const { maxPages = 1, startPage = 1 } = options;

	let page = startPage - 1; // -1 because the ++page below is convenient to use

	while (maxPages === undefined || ++page < maxPages + startPage) {
		try {
			const { scrapedMonsters, totalMonsterLinks } = await scrapeMonsterTablePage(page);

			if (totalMonsterLinks === 0) {
				console.log(`No monsters found on page ${page}, stopping`);
				break;
			}

			scrapedMonsters.forEach(monster => {
				if (parsedMonsters[monster.id]) {
					console.log(`Duplicate monster on page ${page}: ${monster.name} (id: ${monster.id})`);
					return;
				}

				parsedMonsters[monster.id] = monster;
			});

			console.log(`Completed scraping monsters on page ${page}`);
		} catch (error) {
			console.log(`Error processing page ${page}:`, error);
			break;
		}
	}

	return {
		parsedItems,
		parsedMonsters,
	};
}
