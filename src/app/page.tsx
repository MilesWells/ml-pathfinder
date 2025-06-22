import { Code } from '@mantine/core';
import { edges } from '@/features/edges';

export default function Home() {
	return (
		<div>
			<Code block>{JSON.stringify(edges, null, 2)}</Code>
		</div>
	);
}
