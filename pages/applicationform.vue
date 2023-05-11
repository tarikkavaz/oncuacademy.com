<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="">
          <div class="">
            <div class="">
              <div class="">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScQeMaCuaOMBPinzX8s7_HO0iZPYl1gs4Cs7Let3dsYAABohA/viewform?embedded=true"
                  height="2300"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >Loading…</iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="">
          <div class="">
            <div class="">
              <div class="">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScIrg3juZjfSvOgY-TNKDTaqaG89_XEzcdzzdoGYzkGvMArcg/viewform?embedded=true"
                  height="2300"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >Yükleniyor…</iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationFormPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('applicationform') + ' | ' + this.$t('title'),
      headerTitle: '',
      headerParagraph: '',
      headerImage: ''
    }
  },
  head () {
    return {
      title: this.headTitle
    }
  },
  watch: {
    '$i18n.locale' (newVal, oldVal) {
      this.updateHeader()
    }
  },
  mounted () {
    this.updateHeader()
  },
  methods: {
    updateHeader () {
      const headerTitle =
        this.$i18n.locale === 'en'
          ? 'Appclication Form'
          : 'Başvuru Formu'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? ' '
          : ' '
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/mj2.png'
          : '/images/mj2.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>

<style>
iframe {
  display: block;       /* iframes are inline by default */
  border: none;         /* Reset default border */
  width: 100%;
}
</style>
