<template>
    <div>
      ============================82、箱线图============================
      <div ref="chartDv" style="width: 500px;height: 500px"></div>
    </div>
</template>

<script>
  import echarts from 'echarts';
    export default {
        name: "Boxplot_82",
      props:{
        chartData: {
          type:Object,
          default:function () {
            return {
              boxplotData:[
                [3.1499999999999986, 5.1, 5.8, 6.4, 8.350000000000001],  //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
                [2.05, 2.8, 3, 3.3, 4.05],
                [-3.649999999999999, 1.6, 4.3, 5.1, 10.349999999999998],
                [-1.95, 0.3, 1.3, 1.3, 4.05]
              ],
              outliers:[],       //异常值数据
              averageValue:[  // 平均值
                [0, 5.1],     // [0, 750],0表示boxplotData箱线图数据的下标，750表示平均值
                [1, 2.8],
                [2, 1.6],
                [3, 0.3]
              ],
            }
          }
        }
      },
      data(){
          return {
            boxplotDataOne:[
               [655, 850, 940, 980, 1070],  //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
               [760, 800, 845, 885, 960],
               [780, 840, 855, 880, 940],
               [720, 767.5, 815, 865, 920],
               [740, 807.5, 810, 870, 950]
             ],
            boxplotDataTwo:[
              [4.3,5.1,5.8,6.4,7.9],
              [2.0,2.8,3.0,3.3,4.4],
              [1.0,1.6,4.3,5.1,6.9],
              [0.1,0.3,1.3,1.8,2.5]
            ],
            outliers:[   //异常值数据
              [0, 650],       //[0, 650] 0表示boxplotDataOne数据中的下标，对应的是一组箱线图数据，650表示异常值
              [2, 620],
              [2, 720],
              [2, 720],
              [2, 950],
              [2, 970]
            ],
            averageValue:[  // 平均值
              [0, 750],     // [0, 750],0表示箱线图数据的下标，750表示平均值
              [1, 800]
            ],
/*            chartData:{
              boxplotData:[
                [655, 850, 940, 980, 1070],  //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
                [760, 800, 845, 885, 960],
                [780, 840, 855, 880, 940],
                [720, 767.5, 815, 865, 920],
                [740, 807.5, 810, 870, 950]
              ],
              outliers:[   //异常值数据
                [0, 650],       //[0, 650] 0表示boxplotData箱线图数据中的下标，650表示异常值
                [2, 620],
                [2, 720],
                [2, 950],
                [2, 970]
              ],
              averageValue:[  // 平均值
                [0, 870],     // [0, 750],0表示boxplotData箱线图数据的下标，750表示平均值
                [1, 850],
                [2, 860],
                [3, 840],
                [4, 860],
              ],
            }*/

            testData:{
              boxplotData:[
                [655, 850, 940, 980, 1070],  //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
                [760, 800, 845, 885, 960],
                [780, 840, 855, 880, 940],
                [720, 767.5, 815, 865, 920],
                [740, 807.5, 810, 870, 950]
              ],
              outliers:[   //异常值数据
                [0, 650],       //[0, 650] 0表示boxplotData箱线图数据中的下标，650表示异常值
                [2, 620],
                [2, 720],
                [2, 950],
                [2, 970]
              ],
              averageValue:[  // 平均值
                [0, 870],     // [0, 750],0表示boxplotData箱线图数据的下标，750表示平均值
                [1, 850],
                [2, 860],
                [3, 840],
                [4, 860],
              ],
            },
            testData2:{
              boxplotData:[
                [3.1499999999999986, 5.1, 5.8, 6.4, 8.350000000000001],  //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
                [2.05, 2.8, 3, 3.3, 4.05],
                [-3.649999999999999, 1.6, 4.3, 5.1, 10.349999999999998],
                [-1.95, 0.3, 1.3, 1.3, 4.05]
              ],
              outliers:[],       //异常值数据
              averageValue:[  // 平均值
                [0, 5.1],     // [0, 750],0表示boxplotData箱线图数据的下标，750表示平均值
                [1, 2.8],
                [2, 1.6],
                [3, 0.3]
              ],
            }
          }
      },
      mounted(){
          this.initEchart();
      },
      methods:{
          /*
 +-------+------------------+-------------------+------------------+------------------+

|summary|           Length1|             Width1|           Length2|            Width2|

+-------+------------------+-------------------+------------------+------------------+

|  count|               150|                150|               150|               150|

|   mean| 5.843333333333335| 3.0540000000000007|3.7586666666666693|1.1986666666666672|

| stddev|0.8280661279778637|0.43359431136217375| 1.764420419952262|0.7631607417008414|

|    min|               4.3|                2.0|               1.0|               0.1|

|    25%|               5.1|                2.8|               1.6|               0.3|

|    50%|               5.8|                3.0|               4.3|               1.3|

|    75%|               6.4|                3.3|               5.1|               1.8|

|    max|               7.9|                4.4|               6.9|               2.5|

+-------+------------------+-------------------+------------------+------------------+
          * */

          initEchart(){
            console.log(this.chartData);



            console.log(this.chartData.boxplotData);
            console.log(this.testData2.boxplotData);

            let boxplotDatas = this.chartData.boxplotData;
            for (let i = 0; i <boxplotDatas.length ; i++) {
              let boxplotData = boxplotDatas[i];
              for (let j = 0; j < boxplotData.length; j++) {
                let value = boxplotData[j];
                console.log(typeof value);
              }

            }

            let xAxisData = this.getXAxisData(this.chartData.boxplotData.length);
            console.log(xAxisData);

            console.log(this.chartData.outliers);
            console.log(this.testData2.outliers);


            console.log(this.chartData.averageValue);
            console.log(this.testData2.averageValue);


            let chartDv = this.$refs.chartDv;
            let echart = echarts.init(chartDv);

            let chartDataStr = JSON.stringify(this.chartData);
            console.log("chartDataStr:"+chartDataStr);

            /*
          {boxData: Array(5), outliers: Array(6), axisData: Array(5)}
          axisData: (5) ["0", "1", "2", "3", "4"]
          boxData: Array(5)
          0: (5) [655, 850, 940, 980, 1070]
          1: (5) [760, 800, 845, 885, 960]
          2: (5) [780, 840, 855, 880, 940]
          3: (5) [720, 767.5, 815, 865, 920]
          4: (5) [740, 807.5, 810, 870, 950]
          length: 5
          __proto__: Array(0)
          outliers: Array(6)
          0: (2) [0, 650]
          1: (2) [2, 620]
          2: (2) [2, 720]
          3: (2) [2, 720]
          4: (2) [2, 950]
          5: (2) [2, 970]
          length: 6
            * */

            echart.setOption({
              title: [
                {
                  text: '箱线图',
                  left: 'center',
                  show:true,
                }
              ],
              tooltip: {
                trigger: 'item',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
              },
              xAxis: {
                type: 'category',
                data: ["名称0", "名称1", "名称2", "名称3"],
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                  show: false
                },
                axisLabel: {
                  formatter: 'expr {value}'
                },
                splitLine: {
                  show: false
                }
              },
              yAxis: {
                type: 'value',
                name: 'Y轴值',
                splitArea: {
                  show: true
                }
              },
              dataZoom: [
                {
                  type: 'inside', //inside 表示内置型区域数据缩放组件
                  start: 0,       // 数据窗口的起始百分比，取值范围0~100，表示0%~100%
                  end: 20         // 数据窗口范围的结束百分比，取值范围0~100；表示0%~100%
                },
                {
                  show: true,
                  height: 20,     // 表示该缩放组件的高度
                  type: 'slider', //slider表示滑动条型数据区域缩放组件
                  top: '90%',     //缩放组件离上侧的距离
                  xAxisIndex: [0],
                  start: 0,       //数据窗口范围的起始百分比；取值范围0~100，表示0%~100%
                  end: 20         //数据窗口范围的结束百分比；取值范围0~100，表示0%~100%
                }
              ],
              series: [
                {
                  name: 'boxplot',
                  type: 'boxplot',            //boxplot表示指定图形为箱线图
                  data: this.chartData.boxplotData,
                  tooltip: {
                    formatter: function (param) {
                      return [
                        '' + param.name + ': ',
                        '上边缘: ' + param.data[5],
                        '上四位数: ' + param.data[4],
                        '中位数: ' + param.data[3],
                        '下四分位数: ' + param.data[2],
                        '下边缘: ' + param.data[1]
                      ].join('<br/>');
                    }
                  }
                },
                {
                  symbolSize: 5, //圆点的大小
                  name: '异常值',
                  type: 'scatter',              //scatter 表示散点图
                  data: this.chartData.outliers           // 异常值数据
                },
                {
                  symbolSize: 5, //圆点的大小
                  name: '平均值',
                  type: 'scatter',
                  data: this.chartData.averageValue           // 平均值
                }
              ]
            })
        },
        getXAxisData(length){
            let xAxisData = [];
          for (let i = 0; i <length ; i++) {
            xAxisData.push('名称'+i);
          }
          return xAxisData;
        }
      }
    }
</script>

<style scoped>

</style>
