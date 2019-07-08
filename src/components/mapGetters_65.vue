<template>
  <div>
    ============================65、通过mapGetters 获取状态值=========================
    <div>
      通过mapGetters  获取token 的值为：{{token}}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "mapGetters_65",
      computed:{
          /*
          * 利用mapGetters调用user.js文件中getter对象中的getToken函数
          * */
        ...mapGetters('user',{
          token:'getToken'
        })
      }
    }
</script>

<style scoped>

</style>
