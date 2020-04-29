<template>
  <div class="header">
    <el-input
      v-model="search"
      placeholder="Search people"
      class="search-global"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-avatar icon="el-icon-user-solid"></el-avatar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 99;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 2px 2px 12px rgba($color: #000000, $alpha: 0.5);
  .search-global {
    width: calc(100vw - 100px);
    max-width: 240px;
    margin-right: 20px;
  }
}
</style>
