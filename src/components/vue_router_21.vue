<template>
  <div>
    ============================21、 vue-router的学习使用============================
    <div >
      <!--
      vue-router 是Vue中的核心插件,它是处理路由的

      Vue中的核心插件:
        1、vue-router 是处理Vue路由的
        2、vuex 管理全局共享数据


      vue-router 的使用方式
      1、下载vue-router：cnpm install vue-router
      2、在要main.js的文件中引入
            import Vue from 'vue'
            import VueRouter from 'vue-router'

            Vue.use(VueRouter)

      3、创建路由对象并配置路由规则(在main.js文件中完成`)
      4、将其路由对象传递给Vue实例,options中(在main.js文件中完成`)
      5、留坑（在App.vue中的div中加入<router-view></router-view>）

      6、校验是否配置成功只需输入次地址即可  http://localhost:8081/#/home

      所有的前端路由核心就是描点值的改变，根据不同的值，渲染指定DOM位置的不同数据
      在Vue中，模板数据不是通过ajax请求来的，而是调用函数获取模板内容

      核心：描点值的改变
      vue-router是专门针对vue的一个插件，以后看到Vue开头的就必须利用Vue.use

      路由底层是基于描点值的改变显示不同模板
      没太听懂，待研究！！！
      -->

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
        value:true,
    }
  },
  methods:{

  },
  mounted(){


  }



}
</script>

<style scoped>
</style>
