<template>
  <Card class="t-i" :title="props.item.name">
    <img src="" :alt="props.item.cover">
    <p>相关文章共{{ props.item.relates }}篇</p>
  </Card>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {
      id: '',
      type: 'Unknown',
      name: 'No Data',
      cover: 'none',
      relates: 0,
    }
  }
})
</script>

<style lang="scss" scoped>
.t-i {
  width: calc(25% - 1.5rem);
  text-align: center;
  cursor: pointer;
  img {
    width: 98%;
    height: 100px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.65rem;
  }
  &:hover {
    box-shadow: 0 0 0.2rem 0.3rem $shadowColor;
  }
}
</style>