import type { Pagination } from '@/common/types';

export function usePagination(limit = 8) {
	const meta = useState<Pagination>('paginationMeta', getDefault);

	function getDefault(): Pagination {
		return {
			limit: 8,
			nextPage: null,
			prevPage: null,
			currentPage: 1,
			pagesCount: 1
		};
	}

	function paginateDocs<T>(
		docs: T[],
		page = 1
	): { docs: T[]; pagination: Pagination } {
		const skip = page ? page - 1 : 0;
		const offset = skip * limit;

		const count = docs.length;
		const currentPage = Math.ceil((offset + 1) / limit);
		const pagesCount = limit > 0 ? Math.ceil(count / limit) || 1 : 0;

		const slicedDocs =
			limit < 0 ? docs : docs.slice(offset, offset + limit);

		const prevPage = currentPage > 1 ? currentPage - 1 : null;
		const nextPage = currentPage < pagesCount ? currentPage + 1 : null;

		return {
			docs: slicedDocs,
			pagination: {
				limit,
				nextPage,
				prevPage,
				currentPage,
				pagesCount
			}
		};
	}

	return { meta, getDefault, paginateDocs };
}
