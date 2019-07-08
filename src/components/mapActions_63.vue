<template>
    <div>
      ============================63、通过mapActions 设值=========================
      <div>
        <el-button @click="setToken('123')">通过mapActions 设置值</el-button>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: "mapActions_63",
      methods:{
          /*
          方式一：
          通过mapActions设置状态值
          * user 表示store/modules/user.js文件
          * setToken 表示user.js文件中actions对象中的函数
          * */
        ...mapActions('user',['setToken']),

        setData(){
          /*
          * 方式二：
          * 通过异步dispatch设置状态值
          * user/setToken  表示store/modules/user.js文件夹中的setToken函数
          * 123 表示调用setToken函数要传递的参数
          * */
          this.$store.dispatch('user/setToken','123');
        }
      }
    }
</script>

<style scoped>

</style>
