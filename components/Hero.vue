<template>
  <div class="container">
    <div class="hero">
      <el-image class="user-image" :src="userImage" :lazy="true" fit="cover">
        <div slot="error" class="image-error">
          <i class="el-icon-picture" />
        </div>
        <div slot="placeholer" class="image-loading">
          <i class="el-icon-loading" />
        </div>
      </el-image>
      <div class="user-info">
        <h1>Jimmy Yu</h1>
        <h2>Web Technologies Expert</h2>
        <br />
        <h3>Austin, Texas, United States</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  .user-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    min-width: 170px;
    height: 170px;
    min-height: 170px;
    border-radius: 50%;
    border: 5px solid white;
    background-color: grey;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .user-info {
    margin-left: 20px;
    h1,
    h2,
    h3 {
      color: #606060;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.29);
      margin: 0;
    }
    h2,
    h3 {
      font-weight: 300;
    }
    @media (max-width: 767px) {
      text-align: center;
      margin-left: 0;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
