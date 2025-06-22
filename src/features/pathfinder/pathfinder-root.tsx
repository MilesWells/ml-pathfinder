'use client';

import { Button, Select } from '@mantine/core';
import { shortestPath } from 'graph-data-structure';
import { useState } from 'react';
import { REGIONS, type Region } from '@/features/regions';
import graph from '../graph';

export function PathfinderRoot() {
	const [from, setFrom] = useState<Region | null>(null);
	const [to, setTo] = useState<Region | null>(null);

	return (
		<div>
			<Select
				data={REGIONS}
				label="From"
				onChange={from => setFrom(from as Region)}
				placeholder="Where you at?"
				value={from}
			/>
			<Select
				data={REGIONS}
				label="To"
				onChange={to => setTo(to as Region)}
				placeholder="Where you wanna go?"
				value={to}
			/>
			<Button
				disabled={!from || !to}
				onClick={() => {
					if (!from || !to) return;

					const path = shortestPath(graph, from, to);
					console.log(path);
				}}
			>
				Path Me!
			</Button>
		</div>
	);
}
