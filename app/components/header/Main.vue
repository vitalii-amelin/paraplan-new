<template>
    <div class="absolute top-0 w-full z-50">
        <!-- <div class="relative z-50 pt-4"> -->
        <div class="relative z-50 pt-6">
            <div class="2xl:container 2xl:mx-auto flex flex-col justify-center px-6 md:px-9 h-16 lg:px-12">
                <div class="flex justify-between">
                    <NuxtLink :to="localePath('/')" @click.prevent="menuStore.closeMenu()">
                        <MainLogo />
                    </NuxtLink>
                    <!-- <div class="flex gap-2 transform -translate-x-4 ease-in-out" :class="{'translate-x-0': menuStore.isOpen }"> -->
                    <div class="flex gap-2 transform transition-transform duration-500 -translate-x-4 ease-in-out" :class="{'translate-x-0': menuStore.isOpen }">
                        <Menu as="div" class="relative inline-block text-left">
                                <MenuButton class="bg-primary flex items-center gap-1 px-4 py-2 rounded-full border border-primary text-primary text-body-sm leading-none ui-open:bg-primary hover:bg-secondary">
                                    {{ locale.toUpperCase() }}
                                    <ChevronDownIcon class="size-4 text-brand-primary transition-transform duration-300 ease-in-out ui-open:transform ui-open:rotate-180 ui-open:transition-transform ui-open:duration-300 ui-open:ease-in-out" />
                                </MenuButton>
                                <Transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-out"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <MenuItems
                                        class="absolute overflow-hidden right-0 mt-2 w-56 origin-top-right divide-y divide-primary rounded-md shadow-sm ring-1 ring-black-100 dark:ring-white-300 focus:outline-none"
                                    >
                                        <MenuItem v-for="locale in locales" :key="locale.code">
                                            <NuxtLink :to="switchLocalePath(locale.code)">
                                                <div class="text-body-sm p-2 bg-primary hover:bg-secondary">
                                                    <span class="text-primary">{{ locale.name }}</span> <span class="text-tertiary">({{ locale.code.toUpperCase() }})</span>
                                                </div>
                                            </NuxtLink>
                                        </MenuItem>
                                    </MenuItems>
                                </Transition>
                        </Menu>
                        <button class="bg-primary flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-body-sm leading-none hover:bg-secondary" @click="app.toggleDarkMode()">
                            <MoonIcon class="size-4 text-brand-primary" />
                        </button>
                        <button :class="['bg-primary  text-primary group flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-body-sm leading-none hover:bg-secondary', {'bg-brand-primary text-on-brand-primary hover:text-brand-primary': menuStore.isOpen}]" @click="menuStore.toggleMenu()">
                            <div class="relative w-4 h-2">
                                <div
                                    class="absolute top-0 w-full h-px  transition-transform duration-300 ease-in-out"
                                    :class="{ 'bg-primary group-hover:bg-brand-primary transform translate-y-[3.5px] -rotate-45': menuStore.isOpen, 'bg-brand-primary translate-y-0 rotate-0': !menuStore.isOpen }"
                                ></div>
                                <div
                                    class="absolute bottom-0 w-full h-px  transition-transform duration-300 ease-in-out"
                                    :class="{ 'bg-primary group-hover:bg-brand-primary transform -translate-y-[3.5px] rotate-45': menuStore.isOpen, 'bg-brand-primary -translate-y-0 rotate-0': !menuStore.isOpen }"
                                ></div>
                            </div>
                            {{ $t('navigation.menu') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <HeaderBurgerMenu />
    </div>
    <Transition
        enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-show="menuStore.isOpen" class="transition-opacity duration-1000 h-full w-full bg-black-600 absolute top-0 z-40" @click="menuStore.closeMenu()">
        </div>
    </Transition>
</template>
<script setup>
import { MoonIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const menuStore = useMenuStore()
const app = useAppStore()

</script>