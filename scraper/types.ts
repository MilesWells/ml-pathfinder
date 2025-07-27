export type Item = {
	id: string;
	imageLocation: string | null;
	libraryLink: string;
	name: string;
};

export type Monster = {
	drops: {
		equip: Item['id'][];
		use: Item['id'][];
		setup: Item['id'][];
		etc: Item['id'][];
	};
	id: string;
	imageLocation: string | null;
	libraryLink: string;
	libraryPage: number;
	name: string;
};
