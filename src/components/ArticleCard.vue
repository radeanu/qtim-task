<template>
	<div class="card">
		<NuxtImg
			class="image"
			:src="article.image"
			:alt="article.title"
			loading="lazy"
			width="280"
			height="280"
			placeholder="/images/default.svg"
		/>

		<p class="description">{{ article.preview }} {{ article.preview }}</p>

		<RouterLink class="read-more" :to="'/article/' + article.id">
			Read more
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
import type { Article } from '@/common/types';

defineProps<{ article: Article }>();
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: baseline;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-20px);

		.read-more {
			opacity: 1;
		}
	}
}

.image {
	max-height: 280px;
	min-height: 280px;
	object-fit: cover;
}

.description {
	margin-top: 24px;
	padding-right: 16px;
	line-height: 120%;
	overflow: hidden;
	text-overflow: ellipsis;
	line-clamp: 3;
	-webkit-line-clamp: 3;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}

.read-more {
	opacity: 0;
	padding-top: 12px;
	width: fit-content;
	margin-top: auto;
	color: var(--color-violet-2);
}
</style>
