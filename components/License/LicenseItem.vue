<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div :style="{ backgroundImage: `url(${image})` }">
      <div class="description">
        <h2>{{ title }}</h2>
        <a v-if="linkTo" :href="linkTo" target="_blank">View Detail</a>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    linkTo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  padding: 0;
  &__body {
    > div {
      width: 100%;
      height: 300px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .description {
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.6);
        transition: opacity 0.5s ease;
        h2 {
          color: white;
          text-align: center;
        }
        a {
          color: #409eff;
          text-decoration: none;
          text-align: center;
          &:hover {
            text-decoration: underline;
          }
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
