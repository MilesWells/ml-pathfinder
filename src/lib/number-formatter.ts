const PREFIX_MAP = {
	1: 'k',
	2: 'm',
	3: 'b',
} as const;

function isPrefixKey(key: number): key is keyof typeof PREFIX_MAP {
	return true;
}

export function formatPositiveInteger(num: number) {
	if (num < 0) throw new Error('Expected num to be positive');
	if (`${num}`.includes('.')) throw Error('Expected num to be an integer');

	const roundedAsString = `${Math.round(num)}`;
	const numLength = roundedAsString.length;

	if (numLength > 12) throw new Error('Unsupported integer size');

	if (numLength < 4) return num.toLocaleString();

	const prefixKey = Math.floor(numLength / 3);

	if (!isPrefixKey(prefixKey)) throw Error(`How did you get here? prefixKey: ${prefixKey}`);

	const prefix = PREFIX_MAP[prefixKey];
}
