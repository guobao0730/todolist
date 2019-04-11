<template>
  <el-dialog title="正在检测中......" :visible="isShowDialog" @close="hideData()" width="30%">
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage"
                 status="success"></el-progress>
  </el-dialog>
</template>

<script>
  export default {
    name: "ProgressDialog",
    data() {
      return {
        percentage: 0,

      }
    },
    props: {
      isShowDialog: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      hideData() {
        this.$emit("hideDialog");
      },

      /**
       * 显示进度条百分比
       */
      showPercentage(){
        let this_ = this;
        let progressnuw =0;
        let timer = setInterval(() => {
          progressnuw++;
          if (progressnuw >= 100) {
            clearInterval(timer);
            this.$emit("complete")
          }
          this.percentage = progressnuw;
        }, 30)
      }
    },

    watch: {
      isShowDialog: function (newState) {
        if (newState) {
          this.showPercentage();
        }
      }
    }


  }
</script>

<style scoped>

</style>
