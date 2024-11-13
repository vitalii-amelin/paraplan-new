<template>
  <div :class="['app w-full scroll-smooth', !!appStore.darkMode ? 'dark' : 'light', { 'theme-transition' :appStore.themeTransition }]">
      <div class="flex flex-col justify-center bg-primary"> 
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtRouteAnnouncer />
          <NuxtPage
            class="min-h-screen"
            :transition="{
              name: 'my',
              mode: 'in-out',
              onBeforeEnter
            }"
          />
        </NuxtLayout>
      </div>
  </div>
</template>
<script setup>

const appStore = useAppStore()

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

</script>
<style>

.theme-transition * {
  @apply !transition-colors !duration-300 !delay-0 !ease-out
}

.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}

.my-enter,
.my-leave-active {
  opacity: 0;
}

</style>