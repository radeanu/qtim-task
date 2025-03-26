import * as apiService from '@/common/apiService';

export async function useArticle() {
	const route = useRoute();

	const articleId = computed<string>(() => route.params.id.toString());

	const { data } = await useLazyAsyncData(
		'dbArticle',
		() => apiService.fetchArticle(articleId.value),
		{ watch: [articleId], server: true }
	);

	return { data };
}
