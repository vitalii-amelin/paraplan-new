// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  css: ['../app/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    notionApi: '',
    notionLeads: '',
    notionContacts: '',
    notionMarketing: ''
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@nuxt/content'],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'ru',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
      { code: 'ua', language: 'ua-UA', name: 'Українська' }
    ],
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  gtag: {
    id: 'G-H287WPEQ2C'
  },
  googleFonts: {
    families: {
      'Inter Tight': [400, 500],
      'IBM Plex Serif': {
        ital: [400]
      }
    }
  },
  hotjar: {
    hotjarId: 5071086,
    scriptVersion: 6,

    // optionally you can turn on debug mode for development
    // debug: true
  },
  image: {
    format: ['webp'],
    quality: 80,
  }
})