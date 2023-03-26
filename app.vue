<template>
  <Head>
    <!-- Primary Meta Tags -->
    <Title>Öncü Academy</Title>
    <meta name="title" content="Öncü Academy">
    <meta name="description" content="We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://oncuacademy.com/">
    <meta property="og:title" content="Öncü Academy">
    <meta property="og:description" content="We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge">
    <meta property="og:image" content="https://oncuacademy.com/images/share.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://oncuacademy.com/">
    <meta property="twitter:title" content="Öncü Academy">
    <meta property="twitter:description" content="We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge">
    <meta property="twitter:image" content="https://oncuacademy.com/images/share.png">
  </Head>
  <div class="fixed top-0 z-50 w-full">
    <Menu />
  </div>
  <NuxtPage />
  <Footer />
</template>

<script setup>
  import Menu from '/components/Menu.vue'
</script>

<style>

</style>