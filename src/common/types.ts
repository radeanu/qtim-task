export type Pagination = {
	currentPage: number;
	nextPage: number | null;
	prevPage: number | null;
	pagesCount: number;
	limit: number;
};

export type Article = {
	id: number;
	title: string;
	preview: string;
	image: string;
	createdAt: string;
	description: string;
};

export type MenuItem = {
	label: string;
	path: string;
};

export type ArticlesQuery = {
	page: number;
	limit: number;
};
