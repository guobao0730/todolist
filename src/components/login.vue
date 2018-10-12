<template>
  <div>
    ============================该login组件是为了配合router-link而创建的============================
    <div >
        我是登录页面
      <!--
      测试方法：直接在浏览器输入该网址即可 http://localhost:8081/#/home
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
  /*created()函数是vue生命周期中的一个函数
  当DOM还未生成时所调用的函数
  这个函数一般都用来做数据的初始化
  */
  created(){
      /*
       router_link_22 中页面跳转并携带参数
      * 在vue-router中主要挂载了两个对象属性
      * 1、$route  表示用来传递一些信息数据
      * 2、$router  表示用来传递一些功能函数
      * */

     /* console.log("login--id:"+this.$route.query);*/
      console.log("login--id:"+this.$route.params.id);

      /*
      *目前通过query和params这两个关键词都无法正常传递参数，问题还在研究
      * */
  },
  /*
   mounted()函数是vue生命周期中的一个函数
   当DOM生成以后所调用的函数
   这个函数一般都是用来操作DOM
  * */
  mounted(){


  }



}
</script>

<style scoped>
</style>
