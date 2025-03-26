<template>
	<div class="page">
		<h1>Articles</h1>

		<div class="articles-list" role="list">
			<ArticleCard
				v-for="item in data?.docs"
				:key="item.id"
				:article="item"
				role="listitem"
			/>
		</div>

		<UIAppPagination
			v-if="data?.pagination"
			class="pagination"
			:pagination="data?.pagination"
			@page-click="handleNewPage"
		/>
	</div>
</template>

<script setup lang="ts">
import { useArticlesList } from '@/composables/useArticlesList';

const { data, handleNewPage } = await useArticlesList();
</script>

<style lang="scss" scoped>
h1 {
	font-size: 84px;
	line-height: 100%;
}

.articles-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, 280px);
	grid-template-rows: auto;
	column-gap: 32px;
	row-gap: 40px;
	margin-top: 59px;
}

.pagination {
	margin-top: 50px;
}
</style>
