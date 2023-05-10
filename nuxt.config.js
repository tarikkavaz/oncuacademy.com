export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/fetch.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Google Fonts
    '@nuxtjs/google-fonts',
    // Google Analytics
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  i18n: {
    strategy: 'prefix',
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          // Global
          title: 'Öncü Academy',
          welcome: 'Welcome',
          menu: 'Menu',
          close: 'Close',
          open: 'Open',
          openmodal: 'Open Modal',
          next: 'Next',
          previous: 'Previous',
          getinformed: 'Get informed',
          heretohelp: 'We’re here to help',
          reserved: 'All rights reserved',

          // Pages
          whoweare: 'Who We Are',
          chairsmessage: 'In the Wake of New Beginnings',
          // facilitators: 'Our Learning Facilitators',
          programs: 'Certificate Programs, Modules, and Courses',
          careers: 'Careers',
          home: 'Home',
          news: 'News',
          contact: 'Contact',
          about: 'About',
          another: 'Another One',
          services: 'Services',
          form: 'Appclication Form',

          // Description
          desc_whoweare: 'Academy Without Borders',
          desc_chairsmessage: 'A message from the founder',
          desc_facilitators: 'Meet the Facilitators',
          desc_programs: ' ',
          desc_careers: 'Work with us',
          desc_contact: 'Get in touch',
          desc_home: 'Welcome Page',
          desc_about: 'About Page',
          desc_test: 'Test Page',
          desc_sub: 'Sub Menu'
        },
        tr: {
          // Global
          title: 'Öncü Academy',
          welcome: 'Merhaba',
          menu: 'Menü',
          close: 'Kapat',
          open: 'Aç',
          openmodal: 'Pencereyi Aç',
          next: 'Sonraki',
          previous: 'Önceki',
          getinformed: 'Bilgi Almak için bize ulaşın',
          heretohelp: 'Yardım etmek için buradayız',
          reserved: 'Tüm Hakları Saklıdır',

          // Pages
          whoweare: 'Biz Kimiz',
          chairsmessage: 'Yeni Başlangıçların Kapısı',
          // facilitators: 'Öncü Academy Öğrenme kılavuzları',
          programs: 'Sertifikalar, Modüller ve Dersler',
          careers: 'Kariyer',
          home: 'Anasayfa',
          news: 'Haber',
          contact: 'İletişim',
          about: 'Hakkında',
          another: 'Başka Bir',
          services: 'Servisler',
          form: 'Başvuru Formu',

          // Description
          desc_whoweare: 'Sınırları Olmayan Akademi',
          desc_chairsmessage: 'Kurucunun mesajı',
          desc_facilitators: 'Ekibimizle tanışın',
          desc_programs: ' ',
          desc_careers: 'Bizlerle çalışmak ister misiniz?',
          desc_contact: 'İletişme geçin',
          desc_home: 'Hoşgeldiniz Sayfası',
          desc_about: 'Hakkımızda Sayfası',
          desc_test: 'Test Metin',
          desc_sub: 'Alt Menu'
        }
      }
    },
    parsePages: false,
    pages: {
      whoweare: {
        en: '/who-we-are',
        tr: '/biz-kimiz'
      },
      chairsmessage: {
        en: '/in-the-wake-of-new-beginnings',
        tr: '/yeni-baslangiclarin-kapisi'
      },
      // facilitators: {
      //   en: '/our-learning-facilitators',
      //   tr: '/oncu-academy-ekibi'
      // },
      programs: {
        en: '/certificate-programs-and-courses',
        tr: '/sertifikalar-moduller-ve-dersler'
      },
      careers: {
        en: '/careers',
        tr: '/kariyer'
      },
      form: {
        en: '/form',
        tr: '/form'
      },
      contact: {
        en: '#cta',
        tr: '#cta'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  googleFonts: {
    families: {
      Montserrat: true,
      'DM+Serif+Display': true
    }
  },

  // TODO: Replace with vue-gtag
  googleAnalytics: {
    id: 'G-F0BJS05ZWT'
  }

}
