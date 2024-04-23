<template>
    <div class="flex w-screen mt-0" v-if="props.displayContent">
        <div class="absolute h-full w-2/3 flex flex-col z-10">
            <span class="uppercase font-medium text-white">Major Update</span>
            <span class="text-3xl text-white drop-shadow-md font-semibold">Only I can Call My Dream Stupid</span>
        </div>
        <img class="w-full h-[300px] object-cover brightness-75" :src="data?.content.thumbNailImage" />
    </div>
    <div :class="props.cardHeaderClass" v-if="!props.displayContent">
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
    cardHeaderClass: { type: String, required: false },
    displayContent: { type: Boolean, default: false }
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