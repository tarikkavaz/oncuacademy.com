<template>
  <div>
    <div
      class="relative flex w-full pb-4 mb-2 overflow-hidden rounded-md shadow-lg bg-gradient-to-b from-oncured-800 to-oncured-300 lg:h-44"
      @mouseover="stopCarousel"
      @mouseleave="startCarousel"
    >
      <div
        v-for="(item, index) in data.results"
        :key="item.title"
        :class="[currentIndex === index ? 'opacity-100 transition-opacity duration-1000' : 'absolute top-0 left-0 w-full opacity-0 transition-opacity duration-1000 ease-in-out']"
        class="mb-4"
      >
        <a class="absolute grid w-full h-full grid-cols-4 gap-4 p-4" :href="item.url" target="_blank">
          <div v-if="item.image" class="col-span-4 lg:col-span-1">
            <img v-if="item.image" :src="item.image" :alt="item.title" class="w-auto h-auto rounded-md">
          </div>
          <div class="col-span-4 text-oncured-100" :class="(item.image)?'lg:col-span-3':'lg:col-span-4'">
            <div class="text-xl font-bold">{{ item.title }}</div>
            <div class="text-sm">{{ item.start_date.replace(/\//g, '.') }} - {{ item.start_time }}</div>
            <div>{{ item.short_16words }}</div>
          </div>
        </a>
      </div>
      <div class="absolute bottom-0 left-0 flex justify-center w-full p-2 mb-2">
        <div
          v-for="(item, index) in data.results"
          :key="item.title"
          class="w-3 h-3 mx-2 rounded-full cursor-pointer"
          :class="[currentIndex === index ? 'bg-oncured-800' : 'bg-oncured-200']"
          @click="currentIndex = index"
        >
        &nbsp;
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-4">
      <button class="px-6 py-3 rounded-md shadow-lg cursor-pointer text-oncured-800 bg-oncured-200 hover:text-oncured-200 hover:bg-oncured-800 w-28" @click="prevSlide" @mouseover.stop="stopCarousel" @mouseleave="startCarousel">
        {{ $t('previous') }}
      </button>
      <button class="px-6 py-3 rounded-md shadow-lg cursor-pointer text-oncured-800 bg-oncured-300 hover:text-oncured-200 hover:bg-oncured-800 w-28" @click="nextSlide" @mouseover.stop="stopCarousel" @mouseleave="startCarousel">
        {{ $t('next') }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NewsCarousel',
  async asyncData ({ store }) {
    const data = await store.state.data
    return {
      data
    }
  },
  data () {
    return {
      currentIndex: 0,
      intervalId: null
    }
  },
  computed: {
    ...mapState(['data'])
  },
  mounted () {
    this.startCarousel()
  },
  beforeDestroy () {
    this.stopCarousel()
  },
  methods: {
    prevSlide () {
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + this.data.results.length - 1) % this.data.results.length
      }, 50)
    },
    nextSlide () {
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.data.results.length
      }, 50)
    },
    startCarousel () {
      this.intervalId = setInterval(this.nextSlide, 3000)
    },
    stopCarousel () {
      clearInterval(this.intervalId)
    }
  }
}
</script>
