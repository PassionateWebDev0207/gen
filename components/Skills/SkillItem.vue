<template>
  <div class="skill-item">
    <span class="skill-name">{{ skillName }}</span>
    <el-progress
      :type="type"
      :percentage="percent"
      :color="colors"
    ></el-progress>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'line'
    },
    percent: {
      type: Number,
      default: 0
    },
    skillName: {
      type: String,
      default: ''
    }
  },

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
.skill-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 126px;
  .skill-name {
    width: 100%;
    overflow: hidden;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
