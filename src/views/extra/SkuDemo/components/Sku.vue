<template>
  <div v-for="prop_item in props.sku.property" :key="prop_item.id" class="prop_item">
    <div 
      :class="{
        'attr_item': true,
        'unavaliable': !avaliable[attr_item.id],
        'checked': selectedIds[prop_item.id] == attr_item.id
      }" 
      v-for="attr_item in prop_item.s_attributesValues" 
      :key="attr_item.id"
      @click="onSelect(prop_item.id, attr_item.id)"
    >
      <!-- {{ attr_item }} -->
      <span>
        <img :src="attr_item.photo" alt="" v-if="attr_item.photo != ''">
      </span>
      <p>{{ attr_item.attribute_value }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const selectedIds = ref({}) // 已选择的规格 (属性为规格名id, 值为选中的规格值)
const avaliable = ref({}) // 目前有效的规格id集合

const props = defineProps({
  sku: {
    type: Object,
    default: {
      property: [],
      stock_list: [],
    }
  }
})

const onSelect = (propertyId, valueId) => {
  if (selectedIds.value[propertyId]) {
    delete selectedIds.value[propertyId]
  } else {
    selectedIds.value[propertyId] = valueId
  }
  updateAvaliableMap()
}

function updateAvaliableMap() {
  let map = createAvaliableMap()
  avaliable.value = {}

  for (let goods_specs in map) {
    goods_specs.split(',').forEach(valueId => {
      if (!avaliable.value[valueId]) {
        avaliable.value[valueId] = true
      }
    })
  }
}

function createAvaliableMap() {
  let map = {}
  props.sku.stock_list.forEach(stock => {
    let specs = stock.goods_specs.split(',').map(e => e - 0)
    if (isAvaliable(specs)) {
      map[stock.goods_specs] = stock
    }
  })
  return map
}

function isAvaliable(specs) {
  for (let propertyId in selectedIds.value) {
    if (!specs.includes(selectedIds.value[propertyId])) {
      return false
    }
  }
  return true
}

onMounted(() => {
  updateAvaliableMap()
})

</script>

<style lang="scss" scoped>
.prop_item {
  @include flex($align: none);

  .attr_item {
    @include flex();
    border-radius: 0.25rem;
    font-size: 0.8rem;
    border: 0.5px solid #d0cdcd;
    cursor: pointer;
    padding: 0.25rem 0.35rem;
    margin: 0.45rem;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.48rem;
    }

    &.checked {
      font-weight: bold;
      border-color: #0eb0a8;
    }
  }
}

.unavaliable {
  background: #f6f6f6;
  color: #aaa;
  pointer-events: none;
}
</style>