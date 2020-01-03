<template>
  <div>
    ============================79、矩阵图表============================
    <div ref="chartDv" style="height: 500px;background-color: yellow"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import ecStat from 'echarts-stat';
  export default {
    name: 'ProcessOfClusteringChart',
    props: {
      data: {
        type: Object,
        default: function () {
          return {
            clusteringData: {
              name: '矩阵聚类',
              data: [
                [10.0, 8.04, '严重污染'],
                [8.0, 6.95, '重度污染'],
                [13.0, 7.58, '中度污染'],
                [3.0, 17.58, '中度污染']
              ]
            }
          };
        }
      }
    },
    mounted() {
      this.initEchart();
    },
    methods: {
      initEchart() {
        console.log(this.data);
        let chartDv = this.$refs.chartDv;
        let myChart = echarts.init(chartDv);
        let resultata = this.data.clusteringData.data;
        let categories = this.getCategories(resultata);
        let colors = this.getColors(categories.length);

        let option = {
          title: {
            text: this.data.clusteringData.name
          },
          xAxis: {},
          yAxis: {},
          series: [{
            symbolSize: 10, //调整图表中单个圆形的大小
            data: this.data.clusteringData.data,
            type: 'scatter'
          }],
          visualMap: {
            min: 0,
            max: 10,
            splitNumber: 5,
            color: colors, // 颜色和类别相匹配
            textStyle: {
              color: '#f'
            },
            categories: categories, // 类型和数组中的最后一项数据匹配'重度污染',
          },
          tooltip: {
            show: true
          }
        };
        myChart.setOption(option);
      },
      /*
      * 获取类别数据
      * 当前的类别就是数组中的最后一项数据（'严重污染'）
      * */
      getCategories(resultata) {
        let categories = [];
        for (let i = 0; i <resultata.length; i++) {
          let arrayData = resultata[i];
          let categorie = arrayData[arrayData.length-1];
          if (!categories.includes(categorie)){
            categories.push(categorie);
          }
        }
        return categories;
      },
      /*
      * 根据类别的多少个颜色
      * */
      getColors(length) {
        let colors = [];
        for (let i = 0; i < length; i++) {
          let r = Math.floor(Math.random()*255);
          let g = Math.floor(Math.random()*255);
          let b = Math.floor(Math.random()*255);
          let color = 'rgba('+ r +','+ g +','+ b +',0.8)';
          if (colors.indexOf(color) === -1) {
            colors.push(color);
          }
        }
        return colors;
      }
    }
  };
</script>

<style scoped>

</style>
