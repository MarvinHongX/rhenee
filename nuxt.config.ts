// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'RHENEE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'A versatile digital solutions studio.' },
        { name: 'keywords', content: 'rhenee' },
        { name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },

        // ✅ Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'RHENEE' },
        { property: 'og:site_name', content: 'RHENEE' },
        { property: 'og:description', content: 'A versatile digital solutions studio.' },
        { property: 'og:image', content: 'https://rhenee.com/layout/images/logo.webp' },
        { property: 'og:url', content: 'https://rhenee.com' }
      ],
      link: [
        {
            id: 'theme-css',
            rel: 'stylesheet',
            type: 'text/css',
            href: '/themes/theme.css'
        }
      ]
    }
},
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxt/ui', '@nuxtjs/robots'],
  css: ['@/assets/styles.scss'],
  robots: {
    allow: '/',
    sitemap: 'https://rhenee.com/sitemap.xml'
  },
})