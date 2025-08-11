import { writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function downloadImage(imageUrl: string, appFilePath: string) {
	const response = await fetch(imageUrl);

	if (response.ok) {
		console.log('Downloading monster image from', imageUrl);
		const destination = path.join(__dirname, '../public', appFilePath);
		const blob = await response.blob();
		await writeFile(destination, Buffer.from(await blob.arrayBuffer()));
		return appFilePath;
	} else {
		console.log('No image found at', imageUrl);
		return null;
	}
}
