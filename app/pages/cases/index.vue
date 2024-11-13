<template>
    <div class="py-16">
        
        <LayoutDefault>
            <div class="w-full border-t-[1px] border-primary pt-8">
                <h1 class="heading-1 text-primary mt-6"> {{ $t('cases.header') }} </h1>
                <div class="grid grid-cols-2 gap-4 md:gap-6 mt-6">
                    <CaseComponent v-for="currentCase of cases" :title="currentCase.name" :description="currentCase.title" :url="currentCase._path" :imageUrl="currentCase.cover" />
                    <!-- <NuxtLink :to="localePath(currentCase._path)" v-for="currentCase of cases">
                        <div class="w-full relative group aspect-video rounded-xl overflow-hidden">
                            <div class="p-8 flex flex-row justify-between relative z-10">
                                <div>
                                    <h3 class="heading-4 text-black-700 dark:text-white-950 group-hover:text-white-950  transition-colors duration-300 ease-in-out">
                                        {{ currentCase.name }}
                                    </h3>
                                    <div class="text-black-500 dark:text-white-500 group-hover:text-white-800  transition-colors duration-300 ease-in-out text-body-sm mt-2">
                                        {{ currentCase.title }}
                                    </div>
                                </div>
                                <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-white-950 dark:bg-white-950  transition-colors duration-300">
                                    <ArrowUpRightIcon class="size-6 group-hover:rotate-45 dark:text-black-700 text-white-700  group-hover:text-black-950 transition-all duration-300 ease-in-out" />
                                </div>
                            </div>
                            <div class="absolute z-0 w-full h-full top-0">
                                <div class="absolute top-0 bg-gradient-to-b from-black-400 dark:from-black-400 from-10% to-40% group-hover:bg-black-400 dark:group-hover:bg-black-500 bg-blend-overlay dark:bg-blend-hard-light transition-colors duration-300 w-full h-full">
                                    
                                </div>                                    
                                <NuxtImg class="bg-tertiary w-full h-full" src="/images/case-test.png" />
                            </div>
                        </div>
                    </NuxtLink> -->
                </div>
            </div>
        </LayoutDefault>
    </div>
</template>
<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: cases } = await useAsyncData(`/${locale.value}/cases`, () => queryContent(`/${locale.value}/cases`).find(), { watch: [locale] })

</script>