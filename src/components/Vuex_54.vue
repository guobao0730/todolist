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
    export default {
        name: "Vuex_54",
      /*store,*/
      data() {
          return {
            number:this.$store.state.number
          }
      },
      computed:{
          sun(){
            return this.$store.state.number
          }
      }
    }
</script>

<style scoped>

</style>
