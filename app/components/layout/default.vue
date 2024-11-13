<template>
    <div class="2xl:container 2xl:mx-auto px-6 md:px-9 lg:px-12">
        <!-- <div class="grid grid-cols-12 gap-4 md:gap-6 w-full"> -->
            <slot></slot>
        <!-- </div> -->
    </div>
</template>
<!-- 
    Это блок обертка, который принимает в себя параметры, такие как флекс, колонки, контейнеры
    Нужно подумать как сделать правильно nested для этого компонента
    Ведь есть главный layout, а есть layout внутри layout
    По сути это один и тот же компонент, просто по разному себя ведет
-->
<script setup>
const props = defineProps([
    'position',
    'className'
])
</script>