<template>
  <!-- 最近更新 -->
  <!-- 展示5篇最新发布的文章 按发布时间降序排列 只排文章标题 -->
  <Card title="最近更新" class="r-u" size="small">
    <div v-for="item in list" :key="item" class="item">
      <i class="iconfont">&#xed1c;</i>
      <p class="title">{{ item.name }}</p>
      <el-tag effect="dark" size="small" color="#3E4BFF">NEW&nbsp;!</el-tag>
    </div>
  </Card>
</template>

<script setup>
import data from '@/test-data/titles'

import { ref } from 'vue'
const list = ref(data)

</script>

<style scoped lang="scss">
.r-u {
  .item {
    @include flex($align: none);
    position: relative;
    border: 1px solid #E4E7ED;
    padding: 0 0.4rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    line-height: 2rem;
    color: $bgColor;
    font-weight: bolder;
    font-size: 0.8rem;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0.2rem 0.2rem $shadowColor;
      transition: all .4s;
    }
    
    .title {
      margin-left: 1rem;
      @include Hidden($width: 6rem);
    }
    .el-tag {
      font-size: 0.45rem;
      position: absolute;
      right: 0.4rem;
    }
  }
}
</style>