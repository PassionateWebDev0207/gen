<template>
  <div class="base-layout">
    <Header />
    <div class="main">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.base-layout {
  .main {
    padding: 0;
    height: calc(100vh - 60px);
    overflow: auto;
  }
}
</style>
