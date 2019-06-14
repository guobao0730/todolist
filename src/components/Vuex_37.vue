<template>
  <div>
    ============================37、vuex(管理全局共享数据)=========================
    <el-button @click="addNumber">添加个数</el-button>

    <!--
    设置数据组件
    Vuex的简单使用案例
    -->
  </div>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "vue2-preview_36",
    store,
    data() {
      return {}

    },
    methods: {
      addNumber() {
        /*
        * store.commit('setNumber') 表示通过commit函数调用index.js文件中的setNumber函数
        * */
        store.commit('setNumber')
      }

    }
  }
</script>

<style scoped>

</style>
