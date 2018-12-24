<template>
  <div>
    ============================EChars图表的引入============================
    <!--
    使用步骤
    1、安装Echarts:npm install echarts --save -dev
    2、如果想全局使用使用，那么在main.js文件进行引入
        import echarts from 'echarts'
        Vue.config.productionTip = false
        Vue.prototype.$echarts = echarts
    3、开始使用
    -->
    <div ref="bar_dv"  :style="{width:'600px',height:'400px'}">
    </div>
  </div>

</template>

<script>
export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){

        //用ref获取dom元素，而不要用传统的document.getElementById('main')这种方式，因为会出现BUG
        let bar_dv = this.$refs.bar_dv;
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(bar_dv)
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
}
</script>

<style scoped>

</style>
