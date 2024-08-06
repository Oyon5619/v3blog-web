<template>
  <div class="menu-box">
    <span 
      v-for="item in menuData" 
      :key="item.id" 
      :class="{ 'active': tabbarStore.active == item.id }"
      @click="onActive(item)"
    >
      {{ item.name }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useTabbarStore } from '@/stores'

const tabbarStore = useTabbarStore()

const menuData = ref([
  { id: 1, name: '首页', path: '/blog/mainpage' },
  { id: 2, name: '分类标签', path: '/blog/category' },
  { id: 3, name: '留言板', path: '/blog/board' },
  { id: 4, name: '开发日志', path: '/blog/devlog' },
])

const router = useRouter()

const onActive = (item) => {
  tabbarStore.onActive(item.id)
  router.push(item.path)
}

</script>

<style lang="scss" scoped>
.menu-box {
  margin-bottom: 0.5rem;
  span {
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    font-size: 0.8rem;
    line-height: 2rem;
    height: 2rem;
    width: 5rem;

    &.active {
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        border-bottom: 0.145rem solid $bgColor;
        border-radius: 1rem;
        transition: all .3s linear;
      }
    }
  }
}
</style>