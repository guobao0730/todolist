<template>
  <div>
    ============================68、Vue中mixins(混入)的使用=========================

    <file :assemblyData="fileDataList" @save="saveData"></file>
    <s-q-l :assemblyData="sQLDataList" @save="saveData"></s-q-l>

  </div>
</template>

<script>
import File from './File'
import SQL from './SQL'
    export default {
        name: "Mixins_68",
      data(){
        return {
          fileDataList:{
            name:"记录表",
            tableData:[]
          },
          sQLDataList:{
            name:"SQL1",
            desc:""
          },
        }
      },
      components:{
        File,
        SQL
      },
      created(){
        for (let i = 0; i <5 ; i++) {
          this.fileDataList.tableData.push({
            name:"记录表"+i,
            time:"2019/07/"+(i+1),
            type:"文本文档",
            size:(i+1)+"Kb"
          })
        }
      },
      methods:{
        saveData(data){
          this.$message.info(JSON.stringify(data))
        },

      }


    }
</script>

<style scoped>

</style>
