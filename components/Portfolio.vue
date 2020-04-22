<template>
  <div class="portfolios">
    <el-tabs type="card">
      <el-tab-pane label="All">All</el-tab-pane>
      <el-tab-pane label="Angular">Angular</el-tab-pane>
      <el-tab-pane label="React">React</el-tab-pane>
      <el-tab-pane label="Vue">Vue</el-tab-pane>
      <el-tab-pane label="Ember.js">Ember.js</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.portfolios {
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 0;
  width: calc(100% - 40px);
}
</style>
