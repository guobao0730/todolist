<template>
  <div>
    ============================67、vue-countTo（计数插件）插件的使用=========================
    <!--
    使用步骤：
    1、安装
         npm install vue-count-to

    2、导包
         import countTo from 'vue-count-to'

    3、使用该组件
         <count-to  :start-val="0" :end-val="81212" :duration="3000" :prefix="prefix" class="text-style"></count-to>
    -->
    <div>
      <count-to  :start-val="0" :end-val="81212" :duration="3000" :prefix="prefix" class="text-style"></count-to>
    </div>

  </div>
</template>

<script>
  import countTo from 'vue-count-to'
    export default {
        name: "VueCountTo_67",
      data(){
          return {
            prefix:"$"
          }
      },
      components:{
        countTo
      }
    }
</script>

<style scoped>

  .text-style {
    font-size: 30px;
    color: red;
  }

</style>
