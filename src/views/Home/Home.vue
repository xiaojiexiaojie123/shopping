<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="switchToItem"
      class="hotItem">
    </ly-tab>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // 轮播图
      selectedId: 0,
      items: [
        {label: '热门', path: '/home/hot'},
        {label: '服饰', path: '/home/dress'},
        {label: '鞋包', path: '/home/box'},
        {label: '母婴', path: '/home/mbaby'},
        {label: '百货', path: '/home/general'},
        {label: '食品', path: '/home/food'},
        {label: '内衣', path: '/home/shirt'},
        {label: '男装', path: '/home/man'},
        {label: '电器', path: '/home/ele'}
      ],
      options: {
        activeColor: '#e9232c'
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    }
  },
  methods: {
    // 跳转路由
    switchToItem (item) {
      this.$router.replace(item.path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  background #f5f5f5
  width 100%
  height 100%
  .hotItem
    background #fff
    max-width 640px
    position fixed
    top 0
    z-index 998
</style>
