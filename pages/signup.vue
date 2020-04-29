<template>
  <div class="signup">
    <el-form class="signup-form">
      <el-form-item label="Full Name">
        <el-input v-model="userInfo.fullName" />
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="userInfo.userName" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="userInfo.email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="userInfo.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="Conform Password">
        <el-input v-model="confirmPassword" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        fullName: '',
        userName: '',
        email: '',
        password: ''
      },
      confirmPassword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  .signup-form {
    width: 300px;
  }
}
</style>
