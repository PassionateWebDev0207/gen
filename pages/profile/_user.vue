<template>
  <div class="cv-container">
    <!-- Hero -->
    <hero />
    <!-- summary -->
    <Summary />
    <el-row>
      <el-col :sm="12" :xs="24">
        <!-- Education -->
        <h2 class="title">education</h2>
        <education />
      </el-col>
      <el-col :sm="12" :xs="24">
        <!-- Experience -->
        <h2 class="title">experience</h2>
        <work-experience />
      </el-col>
    </el-row>
    <!-- Skills -->
    <h2 class="title">skills</h2>
    <skills />
    <!-- license and certifications -->
    <h2 class="title">licenses & certifications</h2>
    <licenses :data="getLicenses" />
    <!-- portfolio -->
    <h2 class="title">portfolios</h2>
    <portfolio :data="getPortfolios" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Summary from '@/components/Summary'
import Education from '@/components/Education'
import Licenses from '@/components/License/index'
import Portfolio from '@/components/Portfolio/index'
import WorkExperience from '@/components/WorkExperience'
export default {
  components: {
    Hero,
    Skills,
    Summary,
    Education,
    Licenses,
    Portfolio,
    WorkExperience
  },
  computed: {
    ...mapGetters('modules/portfolio', [
      'getPortfolios',
      'getPortfolioLoadStatus'
    ]),
    ...mapGetters('modules/license', ['getLicenses', 'getLicenseLoadStatus'])
  },
  created() {
    this.GET_PORTFOLIOS('jimmy yu')
    this.GET_LICENSES('jimmy yu')
  },
  methods: {
    ...mapActions('modules/portfolio', ['GET_PORTFOLIOS']),
    ...mapActions('modules/license', ['GET_LICENSES'])
  }
}
</script>

<style lang="scss" scoped>
.cv-container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: #606060;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
  .title {
    margin: 50px 0 20px 0;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
