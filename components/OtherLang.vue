<template>
  <div>
    <nuxt-link v-for="(locale, label) in inactiveLocales" :key="locale" :to="switchLocalePath(`${label}`)" class="block px-4 py-2 text-white bg-gray-500 rounded-t-xl">
      <svg
        class="inline text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />
        <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" />
      </svg>
      {{ locale }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'OtherLang',
  data () {
    return {
      locales: {
        en: 'English',
        tr: 'Türkçe'
      }
    }
  },
  computed: {
    activeLocale () {
      return this.$i18n.locale
    },
    inactiveLocales () {
      return Object.entries(this.locales)
        .filter(([locale, _label]) => locale !== this.activeLocale)
        .reduce((obj, [locale, label]) => {
          obj[locale] = label
          return obj
        }, {})
    }
  },
  methods: {
    changeLanguage (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
