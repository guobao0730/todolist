<template>
    <div>
      ============================48、vuex(全局状态管理)=========================
      <!--
      使用步骤
      1、安装：npm install vuex --save -dev
      2、在mian.js文件中配置store
      3、编写要全局共用的属性，比如store文件下的index文件
      4、开始使用
      -->
      <button @click="setValue">设置全局使用的值</button>
      <button @click="getValue">获取数据</button>

    </div>
</template>

<script>
  import { mapMutations ,mapGetters } from 'vuex'
    export default {
        name: "Vuex_48",
      methods:{
          /*
          * 设置值所需配置
          * 当前mapMutations中的Mutations对应的是store/index文件中的mutations
          * */
        ...mapMutations(['setToken']),
        setValue(){
          this.setToken("testData");
        },
        getValue(){
         let token =  this.getTokenValue;
         console.log("token:"+token);
         //token:testData
        }
      },

      /*
      * 获取值所需配置
      *  当前mapGetters中的Getters对应的是store/index文件中的getters
      * */
      computed:{
        ...mapGetters(['getToken']),
        getTokenValue() {
          return this.getToken;
        },
      }
    }
</script>

<style scoped>

</style>
