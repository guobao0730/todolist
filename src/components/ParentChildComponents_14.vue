<template>
  <div>
    ============================14、父子组件的使用============================
    <div>
      <!--

      在父组件中引入子组件
      想在父组件中使用子组件
      1、首先导入子组件对应包(import  Item from './Item')
      2、利用components关键字声明这个子组件   components: {item:Item}
      3、使用这个子组件 (<item></item>)

      -->

      <!--使用子组件-->
      <item></item>

    </div>

  </div>
</template>

<script>
import  Item from './Item'
export default {
  name:"BeautifulStudentList",
  data(){
      return {
      }
  },
  components: {
      /*组件名：子组件对象*/
    item:Item
  }
}
</script>

<style scoped>
</style>
