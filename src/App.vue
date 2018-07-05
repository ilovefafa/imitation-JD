<template>
  <div class="main">
    <the-header login="true"></the-header>
    <router-view></router-view>
    <bottom-nav></bottom-nav>
    <go-to-top></go-to-top>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import GoToTop from './components/GoToTop.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  components:{
    TheHeader,
    GoToTop,
    BottomNav,
  },
}
</script>

<style lang='scss' scoped>
</style>