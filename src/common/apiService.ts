import type { Article } from '@/common/types';

export function fetchArticles(): Promise<Article[]> {
	const config = useRuntimeConfig();
	const baseUrl = config.public.API_BASE_URL;

	return $fetch(baseUrl + '/posts/');
}

export function fetchArticle(id: string): Promise<Article> {
	const config = useRuntimeConfig();
	const baseUrl = config.public.API_BASE_URL;

	return $fetch(baseUrl + '/posts/' + id);
}
