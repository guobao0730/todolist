<template>
  <div>
    ============================16、 父组件传值给子组件============================
    <div>
      <!--
      1、父组件传值给子组件
      age="18"  表示给子组件传递一个常量，当前的age时自定义的，18为传递的字符串数据
      :sex="sex"  表示给子组件传递一个变量，:sex时 v-bind:sex的简写，"sex"中的sex是一个变量
      -->
      <son age="18" :sex="sex" ></son>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            sex:"男"
        }
    }

}
</script>

<style scoped>
</style>
