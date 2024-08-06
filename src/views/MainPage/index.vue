<template>
  <div class="h-idx">
    <ArticleItem 
      v-for="item in list" 
      :key="item.id" 
      :article="item"
    />
  </div>
</template>

<script setup>
import ArticleItem from './components/ArticleItem.vue'
import articleData from '@/test-data/articles'

import { ref } from 'vue'
const list = ref(articleData)
console.log(articleData)

</script>

<style scoped lang="scss">
.h-idx {
  margin-right: 1.5rem;
}
</style>