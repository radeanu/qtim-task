export default defineNuxtRouteMiddleware((to, from) => {
	if (to.fullPath !== from.fullPath && import.meta.client) {
		document.body.scrollTo(0, 0);
	}
});
