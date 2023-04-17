<template>
  <div class="mt-8">
    <h3>
      {{ $t('news') }}
    </h3>
    <div v-for="item in data.results" :key="item.title" class="p-4 mb-4 rounded-md bg-gradient-to-b from-oncured-100 to-oncured-50/50">
      <a class="grid grid-cols-4 gap-4" :href="item.url" target="_blank">
        <div v-if="item.image" class="col-span-1">
          <img :src="item.image" :alt="item.title" class="w-auto h-auto rounded-md">
        </div>
        <div :class="(item.image)?'col-span-3':'col-span-4'">
          <div class="text-xl font-bold">{{ item.title }}</div>
          <div class="text-sm">{{ item.start_date.replace(/\//g, '.') }} - {{ item.start_time }}</div>
          <div>{{ item.short_16words }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'FechedNews',
  async asyncData ({
    store
  }) {
    const data = await store.state.data
    return {
      data
    }
  },
  computed: {
    ...mapState(['data'])
  }
}

</script>
