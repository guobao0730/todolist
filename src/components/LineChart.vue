<template>
  <div ref="chartDv" style="width: 300px;height: 200px;background-color: yellow"></div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'LineChart',
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      let chartDv = this.$refs.chartDv;
      let echart = echarts.init(chartDv);
      // 绘制图表
      echart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
};
</script>

<style scoped>

</style>
