import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export type WriteScraperResultsOptions<TData, TDerived extends Record<string, unknown>> = {
	dataType: string;
	derivedData: TDerived;
	outPath: string;
	pretty: boolean;
	scrapedData: TData;
};

export async function writeScraperResults<TData, TDerived extends Record<string, unknown>>({
	dataType,
	derivedData,
	outPath,
	pretty,
	scrapedData,
}: WriteScraperResultsOptions<TData, TDerived>) {
	console.log(`Writing scraped ${dataType} data to file...`);

	const outputData = {
		[dataType]: scrapedData,
		...derivedData,
		scrapedAt: new Date().toISOString(),
	};

	mkdirSync(path.dirname(outPath), { recursive: true });
	writeFileSync(outPath, pretty ? JSON.stringify(outputData, null, 2) : JSON.stringify(outputData));

	console.log(`${dataType} data written to file: ${outPath}`);
}
