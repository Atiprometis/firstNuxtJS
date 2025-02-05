// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {

    host: '127.0.0.1',
    port: 3001
  },
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', defer: true }
      ]
    }
  },
  
})
