import * as cheerio from 'cheerio';
import type { ScrapedMonster } from '@/lib/monster';
import type { MonsterScrapeOptions } from '.';
import { downloadImage } from './download-image';
import { parseIdSearchParamFromHref, parseNumberWithDefault } from './parse-utils';

let options: MonsterScrapeOptions;

const BASE_URL = 'https://maplelegends.com';

const parsedMonsters: Record<string, ScrapedMonster> = {};

const BOSS_STRING = '(Boss)';
const AUTO_AGGRO_STRING = '(Auto-Aggro)';

export async function scrapeMonsterPage(monsterId: string): Promise<ScrapedMonster> {
	const libraryLink = `${BASE_URL}/lib/monster?id=${monsterId}`;

	const $ = await cheerio.fromURL(libraryLink);

	const $stats = $('.table');

	let monsterName = $stats.find('tr:first-child > th:first-child').text().trim();

	const isBoss = monsterName.includes(BOSS_STRING);
	const isAutoAggro = monsterName.includes(AUTO_AGGRO_STRING);

	if (isBoss) monsterName = monsterName.replace(BOSS_STRING, '');
	if (isAutoAggro) monsterName = monsterName.replace(AUTO_AGGRO_STRING, '');
	if (isBoss || isAutoAggro) monsterName = monsterName.trim();

	console.log('Scraping', monsterName, `(id: ${monsterId})`);

	const scrapedImageObject = $(`object[data*=${monsterId}]`);

	const imageUrl = `${BASE_URL}${scrapedImageObject.attr('data')}`;

	const imageLocation = await downloadImage(imageUrl, `/images/monsters/${monsterId}.png`);

	const $drops = $('.panel-body');

	function parseDropsCategory(nth: number) {
		return $drops
			.find(`p:nth(${nth}) a`)
			.map(function () {
				return parseIdSearchParamFromHref(this.attribs.href);
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
		exp: parseStat('EXP') * 2,
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
		isAutoAggro,
		isBoss,
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

export async function scrapeMonsters(passedOptions: MonsterScrapeOptions) {
	options = passedOptions;
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

	return parsedMonsters;
}
