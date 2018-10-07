<template>
  <div id="app">
    <router-view/>
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
