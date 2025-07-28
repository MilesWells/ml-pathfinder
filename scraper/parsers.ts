function parseNumberWithDefault(numberAsString?: string) {
	const parsedNumber = Number(numberAsString);

	return Number.isNaN(parsedNumber) ? 0 : parsedNumber;
}

export function statParserFactory(statBlockAsText: string) {
	return {
		parseMeso() {
			const results = /Meso: ([\d,]+) - ([\d,]+)/.exec(statBlockAsText);

			return {
				max: parseNumberWithDefault(results?.at(2)),
				min: parseNumberWithDefault(results?.at(1)),
			};
		},
		parseStat(statToFind: string) {
			const results = new RegExp(`${statToFind}: (-{0,1}[\\d,]+)`).exec(statBlockAsText)?.at(1);

			return parseNumberWithDefault(results);
		},
	};
}
