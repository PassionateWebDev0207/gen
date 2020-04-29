<template>
  <div class="base-layout">
    <Header />
    <div class="main">
      <nuxt-child />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
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
