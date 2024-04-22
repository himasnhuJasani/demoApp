<template>
    <div class="flex w-screen h-screen justify-center items-center">
        <div
            class="border-2 rounded-md shadow-xl hover:shadow-2xl hover:scale-110 transition-all max-h-[400px] m-5 md:w-[350px] overflow-hidden">
            <CardContent :cardFooterClass="cardFooterClass" :cardHeaderClass = 'cardHeaderClass'/>
        </div>
    </div>
</template>
<script setup lang="ts">
import CardContent from '../components/CardContent.vue'
const cardFooterClass = 'flex justify-between items-center p-2 gap-3';
const cardHeaderClass = 'hover:cursor-pointer'
</script>