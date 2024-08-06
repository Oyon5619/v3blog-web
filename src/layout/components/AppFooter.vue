<template>
  <el-footer>
    <p>Designed by <span class="author">YONSEN</span></p>
    <p>&copy;2024&nbsp;欧阳新&nbsp;|&nbsp;</p>
  </el-footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
.el-footer {
  font-size: 0.65rem;
  background: $bgColor;
  @include flex();
  color: #fff;
  p {
    margin-right: 50px;
    .author {
      font-weight: bolder;
    }
  }
}
</style>