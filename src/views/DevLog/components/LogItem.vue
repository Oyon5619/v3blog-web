<template>
  <Card class="item" :no-header="true">{{ props.content }}</Card>
</template>

<script setup>
const props = defineProps({
  content: ''
})

</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 1.5rem;
}
</style>