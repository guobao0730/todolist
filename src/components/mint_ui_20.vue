<template>
  <div>
    ============================20、 mint-ui的学习使用============================
    <div >
      <!--
      mint-ui是饿了吗公司出品的，饿了吗还出了一个PC端使用的element-ui，
      其实mint-ui是element-ui的移动端版本


      1、 安装
      npm install mint-ui -S

      2、在mian.js文件中引入全部组件
      import Mint from 'mint-ui';
      Vue.use(Mint);
      -->
      <button @click="toast">点击弹出Toast</button>


      <!--mint-ui中的开关-->
      <mt-switch v-model="value"></mt-switch>




    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
        value:true,
    }
  },
  methods:{
    toast(){
        console.log("执行了该函数")
      /**
       * 使用Toast：
       * 1、导包（import { Toast } from 'mint-ui';）
       * 2、直接使用Toast即可
       *      当前的Toast对象是mint-ui中的
       */

        Toast("提示信息");
    }

  },


}
</script>

<style scoped>
</style>
