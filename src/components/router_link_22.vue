<template>
  <div>
    ============================22、 router-link的学习使用============================
    <div >

      <!--
      方式一：
      通过此种方式也可以实现跳转，不过需要更改路径将会很麻烦，需要更改多个地方，不推荐使用！
      -->
      <a href="#/login">点我进入登录页面</a>
      <a href="#/home">点我进入主页面</a>




      <!--
      方式二：
      通过此种方式也可以实现跳转，不过需要更改路径将会很麻烦，需要更改多个地方，不推荐使用！
      -->
      <router-link to="/login">点我进入到登录页面</router-link>


      <!--
      方式三：
      通过此种方式也可以实现跳转，不过需要更改路径时只需更改main.js中的路径即可，操作相对简单,推荐使用！
      :to 是固定的写法，name 也是，唯一可变的是login
      注意：当前的name:'login'必须是在main.js的规则中定义了的，
          {name:'login', path:'/login',component:login}
          否则无法跳转
      -->
      <router-link :to="{name:'login'}">点我进入到登陆页面</router-link>
      <router-link :to="{name:'home'}">点我进入到主页面</router-link>





      <!--
      router-link对象方式传递参数

      -->
      <div>
        ============================22、router-link对象方式传递参数============================
      </div>
<!--
跳转并传值
 <ul>
        <li v-for="(item,index) in list " :key="index">
          {{item.name}}
          &lt;!&ndash;
          点击查看以后跳转到哪里
          :to="{name:'login' ,query:{id:index}}  表示要跳转到的哪个页面，并且传递对应的参数
          name:'login'    表示点击以后跳转到登录页面
          query:{id:index} 表示跳转页面时所传递的参数,query为固定写法，id是自定义的key，index表示id所对应的值 表示查询

          在login页面通过 this.$route.query.id 获取传递过来的数据

          最终的结果：http://localhost:8081/#/login?id=0
          &ndash;&gt;
          <router-link :to="{name:'login' ,query:{id:index}}">
            查看
          </router-link>
        </li>
      </ul>-->





        <!--路径-->
      <ul>
        <li v-for="(item,index) in list " :key="index">
          {{item.name}}
          <!--
          点击查看以后跳转到哪里
          :to="{name:'login' ,params:{id:index}}  表示要跳转到的哪个页面，并且传递对应的参数
          name:'login'    表示点击以后跳转到登录页面
          params:{id:index}} 表示跳转页面时所设置的路径

          此时必须将mian.js文件中的path:path:'/login' 改为path:'/login/:id'  ，此时的id与params中的id一一对应
          {name:'home', path:'/home',component:home},
          {name:'login', path:'/login/:id',component:login}

           在login页面通过 this.$route.params.id 获取传递过来的数据

          最终的结果： http://localhost:8081/#/login/0
          -->
          <router-link :to="{name:'login' ,params:{id:index}}">
            查看
          </router-link>
        </li>
      </ul>


      <div>
        ============================22、router-link中linkActiveClass属性的使用============================
      </div>
      <!--
      active-class
      类型：string
      默认值："router-link-active"
      主要用来设置链接激活时使用的CSS类名，可以使用构造函数中的linkActiveClass属性来全局配置
      比如在淘宝webApp项目中，当点击底部的4大按钮时，会将当前所点击的按钮设置为高亮的状态，也就是选中的状态，那么就可以使用linkActiveClass属性来全局配置
      给当前选中的标签添加了一个样式，而这个样式可以自定义来实现，mui-active就是类选择器的名称

      配置方式如下：
      let router = new VueRouter({

        linkActiveClass:'mui-active',
        /*
         * routes 当前的KEY是固定的
         * */
        routes:[

          {name:'home', path:'/home',component:home},

          {name:'login', path:'/login/:id',component:login},


            /*表示设置重定向，页面初始直接进入到规则名称为splash的页面，也就是进入到splash页面*/
          {path:'/',redirect:{name:'splash'}},
          {name:'splash', path:'/splash',component:splash},


        ]


      })
      -->





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
      /*定义了一个对象数组*/
        list:[
            {
            name:"张三",
        },
          {
            name:"李四",
          },
        ]
    }
  },
  /*created()函数是vue生命周期中的一个函数
   当DOM还未生成时所调用的函数
   这个函数一般都用来做数据的初始化
   */
  created(){
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
