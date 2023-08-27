// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/main.scss'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-lucide-icons', '@pinia/nuxt'],
})