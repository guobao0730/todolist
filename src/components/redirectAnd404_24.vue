<template>
  <div>
    ============================24、重定向和404============================
    <div >
      <!--
      重定向：
      重定向就类似于android中的启动页面，指定那个页面启动
      进入页面时默认就是/
      方式一：
      redirect属性中传入字符串
      {path:'/',redirect:'/home'}

      方式二：（推荐）
      redirect属性中传入对象
      {path:'/',redirect:{name:'home'}}


      -->

      <!--
      404：
      404就是当出现错误时所显示的页面
      404一般在路由规则的最后添加，如果前面的规则都不匹配那么就匹配404的规则
      notFoundVue 就是404的自定义Vue组件
      {path:'*',compponent:notFoundVue}

      path:'*' 表示匹配所有
      详细见main.js文件
      校验方法：输入http://localhost:8080/#/a
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
}
</script>

<style scoped>
</style>
