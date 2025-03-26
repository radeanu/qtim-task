<template>
	<svg
		aria-hidden="true"
		focusable="false"
		class="icon"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<use :xlink:href="'#icon-' + name" />
	</svg>
</template>

<script setup lang="ts">
export type AppIcon = {
	name: string;
};

defineProps<AppIcon>();
</script>

<style scoped>
.icon {
	width: var(--icon-width, 20px);
	height: var(--icon-height, 20px);
	overflow: hidden;
}
</style>
