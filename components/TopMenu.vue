<template>
  <div>
    <div class="sticky top-0 flex flex-col justify-center mb-10">
      <button class="z-50 w-32 mx-auto mt-5 " @click="showContainer = !showContainer">
        <span class="inline-flex items-center self-end px-6 py-3 text-lg font-semibold leading-6 rounded-md shadow-lg text-slate-100 bg-oncured-800 gap-x-1">
          <!-- {{ showContainer ? 'Close Menu' : 'Open Menu' }} -->
          {{ $t('menu') }}
        </span>
      </button>
      <div class="absolute inset-0 h-screen" :class="{ 'hidden': !showContainer }" @click="showContainer = false">
        <div class="mx-auto pt-20 lg:w-[32rem]" :class="{ 'hidden': !showContainer }">
          <div class="pb-4 md:block rounded-2xl">
            <div class="p-2 pb-0">
              <OtherLang />
            </div>
            <div v-for="item in items" :key="item.name" class="mx-2 shadow-2xl sidemenu">
              <template v-if="item.subItems">
                <a class="flex items-center justify-between px-8 py-4 text-gray-800 cursor-pointer bg-slate-100 hover:text-white hover:bg-slate-400" @click.prevent="toggle(item)">
                  <div class="flex">
                    <div class="self-center w-6 mr-3 lg:w-10">
                      <font-awesome-icon :icon="item.faicon" class="h-6 opacity-30" />
                    </div>
                    <div class="self-center w-fit lg:w-26">
                      <div>{{ $t(item.name) }}</div>
                      <div class="text-xs opacity-60 idesc">{{ $t(item.desc) }}</div>
                    </div>
                  </div>
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
                        <nuxt-link :to="localePath(subItem.link)" class="block px-8 py-4 text-gray-800 bg-gray-200">
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
                  <nuxt-link :to="localePath(item.link)" class="block px-8 py-4 text-gray-800 bg-slate-100 hover:text-white hover:bg-slate-400" @click.native="closeOpenSubmenu">
                    <div class="flex">
                      <div class="self-center w-6 mr-3 lg:w-10">
                        <font-awesome-icon :icon="item.faicon" class="h-6 opacity-30 fai" />
                      </div>
                      <div class="self-center w-fit lg:w-26">
                        <div>
                          {{ $t(item.name) }}
                        </div>
                        <div class="text-xs opacity-60 idesc">
                          {{ $t(item.desc) }}
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </template>
                <template v-else>
                  <div>
                    <span class="block">{{ $t(item.name) }}</span>
                    <span class="block text-xs opacity-30">{{ $t(item.desc) }}</span>
                  </div>
                </template>
              </template>
            </div>
            <div class="mx-2 shadow-2xl sidemenu">
              <a href="#cta" class="block px-8 py-4 text-gray-800 bg-slate-100 hover:text-white hover:bg-slate-400" @click.native="closeOpenSubmenu">
                <div class="flex">
                  <div class="self-center w-6 mr-3 lg:w-10">
                    <font-awesome-icon :icon="['fas', 'phone']" class="h-6 opacity-30 fai" />
                  </div>
                  <div class="self-center w-fit lg:w-26">
                    <div>
                      {{ $t('contact') }}
                    </div>
                    <div class="text-xs opacity-60 idesc">
                      {{ $t('desc_contact') }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
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
        name: 'whoweare',
        link: '/',
        desc: 'desc_whoweare',
        faicon: ['fas', 'home']
      },
      {
        name: 'opencourses',
        link: 'opencourses',
        desc: '',
        faicon: ['fas', 'graduation-cap']
      },
      {
        name: 'globalpoliticaleconomywebinars',
        link: 'globalpoliticaleconomywebinars',
        desc: '',
        faicon: ['fas', 'comment']
      },
      {
        name: 'perspective',
        link: 'perspective',
        desc: '',
        faicon: ['fas', 'glasses']
      },
      {
        name: 'bulletin',
        link: 'bulletin',
        desc: '',
        faicon: ['fas', 'newspaper']
      },
      {
        name: 'lecturesonecovisionaryleadership',
        link: 'lecturesonecovisionaryleadership',
        desc: '',
        faicon: ['fas', 'graduation-cap']
      },
      {
        name: 'socialsolidarityprojects',
        link: 'socialsolidarityprojects',
        desc: '',
        faicon: ['fas', 'graduation-cap']
      },
      {
        name: 'talesbyfazilhoca',
        link: 'talesbyfazilhoca',
        desc: '',
        faicon: ['fas', 'comment']
      },
      {
        name: 'applicationform',
        link: 'applicationform',
        desc: 'desc_applicationform',
        faicon: ['fas', 'list']
      },
      {
        name: 'careers',
        link: 'careers',
        desc: 'desc_careers',
        faicon: ['fas', 'briefcase']
      }
      // {
      //   name: 'contact',
      //   link: 'contact',
      //   desc: 'desc_contact',
      //   faicon: ['fas', 'phone']
      // }
      // {
      //   name: 'services',
      //   desc: 'desc_sub',
      //   faicon: ['fas', 'graduation-cap'],
      //   subItems: [{
      //     name: 'pagea',
      //     link: 'page_a'
      //   },
      //   {
      //     name: 'pageb',
      //     link: 'page_b'
      //   },
      //   {
      //     name: 'pagec',
      //     link: 'page_c'
      //   }
      //   ],
      //   open: false
      // },
      // {
      //   name: 'another',
      //   desc: 'desc_sub',
      //   faicon: ['fas', 'award'],
      //   subItems: [{
      //     name: 'paged',
      //     link: 'page_d'
      //   },
      //   {
      //     name: 'pagee',
      //     link: 'page_e'
      //   }
      //   ],
      //   open: false
      // },
      // {
      //   name: 'chairsmessage',
      //   link: 'chairsmessage',
      //   desc: 'desc_chairsmessage',
      //   faicon: ['fas', 'comment']
      // },
      // {
      //   name: 'facilitators',
      //   link: 'facilitators',
      //   desc: 'desc_facilitators',
      //   faicon: ['fas', 'graduation-cap']
      // },
      // {
      //   name: 'programs',
      //   link: 'programs',
      //   desc: 'desc_programs',
      //   faicon: ['fas', 'desktop']
      // },
      ],
      showContainer: false
    }
  },
  watch: {
    $route () {
      this.updateOpenSubmenu()
    }
  },
  mounted () {
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
