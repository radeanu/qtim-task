<template>
	<NuxtLoadingIndicator :height="0" :throttle="0" style="transform: unset">
		<UIAppRouteLoader />
	</NuxtLoadingIndicator>

	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>

	<SvgSprites />
</template>

<style scoped lang="scss"></style>
