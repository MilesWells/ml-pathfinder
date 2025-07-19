'use client';

import { Center, NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{
		href: '/',
		label: 'Pathfinder',
	},
	{
		href: '/damage-calculator',
		label: 'Damage Calculator',
	},
];

export function Navigation() {
	const pathname = usePathname();

	return (
		<Center mb={40} mt={20}>
			{navItems.map(navItem => (
				<NavLink
					active={pathname === navItem.href}
					color="meso-yellow.6"
					component={Link}
					key={navItem.label}
					maw={200}
					ta="center"
					{...navItem}
				/>
			))}
		</Center>
	);
}
