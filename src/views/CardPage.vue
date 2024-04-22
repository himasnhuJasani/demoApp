<template>
        <div class="border-2 rounded-md border-indigo-600 max-h-[400px] w-[300px] overflow-hidden">
            <div>
                <img class="w-full h-[300px] object-cover"
                    src="https://images8.alphacoders.com/100/thumb-1920-1002974.png" @click="openPage()" />
            </div>
            <div class="flex gap-3 items-center p-2">
                <div>
                    <img class="object-cover rounded-lg h-[50px] w-auto"
                        src="https://i.pinimg.com/originals/e7/9c/df/e79cdfc22bbbd73435ec83e9d1f05bc4.jpg" />
                </div>
                <div class="flex flex-col align-middle justify-center truncate">
                    <p class="text-sm font-bold">Black Clover</p>
                    <p class="text-[10px]">There are many variations of passages</p>
                </div>
                <div>
                    <button>Refresh</button>
                </div>
            </div>
        </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const data1 = ref()
const fetchData = async () => {
    const resp = await fetch('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.dHVzaGFyLnNhaW5pQGxvYmIuaW4.1InOHLHAMipL7u-8BHmP92fVbWADx9iiC9H0N1Cc6pc'
        }
    })
    data1.value = await resp.json()
    console.log("sdadsa", data1)
}
const openPage = () => {
    router.push('/detail')
}
onMounted(() => {
    fetchData()
})
</script>