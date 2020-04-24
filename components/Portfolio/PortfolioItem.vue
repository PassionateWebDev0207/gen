/* eslint-disable vue/no-v-html */
<template>
  <el-card :body-style="{ padding: 0 }" shadow="hover">
    <div class="portfolio-image" :style="{ backgroundImage: `url(${image})` }">
      <div class="description">
        <a v-if="linkTo" :href="linkTo" target="_blank">{{ title }}</a>
        <a v-else>{{ title }}</a>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    image: {
      type: String,
      default: ''
    },
    linkTo: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  padding: 0;
  &__body {
    .portfolio-image {
      width: 100%;
      height: 300px;
      background-color: grey;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      .description {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: black, $alpha: 0.6);
        transition: opacity 0.5s ease;
        a {
          text-decoration: none;
          text-align: center;
          font-size: 24px;
          color: #409eff;
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
