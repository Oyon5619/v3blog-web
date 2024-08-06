<template>
  <Card 
    class="item"
    :title="props.article.title"
    :title-hidden="true">
    <template #headerRight>
      <el-tag v-for="tag in props.article.tags" :key="tag" size="small" class="tag">{{ tag }}</el-tag>
    </template>
    <div class="content">
      {{ props.article.content }}
    </div>
    <div class="footer">
      <div class="f-l">
        <span><i class="iconfont">&#xed23;</i>&nbsp;{{ props.article.author }}</span>
        <span><i class="iconfont">&#xed1f;</i>&nbsp;{{ props.article.likes }}</span>
        <span><i class="iconfont">&#xed20;</i>&nbsp;{{ props.article.watches }}</span>
        <span><i class="iconfont">&#xed21;</i>&nbsp;{{ props.article.comments }}</span>
      </div>
      <p class="f-r"><i class="iconfont">&#xed24;</i>&nbsp;{{ props.article.releaseTime }}</p>
    </div>
  </Card>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    default: {
      title: '',
      content: '',
      releaseTime: '',
      likes: 0,
      comments: 0,
      watches: 0,
      tags: []
    }
  }
})
</script>

<style scoped lang="scss">

.item {
  margin-bottom: 28px;
  cursor: pointer;
  .content {
    height: 3.6rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    @include Hiddens(4);
  }
  .footer {
    margin-top: 12px;
    position: relative;
    text-align: right;
    color: #989898;
    font-size: 0.7rem;
    @include flex($align: none);
    .f-l span {
      margin-right: 0.8rem;
    }
    .f-r {
      position: absolute;
      right: 0;
    }
  }
  .tag {
    background: $bgColor;
    color: #fff;
    margin-left: 0.25rem;
  }
}
</style>