<template>
  <div>
    ============================55、driver.js（页面分布引导开源库）=========================
    <div>
      <!--
      使用步骤：
      1、安装driver.js
          npm install driver.js
      2、将driver.js引入到Vue组件中
          import Driver from 'driver.js';
          import 'driver.js/dist/driver.min.css';

      3、实例化Driver，并定义步骤，启动


      使用场景：
      1、视频网页的关灯小工具
      2、第一次使用网站时的引导工具
      -->


      <el-button id="eb-send">发送</el-button>
      <el-button id="eb-add">添加</el-button>

      <el-button @click="startDriver">启动页面分布引导</el-button>


    </div>
  </div>
</template>

<script>
  import Driver from 'driver.js'
  import 'driver.js/dist/driver.min.css';
  import steps from '../utils/steps'

  export default {
    name: "Driver_55",
    data(){
      return {
        driver:null
      }
    },
    mounted(){
      //实例化Driver
      this.driver = new Driver({
        //此处为api
        animate: true,          //是否启动动画
        opacity: 0.75,             //背景透明度设置，0表示背景完全透明
        allowClose: false,
        doneBtnText: '完成',
        closeBtnText: '关闭',
        nextBtnText: '下一个',
        prevBtnText: '上一个',

        onReset: (Element)=>{
          //这里写逻辑回调
        },
      });
    },
    methods: {
      startDriver() {

        //定义步骤
        this.driver.defineSteps(steps);
        //启动
        this.driver.start();


      }
    }
  }
</script>

<style scoped>

</style>
