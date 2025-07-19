export const CLASSES = ['Warrior', 'Magician', 'Bowman', 'Thief', 'Pirate'] as const;
export type Class = (typeof CLASSES)[number];
