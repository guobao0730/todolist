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

         this.$moment.locale('zh-cn');
          this.form.createTime  = this.$moment().format("YYYY-MM-DD HH:mm:ss");
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


        <button @click="getCurrentTime">将当前的时间格式化输出</button>

        <button @click="formatTheSpecifiedDate">将指定时间格式化</button>

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
        },

        /*
        * 获取当前格式化以后的日期
        * */
        getCurrentTime: function () {
          this.$moment.locale('zh-cn');
          let dateThree = this.$moment().format('YYYY-MM-DD');
          console.log("dateThree:"+dateThree);
          //dateThree:2019-07-25
        },

        /*
        * 格式化指定日期
        * */
        formatTheSpecifiedDate({date = "January 12,2006 22:19:35"}){
          this.$moment.locale('zh-cn');
          let dateFour = this.$moment(date).format('YYYY-MM-DD');
          console.log("dateFour:"+dateFour);
          //dateFour:2006-01-12
        }
      }
    }
</script>

<style scoped>

</style>
