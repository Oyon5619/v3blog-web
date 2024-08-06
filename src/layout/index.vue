<template>
  <div class="lyt">
    <AppHeader ref="AppHeaderRef"/>
    <main>
      <el-col :span="18">
        <Menu/>
        <BreadCrumb/>
        <router-view/>
      </el-col>
      <el-col :span="6">
        <AuthorInfo/>
        <RecentUpdate/>
      </el-col>
    </main>
    <AppFooter/>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Menu from './components/Menu.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import AuthorInfo from './components/AuthorInfo.vue'
import RecentUpdate from './components/RecentUpdate.vue'

import { ref } from 'vue'
const AppHeaderRef = ref(null)

window.document.documentElement.addEventListener('scroll', function(e) {
  console.log(window.document.documentElement.offsetTop)
})

</script>

<style scoped lang="scss">
.lyt {
  margin: 0 auto;
  width: 70%;

  main {
    margin-top: 0.5rem;
    @include flex($justify: none, $align: none);
    min-height: 1200px;
  }
}
</style>