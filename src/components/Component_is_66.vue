<template>
  <div>
    ============================66、通过component标签加上is属性动态切换组件=========================
    <div>
      <el-button @click="switchComponent">切换组件</el-button>
    </div>
    <component :is="currentView" />
  </div>
</template>

<script>
  import ComponentA from './ComponentA'
  import ComponentB from './ComponentB'
  export default {
    name: "Component_is_66",
    data(){
      return {
        currentView:"ComponentA" //ComponentA表示的是当前的组件
      }
    },
    components:{
      ComponentA,
      ComponentB
    },
    methods:{
      switchComponent(){
        if (this.currentView==="ComponentA"){
          this.currentView = "ComponentB";
        } else {
          this.currentView = "ComponentA";
        }
      }
    }
  }
</script>

<style scoped>

</style>
