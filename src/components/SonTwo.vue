<template>
  <div>
    ============================子父之间的相互调用============================
    <div style="width: 100%;height: 300px;background-color: yellow">
      我是子组件{{msg}}
      <button>调用子组件中的函数</button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "SonTwo",
      data(){
          return {
            msg:'0',
          }
      },
      methods:{
          changeMsg(){
            this.msg = "调用成功";
          }
      }
    }
</script>

<style scoped>

</style>
