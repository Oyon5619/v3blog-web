<template>
  <div class="crumb">
    <p>Current:</p>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.crumb {
  height: 3rem;
  @include flex($align: none);
  p {
    font-weight: bold;
    margin-right: 0.5rem;
    line-height: 3rem;
    color: #bebebe;
    font-size: 0.75rem;
  }
}
</style>