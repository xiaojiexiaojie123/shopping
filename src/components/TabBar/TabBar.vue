<template>
  <div class="navbar" v-show="$route.meta.tabBarShow">
    <div
      class="foot-item"
      v-for='(item, index) in items'
      v-bind:key= index
      @click="switchTo(item.path)">
      <img :src="$route.path.includes(item.path) ? item.selected : item.normal" alt="">
      <p :style="{color: $route.path.includes(item.path) ? 'red' : ''}">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      items: [
        {
          title: '首页',
          path: '/home',
          normal: require('./../../../static/img/icon_home.png'),
          selected: require('./../../../static/img/icon_home_selected.png')
        },
        {
          title: '推荐',
          path: '/recommend',
          normal: require('./../../../static/img/icon_intro.png'),
          selected: require('./../../../static/img/icon_intro_selected.png')
        },
        {
          title: '搜索',
          path: '/search',
          normal: require('./../../../static/img/icon_search.png'),
          selected: require('./../../../static/img/icon_search_selected.png')
        },
        {
          title: '聊天',
          path: '/chat',
          normal: require('./../../../static/img/icon_chat.png'),
          selected: require('./../../../static/img/icon_chat_selected.png')
        },
        {
          title: '个人中心',
          path: '/me',
          normal: require('./../../../static/img/icon_mine.png'),
          selected: require('./../../../static/img/icon_mine_selected.png')
        }
      ]
    }
  },
  // mounted () {
  //   console.log(this.$route)
  // },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.navbar
  max-width 640px
  width 100%
  height .82rem
  display flex
  align-items center
  position fixed
  bottom 0
  padding 8px 0 3px 0
  background #fff
  .foot-item
    flex 1
    text-align center
    font-size 14px
    img
      width 35%
      margin-bottom 2px
</style>
