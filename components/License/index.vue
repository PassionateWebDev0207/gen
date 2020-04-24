<template>
  <div
    v-loading="!data"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="licenses"
  >
    <el-row v-if="data" :gutter="20">
      <el-col
        v-for="(item, index) in data.data"
        :key="index"
        :lg="6"
        :md="8"
        :sm="12"
        :xs="24"
      >
        <license-item
          :title="item.title"
          :link-to="item.linkTo"
          :image="item.image"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LicenseItem from './LicenseItem'
export default {
  components: {
    LicenseItem
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return null
      }
    }
  }
}
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
