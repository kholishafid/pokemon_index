// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthq/ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@vite-pwa/nuxt'],
  css: ['@/assets/css/global.css'],
  ssr: false,
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  app: {
    head: {
      title: 'Pokemon Index',
      link: [{ rel: 'icon', href: '/pokeball.svg' }]
    }
  },
});
