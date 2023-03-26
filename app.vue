<template>
  <div class="fixed top-0 z-50 w-full">
    <Menu />
  </div>
  <NuxtPage />
  <Footer />
</template>

<script setup>
  import Menu from '/components/Menu.vue'
  useHead({
  title: '',
    meta: [
      { property: 'title', content: 'Öncü Academy' },
      { property: 'description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://oncuacademy.com/' },
      { property: 'og:title', content: 'Öncü Academy' },
      { property: 'og:description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'og:image', content: 'https://oncuacademy.com/images/share.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://oncuacademy.com/' },
      { property: 'twitter:title', content: 'Öncü Academy' },
      { property: 'twitter:description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge' },
      { property: 'twitter:image', content: 'https://oncuacademy.com/images/share.png' }
    ]
  })

</script>

<style>

</style>