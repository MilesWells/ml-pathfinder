export type Item = {
	id: string;
	imageLocation: string | null;
	libraryLink: string;
	name: string;
};

export type Monster = {
	drops: {
		equip: Item[];
		use: Item[];
		setup: Item[];
		etc: Item[];
	};
	id: string;
	name: string;
};
