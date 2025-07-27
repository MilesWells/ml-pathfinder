import * as cheerio from 'cheerio';
import type { Item, Monster } from './types';

const BASE_URL = 'https://maplelegends.com';

function parseIdSearchParamFromHref(rawHref: string) {
	const match = /id=(\d+)/.exec(rawHref)?.at(1);

	if (match === undefined) {
		console.log('Error parsing id from href:', rawHref);
		return null;
	}

	return match;
}

async function scrapeMonsterPage(monsterId: string): Promise<Monster> {
	const $ = await cheerio.fromURL(`${BASE_URL}/lib/monster?id=${monsterId}`);

	const monsterName = $('.table > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)')
		.text()
		.trim();
	console.log('Scraping', monsterName, `(id: ${monsterId})`);

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

				return {
					id,
					imageLocation: `${BASE_URL}${src}`,
					libraryLink: `${BASE_URL}${this.attribs.href}`,
					name: title,
				};
			})
			.toArray<Item>();
	}

	return {
		drops: {
			equip: parseDropsCategory(1),
			etc: parseDropsCategory(3),
			setup: parseDropsCategory(5),
			use: parseDropsCategory(7),
		},
		id: monsterId,
		name: monsterName,
	};
}

async function scrapeMonsterTablePage(page: number) {
	const url = `${BASE_URL}/lib/monster?page=${page}`;

	console.log(`Scraping ${url}`);
	const $ = await cheerio.fromURL(url);

	// table.text-center is currently unique enough to select the correct table.
	// thead not used. first tr in tbody contains th instead of td.
	// both the image of the monster and its name are links. But the image is td > center > a
	// cheerio.map automatically filters out null/undefined values
	return $('table.text-center tr:not(:has(th)) td > a')
		.map((_, monsterLink) => parseIdSearchParamFromHref(monsterLink.attribs.href))
		.toArray()
		.slice(0, 1) // TODO: remove this after testing
		.map(scrapeMonsterPage);
}

export async function scrapeAllMonsters(maxPages: number) {
	const allMonsters: Monster[] = [];

	let page = 0;

	while (++page <= maxPages) {
		try {
			const monsterRows = await scrapeMonsterTablePage(page);

			if (monsterRows.length === 0) {
				console.log(`No more monsters found on page ${page}, stopping`);
				break;
			}

			const monsters = await Promise.all(monsterRows);

			allMonsters.push(...monsters);

			console.log(`Completed page ${page}, total monsters so far: ${allMonsters.length}`);
		} catch (error) {
			console.log(`Error processing page ${page}:`, error);
			break;
		}
	}

	return allMonsters;
}
