<template>
  <div class="experience">
    <el-timeline>
      <el-timeline-item>
        <el-card>
          <h3>work history 1</h3>
        </el-card>
      </el-timeline-item>
      <el-timeline-item>
        <el-card>
          <h3>work history 2</h3>
        </el-card>
      </el-timeline-item>
      <el-timeline-item>
        <el-card>
          <h3>work history 3</h3>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.experience {
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 0;
  width: calc(100% - 40px);
  .el-timeline {
    padding: 0;
  }
}
</style>
