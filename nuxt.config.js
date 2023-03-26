// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  experimental: {
    payloadExtraction: false
  },
  generate: {
    dir: 'www'
  },
  head: {
    title: 'Öncü Academy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',name: 'title', content: 'Öncü Academy' },
      { hid: 'description',name: 'description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://oncuacademy.com/' },
      { property: 'og:title', content: 'Öncü Academy' },
      { property: 'og:description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'og:image', content: 'https://oncuacademy.com/images/share.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://oncuacademy.com/' },
      { property: 'twitter:title', content: 'Öncü Academy' },
      { property: 'twitter:description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'twitter:image', content: 'https://oncuacademy.com/images/share.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
