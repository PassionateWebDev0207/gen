<template>
  <div class="skills">
    <el-progress
      type="dashboard"
      :percentage="14"
      :color="colors"
    ></el-progress>
    <el-progress :percentage="14" :color="colors"></el-progress>
    <el-progress type="circle" :percentage="14" :color="colors"></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 0;
  width: calc(100% - 40px);
}
</style>
