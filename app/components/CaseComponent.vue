<template>
    <!-- <div> -->
        <NuxtLink :to="localePath(localeUrl)">
            <div class="w-full relative group aspect-video rounded-xl overflow-hidden">
                <div class="p-8 flex flex-row gap-24 justify-between relative z-10">
                    <div>
                        <h3 class="heading-4 text-white-950 group-hover:text-white-950  transition-colors duration-300 ease-in-out">
                            {{ title }}
                        </h3>
                        <div class="text-white-500 group-hover:text-white-800  transition-colors duration-300 ease-in-out text-body-sm mt-2">
                            {{ description }}
                        </div>
                    </div>
                    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-black-800 group-hover:bg-white-950   transition-colors duration-300">
                        <ArrowUpRightIcon class="size-6 group-hover:rotate-45  text-white-700  group-hover:text-black-950 transition-all duration-300 ease-in-out" />
                    </div>
                </div>
                <div class="absolute z-0 w-full h-full top-0">
                    <div class="absolute top-0 bg-gradient-to-b from-black-400 dark:from-black-400 from-10% to-50% group-hover:bg-black-400  bg-blend-overlay dark:bg-blend-hard-light transition-colors duration-300 w-full h-full">
                        
                    </div>                                    
                    <NuxtImg class="bg-tertiary w-full h-full" :src="imageUrl" />
                </div>
            </div>
        </NuxtLink>
    <!-- </div> -->
</template>
<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
const localePath = useLocalePath()

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const localeUrl = computed(() => props.url.slice(3))

</script>