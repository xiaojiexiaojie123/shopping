<template>
  <div class="me">
    <select-login v-if="!userInfo.user_id" />
  </div>
</template>

<script>
import  SelectLogin from './../Login/SelectLogin'
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
    SelectLogin
  }
}
</script>

<style lang="stylus" scoped>
.me
  max-width 640px
</style>
