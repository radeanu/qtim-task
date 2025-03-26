// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: 'src/',
	ssr: true,
	nitro: {
		preset: 'node-server',
		compressPublicAssets: true,
		minify: true
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['./src/assets/styles/style.scss'],
	modules: ['@nuxt/eslint', '@nuxt/image'],
	app: {
		baseURL: '/',
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	},
	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL
		}
	}
});
