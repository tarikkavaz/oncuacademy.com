<template>
  <div class="flex flex-row w-full gap-4 p-4 pl-8 mx-auto mt-10 bg-oncured-200 rounded-md">
    <nuxt-link v-for="(locale, label) in locales" :key="locale" :to="switchLocalePath(`${label}`)" class="px-4 py-2 bg-oncured-400 rounded-md">
      {{ locale }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LangSwitch',
  data () {
    return {
      locales: {
        en: 'English',
        tr: 'Türkçe'
      }
    }
  },
  methods: {
    changeLanguage (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  @apply bg-oncured-600 text-white;
}
</style>
