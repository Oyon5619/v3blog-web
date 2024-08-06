<template>
  <!-- 网站开发者信息 -->
  <Card title="站长信息" class="a-i" size="small">
    <el-descriptions :column="1">
      <el-descriptions-item>
        <template #label>
          <i class="iconfont">&#xe7ae;</i>&nbsp;站长名
        </template>
        YONSEN
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="iconfont">&#xe83f;</i>&nbsp;位置
        </template>
        Canton
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="iconfont">&#xe84f;</i>&nbsp;技能
        </template>
        <el-tag effect="dark">HTML5</el-tag>&nbsp;
        <el-tag effect="dark">JavaScript</el-tag>&nbsp;
        <el-tag effect="dark">Java</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="iconfont">&#xe83e;</i>&nbsp;站长链接
        </template>
        <a href="https://github.com/Oyon5619" target="_blank"><i class="iconfont">&#xed1e;</i></a>&nbsp;
        <a href="https://gitee.com/yonsen3628" target="_blank"><i class="iconfont">&#xed1d;</i></a>
      </el-descriptions-item>
    </el-descriptions>
  </Card>
</template>

<script setup>

</script>

<style scoped lang="scss">
.a-i {
  margin-bottom: 1.25rem;
  .title {
    font-size: 0.85rem;
    font-weight: bold;
  }
  .el-tag {
    background: $bgColor;
    border: $bgColor;
  }
}

.a-i__fixed {
  position: fixed;
}

</style>