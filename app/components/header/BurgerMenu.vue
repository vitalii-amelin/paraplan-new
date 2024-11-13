<template>
    <div>
        <TransitionRoot
            as="div"
            class="absolute z-40 w-full bg-primary top-0 pt-24"
            :show="menuStore.isOpen"
            enter="transform transition-transform duration-500 ease-out"
            enter-from="-translate-y-full"
            enter-to="translate-y-0"
            leave="transform transition-transform duration-500 ease-out"
            leave-from="translate-y-0"
            leave-to="-translate-y-full"
        >
            <div class="">
                <div class="2xl:container 2xl:mx-auto px-6 md:px-9 lg:px-12 py-6">
                    <div class="grid grid-cols-12 gap-4 md:gap-6 w-full">
                        <div class="col-span-7">
                            <div class="flex flex-col justify-between h-full ">
                                <div>
                                    <ul class="grid grid-cols-7 gap-4 md:gap-6">
                                        <li v-for="link in navigation" class="col-span-3 text-primary">
                                            <template v-if="link.url.startsWith('#')">
                                                <a :href="link.url">
                                                    {{ $t(`navigation.links.${link.slug}`) }}
                                                </a>
                                            </template>
                                            <template v-else>
                                                <NuxtLink :to="localePath(link.url)" @click.prevent="menuStore.closeMenu()">
                                                    {{ $t(`navigation.links.${link.slug}`) }}
                                                </NuxtLink>
                                            </template>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex justify-between p-3 bg-secondary rounded-xl">
                                    <div class="max-w-full flex flex-row gap-3 items-center">
                                        <a href="https://instagram.com/paraplan.design" target="_blank" rel="noopener noreferrer">
                                            <IconsInstagram size="size-8" color="icon-brand-primary" />
                                        </a>
                                        <a href="https://t.me/kate_semeon" target="_blank" rel="noopener noreferrer">
                                            <IconsTelegram size="size-8" color="icon-brand-primary" />
                                        </a>
                                        <a class="text-body-sm text-primary underline" href="mailto:sales@paraplan.studio">sales@paraplan.studio</a>
                                    </div>
                                    <div>
                                        <button class="px-4 py-3 bg-brand-primary text-on-brand-primary text-body-sm rounded-lg">
                                            {{ $t('navigation.cta') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-5 bg-secondary">
                            <!-- <div class="h-64 text-primary"> -->
                                <NuxtLink :to="localePath('index')">
                                    <div class="dark w-full relative group aspect-video rounded-xl overflow-hidden">
                                        <div class="p-8 flex flex-row justify-between relative z-10">
                                            <div>
                                                <h3 class="heading-4 text-black-700 dark:text-white-950 group-hover:text-white-950 dark:group-hover:text-black-950 transition-colors duration-300 ease-in-out">
                                                    Название кейса
                                                </h3>
                                                <div class="text-black-500 dark:text-white-500 group-hover:text-white-800 dark:group-hover:text-black-500 transition-colors duration-300 ease-in-out text-body-sm mt-2">
                                                    Краткое описание кейса в одну, две или три строчки, чтобы было все понятно
                                                </div>
                                            </div>
                                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-white-950 dark:bg-white-950 dark:group-hover:bg-black-700 transition-colors duration-300">
                                                <ArrowUpRightIcon class="size-6 group-hover:rotate-45 dark:text-black-700 text-white-700 dark:group-hover:text-white-950 group-hover:text-black-950 transition-all duration-300 ease-in-out" />
                                            </div>
                                        </div>
                                        <div class="absolute z-0 w-full h-full top-0">
                                            <div class="absolute top-0 group-hover:bg-black-400 dark:group-hover:bg-white-400 bg-blend-overlay dark:bg-blend-hard-light transition-colors duration-300 w-full h-full">
                                                
                                            </div>                                    
                                            <NuxtImg class="bg-tertiary w-full h-full" src="/images/case-test.png" />
                                        </div>
                                    </div>
                                </NuxtLink>
                                <!-- {{ t('case') }} -->
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </TransitionRoot>
    </div>
</template>
<script setup>
import { navigation } from '~/assets/navigation'
import { TransitionRoot } from '@headlessui/vue';
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const localePath = useLocalePath()
const { locale } = useI18n()
const menuStore = useMenuStore()

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    menuStore.closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});

const { data: cases } = await useAsyncData('cases', () => queryContent(`/${locale.value}/cases`).limit(1).find(), { watch: [locale] })

// const menuStore = useMenuStore()


</script>