<template>
    <div class="min-h-svh pt-16">
        <div v-if="thisCase">
            <LayoutDefault>
                <div class="w-full border-t-[1px] border-primary pt-8">
                    <div class="flex gap-2">
                        <div v-for="tag in thisCase.tags" class="px-3 py-2 bg-secondary rounded-full text-body-sm text-primary">
                            {{ tag }}
                        </div>
                    </div>
                    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6 mt-8 items-baseline">
                        <h1 class="col-span-1 heading-1 text-primary">
                            {{ thisCase.title }}
                        </h1>
                        <div class="col-span-1 text-body-base text-secondary">
                            {{ thisCase.description }}
                        </div>
                    </div>
                </div>
            </LayoutDefault>
            <LayoutDefault class="mt-16">
                <div class="w-full aspect-video rounded-3xl bg-black-300 overflow-hidden">
                    <NuxtImg v-if="thisCase.cover" :src="thisCase.cover" class="w-full object-cover"/>
                </div>
            </LayoutDefault>
            <LayoutDefault v-if="thisCase?.projectDetails" class="mt-16">
                <div class="w-full pt-8">
                    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-6 mt-8 items-baseline">
                        <h2 class="col-span-1 heading-1 text-primary">{{ thisCase.projectDetails.title }}</h2>
                        <div class="w-full col-span-1 flex flex-col gap-3">
                            <div class="bg-secondary p-6 rounded-2xl flex flex-col gap-2" v-for="detail in thisCase.projectDetails.details">
                                <h3 class="heading-3 text-primary">{{ detail.title }}</h3>
                                <p class="text-body-base text-secondary mb-0">{{ detail.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutDefault>
            <LayoutDefault class="mt-16">
                <div class="w-full aspect-video pt-8 rounded-3xl bg-black-300">

                </div>
            </LayoutDefault>
            <div class="dark mt-24 bg-primary">
                <div class="2xl:container 2xl:mx-auto px-6 md:px-9 lg:px-12 py-20">
                    <div class="gap-4 md:gap-6 grid grid-cols-12 ">
                        <div class="col-span-7">
                            <h2 class="heading-1 text-primary">
                                {{ $t('cases.cta.header') }}
                            </h2>
                            <p class="mt-8 text-secondary">
                                {{ $t('cases.cta.description') }}
                            </p>                    
                        </div>
                        <div class="col-span-5 dark:bg-[#185936]  rounded-3xl">
                            <NuxtImg
                                class="px-16 pt-16"
                                src="/images/hero-photo.png"
                            ></NuxtImg>
                        </div>
                    </div>
                    <div class="mt-16 col-span-12  rounded-xl p-6 bg-secondary">
                        <form class="w-full flex flex-row gap-6" @submit.prevent="handleSubmit">
                            <input class="w-full form-input p-4 rounded-lg border border-primary bg-primary focus:ring-2 focus:ring-white-400 placeholder:text-tertiary text-primary outline-none" v-model="name" placeholder="Имя" />
                            <div class="flex flex-row w-full">
                                <div class="bg-tertiary aspect-square text-secondary h-full flex items-center justify-center rounded-s-lg">@</div>
                                <input class="w-full form-input p-4 rounded-e-lg border border-primary bg-primary focus:ring-2 focus:ring-white-400 placeholder:text-tertiary text-primary outline-none" v-model="telegram" placeholder="telegram" />
                            </div>
                            
                            <button class="w-full flex flex-row items-center justify-center gap-3 p-4 rounded-lg border border-primary btn-primary text-on-brand-primary focus:ring-2 focus:ring-white-400 outline-none">
                                <div v-if="loadingState">
                                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            

            <div class="bg-primary" v-if="otherCases.length > 0 && otherCases.some(item => item !== null)">
                <div class="2xl:container 2xl:mx-auto px-6 md:px-9 lg:px-12 py-20">
                    <h2 class="heading-2 text-primary">
                        {{ $t('cases.otherWorks') }}
                    </h2>
                    <div class="grid grid-cols-2 gap-4 md:gap-6 mt-12">
                        
                        <template v-for="otherCase in otherCases">
                            <CaseComponent v-if="otherCase" :title="otherCase.name" :description="otherCase.title" :url="otherCase._path" :imageUrl="otherCase.cover" />
                        </template>
                        
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script setup>

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: thisCase, error: thisCaseError} = await useAsyncData('thisCase', () => 
    queryContent(route.fullPath)
    .findOne(),
    {
        watch: [locale]
    }
)

const { data: otherCases, error: otherCasesError } = await useAsyncData('otherCases', () => 
    queryContent(`/${locale.value}/cases`)
    .only(['_path', 'name', 'title', 'cover'])
    .where({ _path: { $ne: route.fullPath} })
    .limit(2)
    .find(),
    {
        watch: [
            locale
        ]
    }
)


if (thisCaseError.value || !thisCase.value) {
    console.log('ошибка тут должна быть')
      // Вызываем ошибку 404
      throw createError({
        statusCode: 404,
        statusMessage: 'Document not found',
        fatal: true
      })
}


const name = ref('')
const phone = ref('')
const telegram = ref('')

const loadingState = ref(false)
  
const handleSubmit = async () => {

    const route = useRoute().fullPath

    loadingState.value = true
    
    const response = await $fetch('/api/formSubmit', {
      method: 'POST',
      body: {
        name: name.value,
        // phone: phone.value,
        telegram: telegram.value,
        URL: route,
        form_name: 'case'
      }
    })

    console.log(name.value, telegram.value)

    name.value = ''
    // telInput.value.clearPhone()
    telegram.value = ''
    loadingState.value = false

    // await navigateTo('/thank-you')

}

</script>