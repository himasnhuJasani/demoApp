<template>
    <div :class="props.cardHeaderClass">
        <img class="w-full h-[300px] object-cover" :src="data?.content.thumbNailImage" @click="openPage()" />
    </div>
    <div :class="props.cardFooterClass">
        <div class="w-16 h-16 flex">
            <img class="object-cover rounded-lg" :src="data?.content.logo" />
        </div>
        <div class="flex flex-col">
            <span class="text-sm font-bold">{{ data?.content.title }}</span>
            <span class="text-[10px] truncate">{{ data?.content.subTitle }}</span>
        </div>
        <div>
            <button class="rounded-lg bg-blue-500 p-1 text-xs text-white" @click="refresh()">Refresh</button>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useFetchData } from '../stores/index.js'
import { computed } from 'vue';
const props = defineProps({
    cardFooterClass: String,
    cardHeaderClass: String,
})
const router = useRouter()
const store = useFetchData()
const data = computed(() => store.naruto)
const openPage = () => {
    router.push('/detail')
}
const refresh = () => {
    useFetchData().fetchData()
}
</script>