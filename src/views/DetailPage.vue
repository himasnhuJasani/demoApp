<template>
    <div class="border-2 rounded-md">
        <div>
            <img class="w-full h-[300px] object-cover"
                src="https://images8.alphacoders.com/100/thumb-1920-1002974.png" />
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
        <div class="flex flex-col gap-3" v-html="html"></div>
        <div>
            <img class="w-full h-[300px] object-cover"
                src="https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg" />
        </div>
        <div class="flex flex-col gap-3" v-html="html"></div>
        <div class="flex flex-col gap-3 items-center p-2">
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
var html = `<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n</p>\n<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n</p>\n<p>\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n</p>\n<p>\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n</p>`
// import { onMounted, ref } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
// const router = useRouter()
// const route = useRoute();
//  const data1 =ref()
//  const fetchData = async ()=> {
//     const resp = await fetch('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent',{
//         headers: {
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.dHVzaGFyLnNhaW5pQGxvYmIuaW4.1InOHLHAMipL7u-8BHmP92fVbWADx9iiC9H0N1Cc6pc'  
//         }
//     })
//     data1.value = await resp.json()
//     console.log("sdadsa",data1)
//  }
//  const openPage=()=>{
//     router.push('/detail')
//  }
// onMounted(()=>{
//     fetchData()
// })
</script>