<template>
    <div>
      ============================76、子父之间的相互调用============================
      <div style="width: 100%;height: 300px;background-color: blue">
        我是父组件
        <button @click="call">调用子组件中的函数</button>
      </div>
      <son-two ref="son"></son-two>
    </div>
</template>

<script>
  import SonTwo from './SonTwo'
    export default {
        name: "ComponentsCallEachOther_76",
      components:{
        SonTwo
      },
      methods:{
        call(){
         // console.log(this.refs.son.msg);
        }
      }
    }
</script>

<style scoped>

</style>
