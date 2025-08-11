export function parseNumberWithDefault(numberAsString?: string) {
	const parsedNumber = Number(numberAsString?.replaceAll(',', ''));

	return Number.isNaN(parsedNumber) ? 0 : parsedNumber;
}

export function parseIdSearchParamFromHref(rawHref: string) {
	const match = /id=(\d+)/.exec(rawHref)?.at(1);

	if (match === undefined) {
		console.log('Error parsing id from href:', rawHref);
		return null;
	}

	return match;
}
