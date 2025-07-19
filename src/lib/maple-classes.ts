export const MAPLE_CLASSES = ['Warrior', 'Magician', 'Bowman', 'Thief', 'Pirate'] as const;
export type MapleClass = (typeof MAPLE_CLASSES)[number];
