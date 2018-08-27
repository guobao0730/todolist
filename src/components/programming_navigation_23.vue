<template>
  <div>
    ============================23、 编程导航的学习使用============================
    <div >
      <!--
      如果当前不能保证用户一定会点击某些按钮，并且当前操作除了路由跳转以外，还有别的附加操作
      this.$router.go
      根据浏览器记录前进 或 后退
      this.$router.go(-1)    表示返回上一页
      this.$router.go(1)     表示下一页


      this.$router.push()
      表示直接跳转到某一个页面显示，括号中的参数
      1、可以传递字符串("/home")
      2、也可以传递对象{name:'home'}   注意：此时的name是固定的写法，'home'是根据main.js文件中规则的名称
      {name:'home', path:'/home',component:home},  如果没有指定规则，那么传递对象时将会报错
      -->
      <button @click="gotoMovie">跳转到电影</button>

      <button @click='passingParameter'>编程导航传递参数</button>

    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
export default {
  data(){
    return {
        value:true,
    }
  },
  methods:{

      //跳转到电影
    gotoMovie(){
        /*
        方式一：
         可以传递字符串("/home")
        表示点击电影以后跳转到电影页面
        注意：此时在跳转到电影页面时，必须在main.js文件中配置一条规则,否则将无法实现跳转
         {name:'movie', path:'/movie',component:movie}
        * */
        this.$router.push('/movie');

        /*
        * 方式二：
        * 也可以传递对象{name:'home'}   注意：此时的name是固定的写法，'home'是根据main.js文件中规则的名称
        * */
        /*this.$router.push({
          name:'movie'
        });*/
    },
    passingParameter(){
      /*
      * 利用编程导航跳转页面并传递参数
      * http://localhost:8081/#/movie?id=13&name=%E5%BC%A0%E4%B8%89
      * 此时query中的id和name属性都是自定义的,只有外部的name:'movie' 中的name才是固定的
      * */
        this.$router.push({
          name:'movie',
          query:{
              id:13,
            name:"张三"
          }
        })
    }

  },
  mounted(){


  }



}
</script>

<style scoped>
</style>
