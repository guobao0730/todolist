<template>
  <div>
    ============================在el-dialog对话框中显示echarts图表============================

    <div>
      <el-button type="primary" @click="showDialogEcharts()">显示对话框图表</el-button>
    </div>


    <!--节点指标对话框-->
    <node-index-dialog
      v-if="isShowDialog"
      :isShowDialog="isShowDialog"
      v-on:hideDialog="isShowDialog=false"
    ></node-index-dialog>



  </div>
</template>

<script>
  import NodeIndexDialog from './NodeIndexDialog'
    export default {
        name: "Dialog_Echarts_49",
      data(){
        return {
          isShowDialog:false,
        }
      },
      components:{
        NodeIndexDialog,
      },
      mounted(){

      },
      methods:{
        showDialogEcharts(){
          this.isShowDialog = true;
        },



      }
    }
</script>

<style scoped>

</style>
