import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
  export const useFetchData = defineStore('fetchData', () => {
    const data = ref()
    const naruto = computed(() => data.value)
    async function fetchData() {
        const resp = await fetch(
          `${import.meta.env.VITE_API_URL}/getContent`,
          {
            headers: {
              Authorization:
                `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
          }
        );
        data.value = await resp.json();
      };
  
    return { naruto, fetchData}
  })
