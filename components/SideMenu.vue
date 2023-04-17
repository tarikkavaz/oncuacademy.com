<template>
  <div class="sticky top-0 mb-10 min md:pl-6">
    <div class="block">
      <button class="pl-6 btn md:hidden" :class="{ 'hidden': isLargeScreen }" @click="showContainer = !showContainer">
        {{ showContainer ? 'Close Menu' : 'Open Menu' }}
      </button>
      <div :class="{ 'hidden': !showContainer }" class="pb-4 md:block">
        <img class="h-40" src="/images/logo.png" alt="Öncü Academy">
        <div class="p-2 pb-0">
          <OtherLang />
        </div>
        <div v-for="item in items" :key="item.name" class="mx-2 pt-0.5 sidemenu shadow-xl bg-white">
          <template v-if="item.subItems">
            <a class="flex items-center justify-between px-4 py-2 text-gray-800 cursor-pointer bg-slate-100" @click.prevent="toggle(item)">
              <span>{{ $t(item.name) }}</span>
              <i v-if="item.open" class="text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 8a1 1 0 0 1 .707-.293l5.586-5.586L16 8a1 1 0 0 1-1.414 1.414l-4.586-4.586-4.586 4.586A1 1 0 0 1 4 8z" clip-rule="evenodd" />
                </svg>
              </i>
              <i v-else class="text-gray-800 transform rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 8a1 1 0 0 1 .707-.293l5.586-5.586L16 8a1 1 0 0 1-1.414 1.414l-4.586-4.586-4.586 4.586A1 1 0 0 1 4 8z" clip-rule="evenodd" />
                </svg>
              </i>
            </a>
            <transition name="slide">
              <div v-if="item.open" class="py-2 bg-slate-100 slide ">
                <div v-for="subItem in item.subItems" :key="subItem.name" class="mb-0.5 mx-2 last:mb-0 subsidemenu">
                  <template v-if="subItem.link">
                    <nuxt-link :to="localePath(subItem.link)" class="block px-4 py-2 text-gray-800 bg-gray-200">
                      {{ $t(subItem.name) }}
                    </nuxt-link>
                  </template>
                  <template v-else>
                    {{ $t(subItemname) }}
                  </template>
                </div>
              </div>
            </transition>
          </template>
          <template v-else>
            <template v-if="item.link">
              <nuxt-link :to="localePath(item.link)" class="block px-4 py-2 text-gray-800 bg-slate-100" @click.native="closeOpenSubmenu">
                {{ $t(item.name) }}
              </nuxt-link>
            </template>
            <template v-else>
              {{ $t(item.name) }}
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OtherLang from './OtherLang.vue'
export default {
  components: {
    OtherLang
  },
  data () {
    return {
      items: [{
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: 'about'
      },
      {
        name: 'services',
        subItems: [{
          name: 'pagea',
          link: 'page_a'
        },
        {
          name: 'pageb',
          link: 'page_b'
        },
        {
          name: 'pagec',
          link: 'page_c'
        }
        ],
        open: false
      },
      {
        name: 'another',
        subItems: [{
          name: 'paged',
          link: 'page_d'
        },
        {
          name: 'pagee',
          link: 'page_e'
        }
        ],
        open: false
      },
      {
        name: 'contact',
        link: 'contact'
      }
      ],
      showContainer: false,
      isLargeScreen: false
    }
  },
  watch: {
    $route () {
      this.updateOpenSubmenu()
    }
  },
  mounted () {
    this.isLargeScreen = window.innerWidth >= 640
    const itemsFromStorage = localStorage.getItem('items')
    if (itemsFromStorage) {
      this.items = JSON.parse(itemsFromStorage)
    }
    this.updateOpenSubmenu()
  },
  methods: {
    toggle (item) {
      if (item.open) {
        item.open = false
      } else {
        this.items.forEach((i) => {
          i.open = false
        })
        item.open = true
      }
      localStorage.setItem('items', JSON.stringify(this.items))
    },
    closeOpenSubmenu () {
      this.items.forEach((item) => {
        if (item.subItems) {
          item.open = false
        }
      })
      this.showContainer = false
    },
    updateOpenSubmenu () {
      const currentPath = this.$route.path
      this.items.forEach((item) => {
        if (item.subItems) {
          item.open = item.subItems.some(subItem => this.localePath(subItem.link) === currentPath)
        }
      })
    }
  }
}
</script>
<style scoped>
.sidemenu:last-child a, .subsidemenu:last-child a {
  @apply rounded-b-xl;
}
.subsidemenu:first-child a {
  @apply rounded-t-xl;
}
</style>
