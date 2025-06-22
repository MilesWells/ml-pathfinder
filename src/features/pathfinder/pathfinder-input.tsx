'use client';

import { Button, Select } from '@mantine/core';
import { useState } from 'react';
import { REGIONS, type Region } from '@/features/regions';
import { usePathfinder } from './pathfinder-context';

export function PathfinderInput() {
	const [from, setFrom] = useState<Region | null>(null);
	const [to, setTo] = useState<Region | null>(null);
	const pathfinder = usePathfinder();

	return (
		<div>
			<Select
				data={REGIONS}
				label="From"
				onChange={from => setFrom(from as Region)}
				placeholder="Where you at?"
				searchable
				value={from}
			/>
			<Select
				data={REGIONS}
				label="To"
				onChange={to => setTo(to as Region)}
				placeholder="Where you wanna go?"
				searchable
				value={to}
			/>
			<Button
				disabled={!from || !to}
				onClick={() => {
					if (!from || !to) return;

					pathfinder.findPath(from, to);
				}}
			>
				Path Me!
			</Button>
		</div>
	);
}
