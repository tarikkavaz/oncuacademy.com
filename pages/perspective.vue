<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-strong-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="p-12 -mt-4 col-strong-1 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-strong-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj7.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-strong-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="p-12 -mt-4 col-strong-1 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-strong-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj7.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramsPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('programs') + ' | ' + this.$t('title'),
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
          ? 'Perspective'
          : 'Bakış'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? ' '
          : ' '
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/mj7.png'
          : '/images/mj7.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>
