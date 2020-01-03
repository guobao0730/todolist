<template>
  <div id="root123" ref="root123">
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
    <div ref="bar_dv"  :style="{height:'400px'}">
    </div>

    <button @click="createChart">动态创建</button>
    <line-chart v-for="(item,index) in charts" :key="index"></line-chart>
  </div>

</template>

<script>
  import LineChart from './LineChart'
export default {
    name: 'hello',
    props:{
      chartData: {
        type:Object,
        default:function () {
          return {
            name:'图表名称',
            data:[5, 20, 36, 10, 10, 20]
          };
        }
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        charts:[
          {
            name:"图1",
            data:[]
          },
          {
            name:"图2",
            data:[]
          }
        ]
      }
    },
    components:{
      LineChart,
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){

        //用ref获取dom元素，而不要用传统的document.getElementById('main')这种方式，因为会出现BUG
        let bar_dv = this.$refs.bar_dv;
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(bar_dv);
        // 绘制图表
        myChart.setOption({
          title: { text: this.chartData.name },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.chartData.data
          }]
        });
      },
      createChart(){
        this.getSon();
        let div = document.getElementById('root123');
        console.log(div);
        let sunDiv = document.createElement("div");
        //给li设置属性
        sunDiv.setAttribute("class", "runLogEchart");
        sunDiv.setAttribute("width", "300px");
        sunDiv.setAttribute("height", "300px");
        /*let dom = document.createelement(`<div class="runlogechart">我是图表div</div>`);*/
        div.appendChild(sunDiv);
       /* let dom =  document.getElementsByClassName('runLogEchart');*/

        let this_ = this;
        setTimeout(function () {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this_.$echarts.init(sunDiv);
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
        },1000);


      },
      getSon(){
        let root = this.refs.root123;
        console.log(root);
      }
    }
}
</script>

<style scoped>

  .runLogEchart {
    width: 300px;
    height: 200px;
    background-color: yellow;
  }

</style>
