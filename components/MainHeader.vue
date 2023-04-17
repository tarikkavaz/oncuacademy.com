<template>
  <div class="relative min-h-screen overflow-hidden">
    <div id="section-hero" class="relative bg-white">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-8 lg:pb-56 xl:col-span-6">
          <div class="max-w-2xl mx-auto lg:mx-0">
            <img class="h-80" src="/images/logo.png" alt="Öncü Academy">
            <div class="hidden sm:mt-32 sm:flex lg:mt-16" />
            <h1 class="mt-24 text-4xl font-black tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {{ headertitle || 'Hello' }}
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              {{ headerparagraph || 'Welcome' }}
            </h2>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" :src="headerimage || '/images/hero.png'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    headertitle: {
      type: String,
      default: ''
    },
    headerparagraph: {
      type: String,
      default: ''
    },
    headerimage: {
      type: String,
      default: ''
    }
  }
}

</script>
