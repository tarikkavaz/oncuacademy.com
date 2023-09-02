<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p>This webinar series provides an opportunity for individuals to engage with the complexities of international political economy. This initiative reflects our commitment to promoting knowledge and awareness, as participation is free of charge.</p>
                <p>Distinguished scholars, each specializing in different aspects of global political economy, will serve as speakers. These scholars adopt a critical stance towards capitalism -old and new-, offering diverse perspectives. With their specific areas of expertise, they aim to address pressing contemporary issues. The event welcomes participants from various backgrounds, transcending political and economic boundaries, to take part in insightful discussions. In today's peculiar global landscape, Öncü Academy International Political Economy Webinars promises to enrich understanding and facilitate informed dialogue.</p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj2.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p>Bu seminer serisi, uluslararası siyasi iktisadın penceresinden, güncel küresel sorunlara eleştirel bir perspektiften bakabilme fırsatı sunmaktadır. Bu girişim, akılcı, üretken ve yaratıcı bir kamusal alan oluşturabilmek için, bilgi ve farkındalığı artırma hedefimizi yansıtmaktadır. Katılım tamamen ücretsizdir.</p>
                <p>Bu seminer serisinde, küresel siyasi iktisadın farklı konu ve ilgilerine göre uzmanlaşmış uluslararası saygın bilim insanları konuşmacı olarak yer alacaktır. Konuşmacıların ortak noktası, kapitalizme eleştirel bir gözle bakmalarıdır.</p>
                <p>Öncü Akademi Uluslararası Siyasal İktisat Web Seminerleri, Türkiye ve diğer ülkelerden katılımcıların bir araya gelmesiyle genişleyen ve gelenekselleşen bir öğrenme, bilgi paylaşımı ve diyalog platformu oluşturmayı en üst amacı olarak benisemektedir.</p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurlearningfacilitatorsPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('ourlearningfacilitators') + ' | ' + this.$t('title'),
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
          ? 'International Political Economy Webinars'
          : 'Uluslararası Siyasi İktisat Web Seminerleri'
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
