<template>
  <div class="container">
    <div class="summary">
      <div class="content">
        I've been developing web and mobile applications for over the last 9
        years, basically from scratch.
      </div>
      <el-button type="text">DownLoad CV</el-button>
      <el-button type="text">Contact Info</el-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.summary {
  padding: 20px;
  text-align: center;
  color: #606060;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .content {
    margin-bottom: 20px;
  }
  .el-button {
    padding: 0;
  }
}
</style>
