<template>
  <h3>sku demo</h3>
  <div class="sku-demo">
    <Sku :sku="sku1"/>
  </div>
</template>

<script setup>
import { sku1 } from '@/test-data/skus'
import Sku from './components/Sku.vue'

</script>

<style lang="scss" scoped>
.sku-demo {
  margin-top: 2.5rem;
}
</style>
