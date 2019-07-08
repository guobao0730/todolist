<template>
    <div>
      ============================64、通过mapState 获取状态值=========================
      <div>
        通过mapState 获取token 的值为：{{token}}
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "mapState_64",
      computed:{
          /*
          * 利用mapState来获取user.js文件中的token状态值
          * */
        ...mapState({
          token:state => state.user.token
        })

      }

    }
</script>

<style scoped>

</style>
