<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-strong-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p>Are you eager to expand your horizons in the realms of economics, finance, and social theory? Look no further than Öncü Academy's Open Courses. Our commitment to accessible education has led us to create a selection of courses that cater to individuals from all walks of life. Whether you're a student, a professional, or simply someone with a passion for learning, these courses are designed to enrich your understanding and stimulate your intellectual curiosity.</p>
                <p><strong>How to Join</strong></p>
                <p>Participating in our open courses is easy. Simply fill out the form below to express your interest and stay updated on upcoming courses, schedules, and enrollment details</p>
              </div>
            </div>
          </div>
          <div class="p-12 -mt-4 col-strong-1 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-strong-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj7.png" alt="">
          </div>
        </div>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScQeMaCuaOMBPinzX8s7_HO0iZPYl1gs4Cs7Let3dsYAABohA/viewform?embedded=true"
        height="2300"
        width="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading…</iframe>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-strong-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p>Ekonomi, finans ve sosyal teori alanlarında bilgi edinmeyi, mevcut bilginizi geliştirmeyi mi düşünüyorsunuz? Öncü Akademi'nin Açık Çevrimiçi Dersleri, tam da sizin için olabilir. Eğitimin ücretsiz olmasına olan inancımızla, farklı yaşam alanlarından gelen bireylere hitap eden bir dizi ders oluşturduk. İster bir öğrenci, isterse de bir profesyonel veya sadece öğrenmeye tutkulu biri olun, bu dersler, yaşadığımız dünyaya farklı açılardan da bakılabileceğine dair merakınızı uyandırmayı amaçlamaktadır.</p>
                <p><strong>Katılım için:</strong></p>
                <p>Ücretsiz açık derslerimize katılmak çok kolay. Başvuru formumuzu doldurarak, yaklaşan dersler, programlar ve kayıt detayları hakkında güncel bilgilere ulaşabilir ve ilginizi çeken derslere katılabilirsiniz.</p>
              </div>
            </div>
          </div>
          <div class="p-12 -mt-4 col-strong-1 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-strong-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj7.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScQeMaCuaOMBPinzX8s7_HO0iZPYl1gs4Cs7Let3dsYAABohA/viewform?embedded=true"
      height="2300"
      width="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading…</iframe>
  </div>
</template>

<script>
export default {
  name: 'OpenCourses',
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
          ? 'Open Courses'
          : 'Açık Dersler'
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
