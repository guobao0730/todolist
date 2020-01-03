<template>
    <div>
      ============================81、ES6中类中单例模式的使用============================
      <div>

      </div>
    </div>
</template>

<script>
  import ChartUtil from '../utils/chartUtils'
    export default {
        name: "Class_81",
      created(){
        this.chartutil =  ChartUtil.getInstace();
        if (this.chartutil.isContainChartData('21')){
          console.log('包含图表数据');
        } else {
          console.log('不包含图表数据');
          //不包含图表数据
        }
      }
    }
</script>

<style scoped>

</style>
