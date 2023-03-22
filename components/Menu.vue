<template>
  <Popover class="relative z-50 isolate" v-slot="{ open }">
    <div class="py-5 ">
      <div class="flex justify-end px-6 lg:px-8">
        <PopoverButton class="inline-flex items-center self-end px-6 py-3 text-lg font-semibold leading-6 text-white rounded-md bg-oncured-700 gap-x-1">
          Menu <ChevronDownIcon class="w-8" :class="{ 'rotate-180 transform': open }" />
        </PopoverButton>
      </div>
    </div>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="-translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-1 opacity-0">
      <PopoverPanel class="absolute inset-x-0 top-0 pt-16 bg-white shadow-lg -z-10 ring-1 ring-gray-900/5">
        <div class="grid grid-cols-1 px-6 py-10 mx-auto max-w-7xl gap-y-10 gap-x-8 lg:grid-cols-2 lg:px-8">
          <div class="grid grid-cols-2 gap-x-6 sm:gap-x-8">
            <div>
              <h3 class="text-sm font-medium leading-6 text-gray-500">Engagement</h3>
              <div class="flow-root mt-6">
                <div class="-my-2">
                  <a v-for="item in engagement" :key="item.name" :href="item.href" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
                    <component :is="item.icon" class="flex-none w-6 h-6 text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium leading-6 text-gray-500">Resources</h3>
              <div class="flow-root mt-6">
                <div class="-my-2">
                  <a v-for="item in resources" :key="item.name" :href="item.href" class="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
                    <component :is="item.icon" class="flex-none w-6 h-6 text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 class="sr-only">Recent posts</h3>
            <article v-for="post in recentPosts" :key="post.id" class="relative flex flex-col max-w-2xl isolate gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
              <div class="relative flex-none">
                <img class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto" :src="post.imageUrl" alt="" />
                <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h4>
                <p class="mt-2 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
  BookOpenIcon,
  UserGroupIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/vue/24/outline'

const engagement = [
  { name: 'About', href: '/about', icon: InformationCircleIcon },
  { name: 'Academic Staff', href: '/staff', icon: AcademicCapIcon },
  { name: 'Our Team', href: '/team', icon: UserGroupIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '/', icon: UserGroupIcon },
  { name: 'Partners', href: '/', icon: GlobeAltIcon },
  { name: 'Guides', href: '/', icon: BookOpenIcon },
  { name: 'Webinars', href: '/', icon: VideoCameraIcon },
]
const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      '/images/mj1.png',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      '/images/mj3.png',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]
</script>