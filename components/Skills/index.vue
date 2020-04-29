<template>
  <div class="container">
    <div class="skills">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="8" :md="6" :lg="3" :xl="2">
          <skill-item
            :skill-name="'JavaScript'"
            :percent="14"
            :type="'circle'"
          />
        </el-col>
        <el-col :xs="12" :sm="8" :md="6" :lg="3" :xl="2">
          <skill-item
            :skill-name="'asfdsasfdasdfasdasdfasdfsd'"
            :percent="14"
            :type="'circle'"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SkillItem from './SkillItem'
export default {
  components: {
    SkillItem
  }
}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  padding: 25px 10px 10px 10px;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-row {
    width: 100%;
    .el-col {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
