<template>
    <div>
       ============================54、vuex(管理全局共享数据)=========================
      <div>
        接收store数据:
        {{sun}}
      </div>
    </div>
</template>

<script>
  import store from '../store/index'
    export default {
        name: "Vuex_54",
      store,
      data() {
          return {
            number:store.state.number
          }
      },
      computed:{
          sun(){
            return store.state.number
          }
      }
    }
</script>

<style scoped>

</style>
