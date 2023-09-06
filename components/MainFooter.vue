<template>
  <footer class="relative bottom-0 w-full py-4 lg:absolute lg:h-footer text-themelight">
    <div id="cta" class="relative bg-oncured-900">
      <div class="relative overflow-hidden bg-oncured-600 h-80 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img class="object-cover w-full h-full" src="/images/mj6.png" alt="">
      </div>
      <div class="relative py-24 mx-auto max-w-7xl sm:py-32 lg:py-40 lg:px-8">
        <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 class="text-base font-semibold leading-7 text-oncured-400">
            {{ $t('getinformed') }}
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ $t('heretohelp') }}
          </p>
          <div class="inline-block mt-8">
            <a href="mailto:info@oncuacademy.com" class="inline-flex rounded-md bg-white/20 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">info@oncuacademy.com</a>
          </div>
          <div class="grid grid-flow-col gap-4 mt-8">
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="h-6 text-white" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="h-6 text-white" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="h-6 text-white" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="h-6 text-white" /></a>
          </div>
          <div class="block mt-8">
            <p class="text-sm font-semibold text-white">
              &copy; {{ currentYear }} Öncü Academy, {{ $t('reserved') }}.
            </p>
          </div>
          <div class="block mt-8">
            <p class="text-sm font-semibold text-white opacity-30">
              Web development: <a href="https://tarikkavaz.com" target="_blank">tarikkavaz.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
