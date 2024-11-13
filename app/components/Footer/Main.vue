<template>
    <LayoutDefault>
        <div class="grid grid-cols-12 gap-4 md:gap-6 border-t border-primary py-4">
            <div class="col-span-6 flex flex-row gap-4 items-center">
                <div class="flex gap-3 items-center leading-none">
                    <img src="/images/avatar-logo.png" class="w-9 h-9 rounded-full" />
                    <div class="flex flex-row gap-4 items-baseline">
                        <span class="text-primary text-600 font-sans font-medium">
                        Paraplan
                        </span>
                        <span class="text-body-sm text-tertiary">
                            {{ $t('footer.copyright') }}
                        </span>
                    </div>
                </div>
                
            </div>
            <div class="col-span-6">
                <div class="flex justify-end">
                    <div class="max-w-full flex flex-row gap-3 items-center">
                        <a class="text-body-sm text-primary underline" href="mailto:sales@paraplan.studio">sales@paraplan.studio</a>
                        <a href="https://instagram.com/paraplan.design" target="_blank" rel="noopener noreferrer">
                            <IconsInstagram size="size-8" color="icon-brand-primary" />
                        </a>
                        <a href="https://t.me/kate_semeon" target="_blank" rel="noopener noreferrer">
                            <IconsTelegram size="size-8" color="icon-brand-primary" />
                        </a>
                    </div>
                    <!-- <div>
                        <button class="px-4 py-3 bg-brand-primary text-on-brand-primary text-body-sm rounded-lg">
                            {{ $t('navigation.cta') }}
                        </button>
                    </div> -->
                </div>
            </div>
            
            <!-- <div>
                Кейсы
            </div>
            <div>
                Кейсы
            </div> -->
        </div>
    </LayoutDefault>
</template>