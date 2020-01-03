<template>
  <div>
    ============================80、ROC曲线============================
    <div ref="chartDv" :style="'width:'+width+';height: '+height+';background-color: yellow'"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  export default {
    name: 'ROCCurveChart',
    props: {
      data: {
        type: Object,
        default: function () {
          return {
            rocData: {
              name: 'ROC曲线',
              x: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0],
              y: [0.0, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
            }
          };
        }
      }
    },
    data() {
      return {
        width:'30%',
        height:''
      }

    },
    created(){
    },
    mounted() {

      this.setHeight();
      this.$nextTick(function () {
        this.initEchart();
      });

    },
    methods: {
      /*
      动态设置容器的高
      */
      setHeight(){
        let chartDv = this.$refs.chartDv;
        console.log(chartDv);
        let width =  chartDv.clientWidth;
        console.log("width:"+width);
        this.height = width+'px';
      },
      initEchart() {
        console.log(this.data);
        let dashedLineData = this.getDashedLineData(this.data.rocData.y);
        let chartDv = this.$refs.chartDv;
        let echart = echarts.init(chartDv);
        // 绘制图表
        echart.setOption({
          title: {
            text: this.data.rocData.name
          },
          tooltip: {},
          grid: {
            left: 50
          },
          xAxis: {
            name:'false positive rate',
            nameLocation:'center',
            nameGap:30,
            type: 'category',
            boundaryGap: false,
            data: this.data.rocData.x
          },
          yAxis: {
            name:'true positive rate',
            nameLocation:'center',
            nameGap:30,
            type: 'value'
          },
          series: [{
            data: this.data.rocData.y,
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'red' // 0% 处的颜色
                }, {
                  offset: 1, color: 'blue' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
          },
            {
              data: dashedLineData,
              type: 'line',
              lineStyle: {
                normal: {
                  color: 'green',
                  width: 2,
                  type: 'dashed'
                }
              },
            },
          ]
        });
      },
      getDashedLineData(yDatas){
        let dashedLineData = [];
        let differenceValue  = yDatas[yDatas.length-1]/yDatas.length;
        for (let i = 0; i <yDatas.length ; i++) {
          dashedLineData.push(differenceValue*i);
        }
        return dashedLineData;
      }
    }
  };
</script>

<style scoped>

</style>
