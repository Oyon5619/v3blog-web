<template>
  <header>
    <el-col :span="18">
      <p class="zh-title">YONSEN的个人博客</p>
      <p class="en-title">YONSEN's BLOG</p>
    </el-col>
    <el-col :span="6">
      <el-row>登录 | 注册</el-row>
      <el-row>
        搜索框
      </el-row>
    </el-col>
  </header>
  <div class="line"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
  padding: 1rem 0;
  @include flex();

  .zh-title {
    line-height: 3.45rem;
    font-size: 2.45rem;
  }
  .en-title {
    font-size: 0.9remn;
  }
}

.line {
  background: $bgColor;
  height: 0.075rem;
  width: 100%;
}
</style>