<template>
  <div class="h-c">
    <el-tabs v-model="active">
      <el-tab-pane label="分类" name="category">
        <div class="pane">
          <TabItem v-for="item in categories" :key="item.id" :item="item" class="item"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="标签" name="tag">
        <div class="pane">
          <TabItem v-for="item in tags" :key="item.id" :item="item" class="item"/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import TabItem from './components/TabItem.vue'
import data from '@/test-data/tags'

import { ref } from 'vue'
const active = ref('category')

const tags = ref(data.filter(item => item.type == 1))
const categories = ref(data.filter(item => item.type == 2))

</script>

<style scoped lang="scss">
.h-c {
  padding: 0 2.5rem;
  .pane {
    padding: 0.5rem;
    margin-right: -1.0rem;
    @include flex($align: none);
    gap: 1.5rem;
    flex-wrap: wrap;
  }
}
</style>