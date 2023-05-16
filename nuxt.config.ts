// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@vite-pwa/nuxt'],
  css: ['@/assets/css/global.css'],
  ssr: false,
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  app: {
    head: {
      title: 'Pokemon Index',
      link: [{ rel: 'icon', href: '/favicon-96x96.png' }]
    }
  }
});
