import * as apiService from '@/common/apiService';
import { usePagination } from '@/composables/usePagination';
import type { Article, ArticlesQuery, Pagination } from '@/common/types';

export async function useArticlesList() {
	const route = useRoute();
	const router = useRouter();
	const loading = useLoadingIndicator();

	const pagination = usePagination(8);

	const articlesQuery = computed<ArticlesQuery>(() => {
		const page = route.query.page
			? parseInt(route.query.page as string)
			: 1;

		return { page, limit: 8 };
	});

	const { data } = await useLazyAsyncData('dbArticles', handleFetchArticles, {
		watch: [articlesQuery],
		server: true
	});

	async function handleNewPage(page: number) {
		await router.push({
			path: route.path,
			query: { ...route.query, page }
		});
	}

	async function handleFetchArticles(): Promise<{
		docs: Article[];
		pagination: Pagination | null;
	}> {
		try {
			loading.start();
			const res = await apiService.fetchArticles();

			return pagination.paginateDocs(res, articlesQuery.value.page);
		} catch (error) {
			console.log(error);
			return { docs: [], pagination: null };
		} finally {
			loading.clear();
		}
	}

	return {
		data,
		handleNewPage
	};
}
