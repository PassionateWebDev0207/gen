<template>
  <div class="hero">
    <h1>Jimmy(JiaXiang) Yu</h1>
    <h2>Web Technologies Expert</h2>
    <div class="user-image">
      <el-image>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture"></i>
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 250px;
  padding: 75px 0 105px 0;
  background-image: url('~assets/images/bg-hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f5f5f5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-image {
    position: absolute;
    left: calc((100% - 170px) / 2);
    bottom: -85px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 5px solid white;
    background-color: grey;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  h1,
  h2 {
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.29);
    margin: 0;
  }
  h2 {
    font-weight: 300;
  }
}
</style>
