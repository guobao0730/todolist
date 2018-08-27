<template>
  <div>
    ============================12、methods和on的使用============================
    <!--@click="change"表示给当前的标签设置一个点击事件，当被点击以后调用change函数-->
    <div @click="change"  id="click_dv">
      点我改变颜色
    </div>
    <!--
    绑定事件的方法：
    v-on:事件名="表达式||函数名"
    @事件名="表达式||函数名"

    注意：
    1、函数名如果没有参数，可以只给一个函数的名称
    2、凡是在template中使用变量或者函数，不需要加this关键字
    3、在script标签中使用变量或者函数，需要添加this
    -->


  </div>
</template>

<script>
export default {
  name:"methods_and_on",
  data(){
      return {
          msg:"测试",
        isTrue:false,
      }
  },
  methods:{
      change(){
          //获取当前的标签对象
          var click_dv = document.getElementById("click_dv");
          if (this.isTrue){
              //将该标签的class属性对应的名称改为red
            click_dv.className = 'red';
          }else {
            click_dv.className = 'blue';
          }
        this.isTrue = !this.isTrue;
      }
  }



}
</script>

<style scoped>
  .red {
    color: red;
    font-size: 18px;
  }

  .blue {
    color: blue;
    font-size: 14px;
  }

</style>
