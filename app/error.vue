<template>
  <NuxtLayout name="404">
    <div>
      {{ error?.statusCode }}
      {{ error?.message }}
      <div class="text-4xl">You've Arrived Here on Error, boss</div>
      <button class="font-bold button" @click="goBack">Back</button>
    </div>
  </NuxtLayout>
</template>
  
<script setup lang="ts">
import type { NuxtError } from '#app'

const localePath = useLocalePath()

const props = defineProps({
  error: Object as () => NuxtError
})

const router = useRouter()

const goBack = () => {
  router.push(localePath('index'))
}

</script>
  
<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>