<template>
    <div class="flex flex-col w-screen h-screen justify-center items-center">
        <div class="pr-[12rem]">
            <div class="text-gray-400 font-semibold">{{ formattedDate }}</div>
            <h1 class="text-3xl font-bold">Today</h1>
        </div>
        <div
            class="border-2 rounded-md shadow-xl hover:shadow-2xl hover:scale-110 transition-all max-h-[400px] m-5 md:w-[350px] overflow-hidden">
            <CardContent :cardFooterClass="cardFooterClass" :cardHeaderClass='cardHeaderClass' />
        </div>
    </div>
</template>
<script setup lang="ts">
import CardContent from '../components/CardContent.vue'
const currentDate = new Date();
const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['JANURAY', 'FEDRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const formattedDate = `${dayOfWeek} ${date} ${month}`;
const cardFooterClass = 'flex justify-between items-center p-2 gap-2';
const cardHeaderClass = 'hover:cursor-pointer'
</script>