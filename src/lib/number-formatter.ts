export function formatPositiveInteger(num: number) {
	if (num < 0) throw new Error('Expected num to be positive');
	if (`${num}`.includes('.')) throw Error('Expected num to be an integer');

	const rounded = Math.round(num);
	const roundedAsString = `${rounded}`;
	const numLength = roundedAsString.length;

	if (numLength > 12) throw new Error('Unsupported integer size');

	if (numLength < 4) return num.toLocaleString();

	let prefix = 'k';

	if (numLength > 6) prefix = 'm';
	if (numLength > 9) prefix = 'b';

	const divisor = 1_000 ** Math.floor((numLength - 1) / 3);

	return (rounded / divisor).toLocaleString('en-US') + prefix;
}
