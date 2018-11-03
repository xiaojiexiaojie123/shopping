<template>
  <div id="app">
    <!-- keep-alive可以对数据进行缓存 -->
    <keep-alive> 
      <router-view/>
    </keep-alive>
    
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  position relative
</style>
