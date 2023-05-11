<template>
  <div>
    <div class="fixed top-0 z-50 w-full mx-auto">
      <TopMenu />
    </div>
    <div class="flex flex-col h-full lg:min-h-screen font-default">
      <MainHeader :headertitle="headerTitle" :headerparagraph="headerParagraph" :headerimage="headerImage" />
      <div class="flex flex-1">
        <div class="container flex-1 mx-auto mb-16 max-w-7xl lg:grid lg:grid-cols-4">
          <div id="content" class="p-8 lg:col-span-4 mb-footer">
            <Nuxt />
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import TopMenu from '../components/TopMenu.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'IndexPage',
  components: { MainHeader, TopMenu, MainFooter },
  data () {
    return {
      headerTitle: '',
      headerParagraph: '',
      headerImage: ''
    }
  },
  watch: {
    '$i18n.locale' (newVal, oldVal) {
      this.$nuxt.$emit('updateHeader')
    }
  },
  created () {
    this.$nuxt.$on('updateHeader', (data) => {
      if (data) {
        this.headerTitle = data.headerTitle
        this.headerParagraph = data.headerParagraph
        this.headerImage = data.headerImage
      }
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('updateHeader')
  }
}
</script>

<style lang="scss">
body {
  @apply overscroll-none;
}
html {
  @apply relative min-h-screen;
}
h1 {
  @apply text-3xl font-extrabold tracking-tight text-oncured-800 sm:text-4xl lg:text-5xl mb-6;
}
h2 {
  @apply text-2xl font-extrabold tracking-tight text-oncured-800 sm:text-3xl lg:text-4xl mb-6;
}
h3 {
  @apply text-xl font-extrabold tracking-tight text-oncured-800 sm:text-2xl lg:text-3xl mb-6;
}
#content {
  h3 {
    @apply block mx-auto mt-8 text-lg font-semibold leading-8 tracking-tight text-center text-gray-900 w-60
  }
  h4 {
    @apply mt-16 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl;
  }
  p, li {
    @apply mt-6 text-base leading-7 text-gray-600;
  }
  li {
    @apply list-disc;
  }
  ul {
    @apply ml-6;
  }
  strong {
    @apply font-semibold text-lg text-black;
  }
}

.nuxt-link-exact-active {
  @apply bg-oncured-600 text-white font-bold;
}
.nuxt-link-exact-active .fai {
  @apply  opacity-100;
}
.nuxt-link-exact-active .idesc {
  @apply  opacity-100;
}
</style>
