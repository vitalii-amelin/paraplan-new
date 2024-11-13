<template>
    <div>
        <!-- <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
        <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
        </dialog> -->
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="setIsOpen(false)" class="relative z-10">
                <TransitionChild
                    class="opacity-0"
                    as="template"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div class="fixed inset-0 bg-black-300" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                    <TransitionChild
                        as="template"
                        class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                        class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white-950 p-6 text-left align-middle shadow-xl transition-all"
                        >
                        <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-gray-900"
                        >
                            Payment successful
                        </DialogTitle>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                            Your payment has been successfully submitted. We’ve sent you
                            an email with all of the details of your order.
                            </p>
                        </div>

                        <div class="mt-4">
                            <button
                            type="button"
                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            @click="setIsOpen(false)"
                            >
                            Got it, thanks!
                            </button>
                        </div>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <div class="w-full ">
            <div class="2xl:container 2xl:mx-auto flex flex-col justify-center px-6 md:px-9 lg:px-12 py-6 ">
                <div class="grid grid-cols-2 gap-4 md:gap-6">
                    <div class="mt-24 flex flex-col gap-16 justify-between">
                        <div>
                            <span class="max-w-fit border border-primary rounded-full px-3 py-2 text-body-sm text-secondary">
                                🔥 {{ $t('hero.business') }}
                            </span>
                            <h1 ref="myHeader" class="heading-1 mt-5 pe-6">
                                {{ $t('hero.header.first') }} {{ $t('hero.header.second') }}
                            </h1>
                            <p ref="myDescription" class="text-primary text-body-base mt-6">
                                {{ $t('hero.description') }}
                            </p>
                            <button class="mt-6 btn-primary py-4 px-6 rounded-lg text-on-brand-primary" @click="setIsOpen(true)">
                                {{ $t('hero.cta') }}
                            </button>
                        </div>
                        <div class="bg-secondary flex flex-row p-3 rounded-xl gap-3">
                            <div class="bg-primary w-full rounded-lg p-3 space-y-2">
                                <h3 class="text-primary text-body-base font-medium leading-6">21 день</h3>
                                <p class="text-body-sm text-secondary leading-5">Рыба текст, который должен добавить вес для сайта</p>
                            </div>
                            <div class="bg-primary w-full rounded-lg p-3 space-y-2">
                                <h3 class="text-primary text-body-base font-medium leading-6">Под ключ</h3>
                                <p class="text-body-sm text-secondary leading-5">Рыба текст, который должен добавить вес для сайта</p>
                            </div>
                            <div class="bg-primary w-full rounded-lg p-3 space-y-2">
                                <div class="flex flex-row -space-x-1">
                                    <svg class="z-10" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0004 0.776367C5.80837 0.776367 0.776367 5.80837 0.776367 12.0004C0.776367 18.1924 5.80837 23.2244 12.0004 23.2244C18.1924 23.2244 23.2244 18.1924 23.2244 12.0004C23.2244 5.80837 18.1924 0.776367 12.0004 0.776367Z" class="fill-white-950 dark:fill-gray-900"/>
                                        <path d="M12.5842 10.6475V18.9675H11.0322V10.0635L12.5842 10.6475Z" class=" fill-gray-900 dark:fill-white-950"/>
                                        <path d="M6.38403 9.87198C6.38403 7.74398 7.54403 6.58398 8.90403 6.58398C10.264 6.58398 10.456 6.77598 12 7.55198C13.544 8.32798 13.936 8.51998 14.712 8.51998C15.488 8.51998 15.872 7.93598 15.872 6.77598H17.224C17.416 9.09598 16.064 10.064 14.704 10.064C13.344 10.064 12.96 9.87198 11.608 9.09598C10.256 8.31998 9.86403 8.12798 9.08803 8.12798C8.31203 8.12798 7.92803 8.71198 7.73603 10.064L6.38403 9.87198Z" class="fill-gray-900 dark:fill-white-950"/>
                                        <path d="M12 24C5.384 24 0 18.616 0 12C0 5.384 5.384 0 12 0C18.616 0 24 5.384 24 12C24 18.616 18.616 24 12 24ZM12 0.776C5.808 0.776 0.776 5.808 0.776 12C0.776 18.192 5.808 23.224 12 23.224C18.192 23.224 23.224 18.192 23.224 12C23.224 5.808 18.192 0.776 12 0.776Z" class="fill-gray-900 dark:fill-white-950"/>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="#146EF5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8577 8L14.6645 16.5714H10.7253L12.4804 13.0194H12.4012C10.9533 14.9848 8.79336 16.2785 5.71484 16.5714V13.0679C5.71484 13.0679 7.68444 12.9467 8.84166 11.6742H5.71484V8H9.22901V11.0218H9.30822L10.7446 8H13.402V11.0026H13.4812L14.9707 8H18.8577Z" fill="white"/>
                                    </svg>
                                </div>
                                <p class="text-body-sm text-secondary leading-5">Рыба текст, который должен добавить вес для сайта</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#185936] dark:bg-gray-800 flex flex-col justify-between pt-32 h-[700px] rounded-3xl">
                        <div class="px-16 max-w-[400px] leading-6 text-on-brand-primary dark:text-secondary">
                            {{ $t('hero.experts') }}
                        </div>
                        <div class="flex justify-center">
                            <NuxtImg
                                class="px-16"
                                src="/images/hero-photo.png"
                            ></NuxtImg>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
<script setup>
import { gsap } from "gsap";
import SplitType from 'split-type'

// import {
//     Dialog,
//     DialogPanel,
//     DialogTitle,
//     DialogDescription,
//     TransitionRoot,
//     TransitionChild
//   } from '@headlessui/vue'
// import { VueElement } from "vue";

const { t } = useI18n()

const myHeader = ref(null)
// const myHeader2 = ref(null)
const myDescription = ref(null)

onMounted(() => {
    
    const headerText = new SplitType(myHeader.value, { types: 'words, chars',  tagName: 'span', charClass: 'my-char', wordClass: 'my-words', lineClass: 'my-lines' })
    const descriptionText = new SplitType(myDescription.value, { tagName: 'span', charClass: 'my-char text-primary', wordClass: 'my-words' })

    const headerClear = t('hero.header.first').replace(/\s/g, '')
    const headerLength = headerClear.length

    console.log(t('hero.header.first'))

    headerText.chars.forEach((char, index) => {
        if (index < headerLength) {
            char.classList.add('text-primary')
        } else {
            char.classList.add('text-tertiary')
        }
    })

    gsap.from(headerText.chars, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: { amount: 0.5 },
        // onComplete: () => headerText1.revert()
    })

    // gsap.from(headerText2.chars, {
    //     opacity: 0,
    //     y: 20,
    //     duration: 0.5,
    //     stagger: { amount: 0.5 },
    //     // onComplete: () => headerText2.revert()
    // })

    gsap.from(descriptionText.chars, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: { amount: 0.2 },
        // onComplete: () => descriptionText.revert()
    })

    

})

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(true)

function setIsOpen(value) {
  isOpen.value = value
}
// function openModal() {
//   isOpen.value = true
// }



</script>
<style >
.word {
    white-space: nowrap;
}
.my-char {
    display: inline-block !important;
}
.my-words {
    display: inline-block !important;
}
</style>