<template>
    <div>
      ============================48、vuex(全局状态管理)=========================
      <!--
      在学习Vuex之前，要先了解单向数据流的概念:
      Actions=>Statr=>View=>Actions
      我们页面是由很多个页面组成的，用户的操作会影响到视图上的状态，而这个状态又会影响视图
      通过Vuex 可以对组件的状态进行统一管理

      Vuex 是什么？
          状态管理模式

          特点：
            1、对组件状态进行集中管理

      Vuex的使用场景：
      1、当多个组件，也就是多个视图需要依赖同一个状态时，就需要用到Vuex。比如菜单导航，当前是否登录、记录登录以后的token方便其他组件中的服务调用、用户信息等


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
