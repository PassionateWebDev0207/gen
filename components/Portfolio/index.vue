<template>
  <div
    v-loading="!data"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="portfolios"
  >
    <el-tabs v-if="data" type="card">
      <el-tab-pane
        v-for="(category, ind) in getCategories"
        :key="ind"
        :label="category"
      >
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in getDataByCategory(category)"
            :key="index"
            :lg="6"
            :md="8"
            :sm="12"
            :xs="24"
          >
            <portfolio-item
              :image="item.image"
              :title="item.title"
              :link-to="item.linkTo"
            />
          </el-col>
          <el-col
            v-if="getDataByCategory(category).length === 0"
            :lg="6"
            :md="8"
            :sm="12"
            :xs="24"
          >
            <portfolio-item :title="''" :link-to="''" />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem'
export default {
  components: {
    PortfolioItem
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  computed: {
    getCategories() {
      return ['All', ...this.data.categories]
    }
  },
  methods: {
    getDataByCategory(category) {
      return category === 'All'
        ? this.data.data
        : this.data.data.filter((item) => item.category === category)
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolios {
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 0;
  width: calc(100% - 40px);
  .el-tab-pane {
    .el-col {
      margin-bottom: 20px;
    }
  }
}
</style>
