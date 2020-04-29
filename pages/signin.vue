<template>
  <div class="signin">
    <el-form>
      <el-form-item label="Email">
        <el-input v-model="email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .el-form {
    width: 300px;
  }
}
</style>
