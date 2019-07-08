<template>
  <div>
    ============================37、vuex(管理全局共享数据 全局状态管理)=========================
    <el-button @click="addNumber">添加个数</el-button>

    <!--
    设置数据组件
    Vuex的简单使用案例
    -->
  </div>
</template>

<script>
 /* import store from '../store/index'*/
  export default {
    name: "vue2-preview_36",
 /*   store,*/
    data() {
      return {}

    },
    methods: {
      addNumber() {
        /*
        * store.commit('setNumber') 表示通过commit函数调用index.js文件中的setNumber函数
        * Vuex_54.vue 组件查看结果
        * */
        this.$store.commit('setNumber');

        /*
        this.$store.commit('setToken','123');  表示通过commit关键字调用index.js文件中的setToken函数，并传入123
        * */
        this.$store.commit('setToken','123');
      }

    }
  }
</script>

<style scoped>

</style>
