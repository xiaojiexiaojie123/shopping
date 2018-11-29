<template>
  <div class="me">
    <select-login v-if="!userInfo.user_id" />
    <me-top v-else />
  </div>
</template>

<script>
import SelectLogin from './../Login/SelectLogin'
import MeTop from './Metop'
import { mapState } from 'vuex'
export default {
  name: 'me',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    SelectLogin,
    MeTop
  }
}
</script>

<style lang="stylus" scoped>
.me
  max-width 640px
  position relative
</style>
