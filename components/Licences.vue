<template>
  <div class="licenses">
    <el-row :gutter="20">
      <el-col :lg="4" :md="8" :sm="12" :xs="24">
        <el-card :body-style="{ padding: '0px' }">
          <img style="width: 100%" src="~assets/images/vue.jpg" />
          <div style="padding: 14px">
            <h5>Vue Certified</h5>
            <el-button type="text">View more detail</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="4" :md="8" :sm="12" :xs="24">
        <el-card :body-style="{ padding: '0px' }">
          <img style="width: 100%" src="~assets/images/ng.jpg" />
          <div style="padding: 14px">
            <h5>Angular Certified</h5>
            <el-button type="text">View more detail</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="4" :md="8" :sm="12" :xs="24">
        <el-card :body-style="{ padding: '0px' }">
          <img style="width: 100%" src="~assets/images/react.jpg" />
          <div style="padding: 14px">
            <h5>React Certified</h5>
            <el-button type="text">View more detail</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.licenses {
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 0;
  width: calc(100% - 40px);
  .el-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .el-col {
      margin-bottom: 20px;
    }
  }
}
</style>
