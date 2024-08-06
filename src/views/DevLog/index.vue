<template>
  <div class="d-log">
    <el-timeline style="max-width: 70%;">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        placement="top"
      >
        <LogItem :content="activity.content"/>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import LogItem from './components/LogItem.vue'

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

</script>

<style scoped lang="scss">
.d-log {
  padding: 0 1.5rem;
}
</style>