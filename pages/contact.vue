<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio maiores, porro aut commodi quas accusantium ab voluptatum vel dicta, vitae voluptatem ullam. Totam reprehenderit similique quo ullam labore iste!</p>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <h2>İletişim</h2>
      <p>Sandalye ışık dağılımı patlıcan ona doğru salladı bilgisayarı layıkıyla un değirmeni göze çarpan mutlu oldular yazın dergi değerli olduğu için patlıcan. Sıla gülüyorum teldeki ona doğru batarya kutusu ona doğru kapının kulu dışarı çıktılar sarmal açılmadan dolayı batarya kutusu çünkü ona doğru göze çarpan gitti.</p>
    </div>
    <div>
      <button class="px-6 py-3 mt-8 bg-oncured-300 rounded-md shadow-lg cursor-pointer" @click="showModal = true">
        {{ $t('openmodal') }}
      </button>
      <GlobalModal
        :show="showModal"
        :title="modalTitle"
        :message="modalMessage"
        @close="showModal = false"
      />
    </div>
  </div>
</template>

<script>
import GlobalModal from '@/components/GlobalModal.vue'
export default {
  name: 'ContactPage',
  components: {
    GlobalModal
  },
  data () {
    return {
      showModal: false,
      headTitle: this.$t('contact') + ' | ' + this.$t('title'),
      headerTitle: '',
      headerParagraph: '',
      headerImage: ''
    }
  },
  computed: {
    modalTitle () {
      return this.$i18n.locale === 'en'
        ? '<p>Modal Title</p>'
        : '<p>Modal Başlık</p>'
    },
    modalMessage () {
      return this.$i18n.locale === 'en'
        ? `
          <p>This is the message content displayed in the modal.</p>
          <p>You can add any <span class='text-xl font-extrabold'>HTML</span> content here, such as links, images, etc.</p>
        `
        : `
          <p>Modalda görüntülenen mesaj içeriği burada yer alır.</p>
          <p>Buraya link, resim vb. gibi her türlü <span class='text-xl font-extrabold'>HTML</span> içerik ekleyebilirsiniz.</p>
        `
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
          ? 'Contact us'
          : 'İletişime geçin'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? 'Please feel free to reach out if you have any questions.'
          : 'Herhangi bir sorunuz varsa, lütfen çekinmeden iletişime geçin.'
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/e.png'
          : '/images/f.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>
