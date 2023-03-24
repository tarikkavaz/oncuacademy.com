<template>
  <Popover class="relative flex justify-center">
    <PopoverButton class="items-center content-center mt-5 text-sm font-semibold leading-6 text-gray-900 gap-x-1">
      <span class="inline-flex items-center self-end px-6 py-3 text-lg font-semibold leading-6 rounded-md text-oncured-800 bg-slate-100 gap-x-1">Menu </span>
    </PopoverButton>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <PopoverPanel class="absolute z-10 flex w-screen px-4 mt-20 -translate-x-1/2 left-1/2 max-w-max">
        <div class="flex-auto w-screen max-w-md overflow-hidden text-lg leading-6 shadow-lg bg-slate-100 rounded-3xl ring-1 ring-gray-900/5">
          <div class="p-4">
            <div v-for="item in solutions" :key="item.name" class="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50">
              <div class="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                <component :is="item.icon" class="w-6 h-6 text-gray-600 group-hover:text-oncured-600" aria-hidden="true" />
              </div>
              <div>
                <a :href="item.href" class="font-semibold text-gray-900">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <component :is="item.icon" class="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PencilIcon } from '@heroicons/vue/20/solid'
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/vue/24/outline'

const solutions = [
  { name: 'Home', description: 'Academy Without Borders', href: '/', icon: HomeIcon },
  { name: 'Our Team', description: 'Get to know out Team', href: '/our-team', icon: UserGroupIcon },
  { name: 'Our Learning Facilitators', description: "The Academic Staff", href: '/our-learning-facilitators', icon: AcademicCapIcon },
  { name: 'Careers', description: 'Work with us', href: '#', icon: BriefcaseIcon },
]
const callsToAction = [
  { name: 'Write us', href: 'mailto:info@oncuacademy.com', icon: PencilIcon },
  { name: 'Talk to us', href: 'tel:00905325843293', icon: PhoneIcon },
]
</script>