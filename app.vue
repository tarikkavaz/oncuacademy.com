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
    title: 'Öncü Academy',
    meta: [
      { name: 'description', content: 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge.' }
    ]
  })
</script>

<style>

</style>