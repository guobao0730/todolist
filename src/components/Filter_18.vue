<template>
  <div>
    ============================18、 过滤器============================
    <div>
      <!--
      什么是过滤器？
      顾名思义，过滤器就是就对数据进行筛选、过滤、格式化，比如时间格式化、英文大小写转换等等。它与methods、computed 或者 watch不同是，它不能改变原始值。


      过滤器的实际使用场景


      过滤器分类：
         1、组件内过滤器
              组件内过滤器就是filters属性，该属性是一个对象

         2、全局过滤器
              全局过滤器的表达式为：Vue.filter('过滤器的名称',该过滤器的具体实现函数)

      注意事项：
        1、当全局过滤器和组件内过滤器重名的时候，那么最终将会以组件内过滤器为基准。
        2、当出现子父组件时，父组件和全局中分别定义了相同名称的过滤器，这是子组件引用过滤器时，将会使用全局的过滤器
      -->

      <el-input placeholder="请输入时间戳"
                v-model="date"
                clearable></el-input>

      <div >
        时间格式化以后的数据为：{{date | dateFormat}}
      </div>


      <el-input placeholder="请输入分数"
                v-model="fraction"
                clearable
      style="margin-top: 30px"
      ></el-input>
      <div >
        该分数的评分结果为：{{fraction | fractionFormat}}
      </div>


      <div>当前的程序运行{{state | stateFilter}}</div>

    </div>

  </div>
</template>

<script>
  import Moment from 'moment'
export default {
    /*组件内过滤器*/
  filters:{
    /**
     * 日期过滤器
     * @param dateStr 日期字符串
     * @returns {string}
     */
    dateFormat:function (dateStr) {
      return Moment(dateStr).format('YYYY-MM-DD');
    },

    /**
     * 分数格式化话过滤器
     * @param fraction 当前的fraction就是  {{fraction | fractionFormat}}  中的fraction
     */
    fractionFormat:function (fraction) {
      let level = '不及格';
      if (fraction<60){
        level = '不及格';
      } else if (fraction>=60&&fraction<80) {
        level = '及格';
      } else if (fraction>=80&&fraction<90) {
        level = '优秀';
      } else if (fraction>=90&&fraction<=100) {
        level = '特别优秀';
      } else {
        level = "您输入的分数有误，请重新输入";
      }
      //返回的就是最终要显示的值
      return level;
    },
    /**
     * 状态过滤器
     * 此过滤器非常适合服务返回给前端状态值，然后前端根据服务器返回的状态值显示不同的文字状态
     * number 表示要过滤的内容
     * 1 表示成功
     * 2 表示失败
     * @param number
     */
    stateFilter(number){
      const stateList = {
        1:"成功",
        2:"失败",
      };
      return stateList[number]
    }
  },
  data(){
    return {
      date:'January 12,2006 22:19:35',
      fraction:"",
      state:"1",
    }
  },
  methods:{


  }

}
</script>

<style scoped>
</style>
