<template>
	<ul class="pagination">
		<li v-if="meta.btnLeft" class="btn btn-toggle">
			<button
				class="btn btn-toggle"
				@click="handlePageClick(pagination.currentPage - 1)"
			>
				<UIAppIcon name="arrow-right" />
			</button>
		</li>

		<li v-for="item in meta.leftGroup" :key="item">
			<button class="btn" @click="handlePageClick(item)">
				{{ item }}
			</button>
		</li>

		<li>
			<button class="btn btn-active">{{ pagination.currentPage }}</button>
		</li>

		<li v-for="item in meta.rightGroup" :key="item">
			<button class="btn" @click="handlePageClick(item)">
				{{ item }}
			</button>
		</li>

		<li v-if="meta.btnRight" class="btn btn-toggle">
			<button
				class="btn btn-toggle"
				@click="handlePageClick(pagination.currentPage + 1)"
			>
				<UIAppIcon name="arrow-right" />
			</button>
		</li>
	</ul>
</template>

<script setup lang="ts">
import type { Pagination } from '@/common/types';

const props = defineProps<{ pagination: Pagination }>();
const $emit = defineEmits<{
	(e: 'pageClick', page: number): void;
}>();

const meta = computed(() => {
	return computePagination(
		props.pagination.pagesCount,
		props.pagination.currentPage
	);
});

function computePagination(pagesCount: number, currPage: number) {
	const btnLeft = currPage > 3;
	const btnRight = pagesCount > currPage;

	const leftSlice = btnLeft ? -2 : 0;
	const leftGroup =
		btnLeft || currPage <= 5
			? Array(currPage)
					.fill(1)
					.map((_, i) => i + 1)
					.slice(leftSlice, -1)
			: [];

	const rightSlice = btnLeft ? currPage + 2 : 5;
	const rightGroup = Array(pagesCount)
		.fill(1)
		.map((_, i) => i + 1)
		.slice(currPage, rightSlice);

	return {
		btnLeft,
		btnRight,
		leftGroup,
		rightGroup
	};
}

function handlePageClick(nr: number) {
	if (nr === props.pagination.currentPage) return;

	$emit('pageClick', nr);
}
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	flex-wrap: nowrap;
	gap: 8px;
	align-items: center;
}

.btn {
	--btn-color: var(--color-black);
	--btn-bg-color: var(--color-grey-2);

	width: 44px;
	height: 44px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	font-size: 16px;
	letter-spacing: 0px;

	color: var(--btn-color);
	border: 1px solid var(--btn-bg-color);
	background-color: var(--btn-bg-color);

	&:hover {
		--btn-bg-color: var(--color-grey-3);
	}

	&:active {
		--btn-color: var(--color-white);
		--btn-bg-color: var(--color-black);
	}
}

.btn-toggle {
	--btn-bg-color: var(--color-white);
	border-color: var(--color-grey-3);
}

.btn-active {
	--btn-color: var(--color-white);
	--btn-bg-color: var(--color-black);

	&:hover {
		pointer-events: none;
		--btn-color: var(--color-white);
		--btn-bg-color: var(--color-black);
	}
}
</style>
