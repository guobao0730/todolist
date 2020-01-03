<template>
    <div ref="root">
      ============================77、动态添加不同组件============================
      <button @click="addComponents">动态添加不同的组件</button>
      <button @click="removeComponents">删除动态添加的组件</button>
      <!--
       :is="item.type" 根据当前类型加载不同的组件
      -->
      <component v-for="(item,index) in componentData" :key="index" :is="item.type" :data="item.itemData"></component>
    </div>
</template>

<script>
  import TextLog from './TextLog'
  import LineChart from './LineChart'
    export default {
        name: "DynamicAdditionOfDifferentComponents_77",
      data(){
        return {
          currentView:'TextLog',
          componentData:[],
        }
      },
      components:{
        TextLog,
        LineChart,
      },
      created(){

      },
      methods:{
        addComponents(){
          for (let i = 0; i <10 ; i++) {
            let type = i === 3?'LineChart':'TextLog';
            this.componentData.push({
              type:type,
              itemData:i+''
            })
          }
        },
          removeComponents(){
            this.componentData = [];
          }
      }
    }
</script>

<style scoped>

</style>
