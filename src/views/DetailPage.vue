<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-end z-10">
            <p class="rounded-full bg-white flex justify-center items-center m-2 w-8 h-8 text-black p-3 fixed top-0"
                @click=closePage()>X</p>
        </div>
        <div class="border-2 rounded-md flex flex-col justify-center items-center gap-4 p-5 pt-0">
                <CardContent :cardFooterClass = 'cardFooterClass' :displayContent = 'displayContent'/>
            <div class="flex flex-col gap-3" v-html="html"></div>
            <div class="flex w-screen px-6">
                <img class="w-full h-[300px] object-cover" :src="data?.content.mainImage" />
            </div>
            <div class="flex flex-col gap-3" v-html="html"></div>
            <div class="flex flex-col w-screen items-center gap-3 p-2 bg-slate-300">
                <div class="h-16 w-16">
                    <img class="object-cover rounded-lg h-full w-full"
                        :src="data?.content.logo" />
                </div>
                <div class="flex flex-col align-middle items-center justify-center truncate">
                    <p class="text-sm font-bold">{{ data?.content.title }}</p>
                    <p class="text-[10px]">{{ data?.content.subTitle }}</p>
                </div>
                <div>
                    <button class="bg-blue-600 text-white rounded-3xl uppercase text-xs p-2"
                        @click="refresh()">Refresh</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
var html = `<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n</p>\n<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n</p>\n<p>\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n</p>\n<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n</p>`// import { onMounted, ref } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useFetchData } from '../stores/index.js'
import CardContent from '../components/CardContent.vue'
const router = useRouter()
const store = useFetchData()
const data = computed(() => store.naruto)
const cardFooterClass = 'flex justify-between items-center p-2 w-full sm:w-[400px]';
const displayContent = true
const closePage = () => {
    router.back()
}
const refresh = () => {
    useFetchData().fetchData()
}

</script>