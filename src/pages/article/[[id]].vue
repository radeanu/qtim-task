<template>
	<div class="page">
		<h1>{{ article?.title }}</h1>

		<NuxtImg
			class="image"
			:src="article?.image"
			:alt="article?.title"
			loading="lazy"
			width="1216"
			height="700"
			placeholder="/images/default.svg"
		/>

		<article class="about">
			<h2 class="about--title">About</h2>
			<p class="about--description">{{ article?.description }}</p>
		</article>
	</div>
</template>

<script setup lang="ts">
import { useArticle } from '@/composables/useArticle';

const { data: article } = await useArticle();
</script>

<style lang="scss" scoped>
.page {
	padding-bottom: 80px;
}

h1 {
	font-size: 84px;
	line-height: 100%;
}

.image {
	object-fit: cover;
	margin-top: 73px;
}

.about {
	margin-top: 80px;
	font-size: 36px;
	line-height: 124%;
	max-width: 695px;

	&--title {
		font-size: 16px;
		line-height: 100%;
	}

	&--description {
		margin-top: 32px;
	}
}
</style>
