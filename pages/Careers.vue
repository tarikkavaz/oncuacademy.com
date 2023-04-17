<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p>
                  At Oncu Academy, we're passionate about lifelong learning and empowering individuals with the knowledge and skills to succeed in their careers. We are currently seeking experienced professionals with a passion for teaching and curriculum development to join our team as learning facilitators.
                </p>
                <p>
                  As a learning facilitator, you will have the opportunity to create and deliver engaging and informative content for our MBA and leadership certificate programs. We are looking for individuals with a strong background in business, leadership, management, or related fields.
                </p>
                <p>
                  If you're interested in working with us, please send your CV and a short cover letter to <a href="mailto:info@oncuacademy.com" class="text-oncured-900">info@oncuacademy.com</a>. In your cover letter, please tell us which subjects you're most interested in teaching and how your experience and skills make you a great fit for our team.
                </p>
                <p>
                  We look forward to hearing from you and exploring the possibility of working together to create world-class educational programs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj4.png" alt="">
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
                <p>
                  Öncü Akademi olarak, insanların kariyerlerinde başarılı olmaları için gerekli bilgi ve becerilerle donatmak amacıyla çalışıyoruz. MBA ve liderlik sertifika programlarımız kapsamında deneyimli eğitmenler arıyoruz.
                </p>
                <p>
                  Eğitmenlerimiz, katılımcılarımıza ilgi çekici ve bilgilendirici dersler sunacak ve ders programlarını geliştirme konusunda da aktif rol oynayacaklar. İşletme, liderlik, yönetim veya ilgili alanlarda tecrübeli eğitmenler arıyoruz.
                </p>
                <p>
                  Bizimle çalışmak isteyen eğitmenlerimiz, CV'lerini ve kısa bir ön yazıyı <a href="mailto:info@oncuacademy.com" class="text-oncured-900">info@oncuacademy.com</a> adresine gönderebilirler. Ön yazılarında, hangi konularda ders sunmak istediklerini ve kariyer hedeflerine nasıl katkı sağlayabileceklerini belirtmeleri yeterli.
                </p>
                <p>
                  Dünya standartlarında eğitim programları oluşturmak için birlikte çalışma fırsatını keşfetmek ve sizi tanımak için sabırsızlanıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('careers') + ' | ' + this.$t('title'),
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
          ? 'Careers'
          : 'Kariyer'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? 'Work with us.'
          : 'Bizlerle çalışmak ister misiniz?'
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/mj4.png'
          : '/images/mj4.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>
