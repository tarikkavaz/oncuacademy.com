export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  experimental: {
    payloadExtraction: false
  },
  generate: {
    dir: 'www'
  },
  app: {
    head: {
      title: 'Öncü Academy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://oncuacademy.com/images/share.png' }
      ]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
