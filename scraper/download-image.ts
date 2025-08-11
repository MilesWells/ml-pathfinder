import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function downloadImage(imageUrl: string, destination: string) {
	const response = await fetch(imageUrl);

	if (response.ok) {
		console.log('Downloading monster image from', imageUrl);
		const blob = await response.blob();

		await mkdir(path.dirname(destination), { recursive: true });
		await writeFile(destination, Buffer.from(await blob.arrayBuffer()));

		return true;
	} else {
		console.log('No image found at', imageUrl);
		return false;
	}
}
