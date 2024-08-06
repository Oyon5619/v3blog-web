<template>
  <el-card>
    <template v-if="!props.noHeader" #header>
      <header>
        <p :class="[props.size, { 'title-hidden': titleHidden }]">{{ props.title }}</p>
        <div class="header-right">
          <slot name="headerRight"></slot>
        </div>
      </header>
    </template>
    <main>
      <slot></slot>
    </main>
  </el-card>
</template>

<script setup>
const props = defineProps({
  noHeader: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  titleHidden: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'middle'
  },
})
</script>

<style scoped lang="scss">

.small {
  font-size: 0.85rem;
  font-weight: bold;
}
.middle {
  font-size: 0.95rem;
  font-weight: bold;
}
.large {
  font-size: 1.05rem;
  font-weight: bold;
}
.title-hidden {
  @include Hidden();
}

header {
  position: relative;
  @include flex($align: none);
  .header-right {
    position: absolute;
    right: 0;
  }
}
</style>