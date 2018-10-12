<template>
    <div>
      ============================30、 moment时间处理类库的学习使用============================
      <div>
        <!--
        Moment 时间处理类库的使用步骤：
        1、安装Moment：npm install moment --save
        2、在main.js文件中导入并使用
          import Moment from 'moment'//导入文件
          Vue.prototype.$moment = Moment;//赋值使用


        3、开始使用
        this.$moment.format('MMMM Do YYYY, h:mm:ss a')
        -->
        <button @click="getTime">开始通过Moment时间插件获取当前的时间</button>
        <div>{{time}}</div>



        <!--
        moment配合过滤器来完成需求
        在main.js文件中定义过滤器
        defaultTime 表示当前为初始化的时间变量
        convertData 表示过滤器的名称
        -->
        <button >开始通过Moment时间插件和过滤器来显示当前的时间</button>
        <div>{{defaultTime | convertData}}</div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "Moment_39",
      data(){
        return {
          time:'',
          /*defaultTime是未初始化的时间
          * '2018-10-11T03:50:28.000Z'
          * */
          defaultTime:'January 12,2006 22:19:35',
        }
      },
      created(){


      },
      methods:{
        getTime(){
          console.log("getTime()被调用了");
          console.log(this.$moment().format('MMMM Do YYYY, h:mm:ss a'));
          //September 9th 2018, 11:54:25 am
          this.time = this.$moment().format('MMMM Do YYYY, h:mm:ss a');


          console.log(this.$moment().format('L'));
          //09/09/2018
        }
      }
    }
</script>

<style scoped>

</style>
