<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import {useFetchData} from './stores/index'
const store = useFetchData()
onMounted(()=>{
  store.fetchData()
})
</script>

<template>
  <RouterView />
</template>