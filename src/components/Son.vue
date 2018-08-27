<template>
  <div>
    <!--
    3、使用父组件传递过来的age变量
    -->
    父组件给了子组件传递的年龄为：{{age}},性别为：{{sex}}
  </div>
</template>

<script>
export default {
  name:"Son",
  data(){
      return {
      }
  },

  /*
  * 2、接受父组件传递过来的变量age和sex变量
  * */
  props:['age','sex']

}
</script>

<style scoped>
  div {
    font-size: 20px;
    color: red;
  }
</style>
