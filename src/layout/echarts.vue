<template>
  <div class="container">
    <a-layout class="layout">
      <a-layout-sider theme='light' class="aside">
        <a-menu
          mode="inline"
          :default-selected-keys="[activePage]"
          :defaultOpenKeys="[activeModule]"
          @click="handleClick"
          theme='light'
        >
          <a-sub-menu key="echarts">
            <span slot="title">echarts</span>
            <a-menu-item key="pie">pie</a-menu-item>
            <a-menu-item key="line">line</a-menu-item>
            <a-menu-item key="guage">guage</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <router-view></router-view>
    </a-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeModule: 'echarts',
      activePage: 'pie'
    }
  },
  created () {
    const [module, page] = this.$route.path.split('/').slice(1)
    console.log(module, page)
    this.activeModule = module
    this.activePage = page
  },
  methods: {
    handleClick ({ key }) {
      this.$router.push('/echarts/' + key)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #C0E0FF;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  .layout {
    background: #C0E0FF;
    height: 100%;
  }
  .aside {
    margin-right: 20px;
  }
}
</style>
