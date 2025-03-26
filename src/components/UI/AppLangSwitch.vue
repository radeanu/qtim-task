<template>
	<div class="switch">
		<span
			class="lang"
			:style="{
				backgroundImage: 'url(' + list[0].icon + ')'
			}"
		/>
	</div>
</template>

<script setup lang="ts">
const list = [{ name: 'uk', icon: '/images/uk.svg' }];
</script>

<style lang="scss" scoped>
.switch {
	width: 52px;
	height: 52px;
	border-radius: 100%;
	border: 2px solid var(--color-grey-3);
	display: flex;
	align-items: center;
	justify-content: center;
}

.lang {
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: 100% 100%;
	-o-background-size: 100% 100%;
	-webkit-background-size: 100% 100%;
	background-size: cover;
}
</style>
