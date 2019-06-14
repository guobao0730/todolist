<template>
    <div>
      ============================50、进度条对话框============================
      <div>
        <button @click='show'>显示进度条对话框</button>
      </div>
      <progress-dialog
        :isShowDialog="isShowProgressDialog"
        v-on:hideDialog="isShowProgressDialog = false"
        @complete = "complete"
      ></progress-dialog>
    </div>
</template>

<script>
  import ProgressDialog from './ProgressDialog'
    export default {
        name: "ProgressDialog_50",
      data(){
        return {
          isShowProgressDialog:false,
        }
      },
      components:{
        ProgressDialog
      },
      methods:{
        complete(){
          this.isShowProgressDialog = false;
          console.log("进度条执行完毕了");
        },
        show(){
          this.isShowProgressDialog = true;
        }
      }
    }
</script>

<style scoped>

</style>
