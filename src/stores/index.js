import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabbarStore = defineStore('tabbar', () => {
  const active = ref(1) // 导航栏下标

  function onActive(val) {
    active.value = val
  }

  return {
    active, onActive
  }
}, {
  persist: {
    paths: ['active'],
    storage: localStorage,
    key: 'tabbar'
  }
})