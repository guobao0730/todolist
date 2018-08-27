<template>
  <div>
    ============================11_常用指令的练习============================
    <!--使用pre标签是为了使标签的元素原样输出-->
    <pre >
      v-text 指令只能在双标签中使用，利用该指令可以显示对应的纯文本信息，它是元素的innerText
      v-html 指令可以将元素当成html标签解析后输出，利用该指令可以操作html标签，它是元素的innerHTML，其中不能通过<!--  {{text}}的方式来使用变量  -->
      v-if   指令可以将当前的标签隐藏或者显示,它是通过删除或者添加这个元素来实现的显示与隐藏的,如果当前的isShow变量为true那么显示当前的标签，否则隐藏
      v-show 指令可以将当前的标签隐藏或者显示，它是通过display显示与隐藏来实现的，如果当前的isShowDiv是true那么显示，false 就是隐藏
      v-model 指令是双向数据绑定的意思，它可以实现将变量和输入框输入的值进行绑定，修改变量的值将会将输入框中的值改变，同时修改输入框的值也会将变量的值改变
      v-bind  指令是单项数据绑定的意思，它只可以实现修改变量的值从而改变输入框的值
    </pre>

    <!--v-text指令案例-->
    <span v-text="text"></span>

    <!--v-html指令的案例-->
    <span v-html="html"></span>

    <!--v-if指令的使用案例-->
    <div id="v_if_div" v-if="isShow"></div>

    <!--v-show指令的使用案例-->
    <div id="v_show_div" v-show="isShowDiv"></div>


    <div>
      <!--v-model指令的使用案例-->
      <input v-model="value"/>
      <div>{{value}}</div>
    </div>


    <!--
    v-bind的使用案例
    v-bind:value="value"  表示给当前的input标签赋值为 value 变量,当前的 v-bind:value= 是固定写法，"value"是一个变量
    -->
    <input v-bind:value="value"/>

    <!--
    class结合v-bind的使用案例
    使用场景：需要根据可变的表达式的结果来给class赋值，那么就需要用到class结合v-bind,
    编写格式：v-bind:class="表达式"       也可以简写为 :class="表达式"
    v-bind:属性名="表达式"，最终表达式的运算结果将赋值该属性名
    v-bind:class="isRed?'red':'blue'"  表示如果isRed变量是true,那么类选择器的名称为red,否则类选择器的名称为blue
    -->
    <div v-bind:class="isRed?'red':'blue'">class结合v-bind的使用案例之单个判断</div>

    <!--
    :class="{'red':true,'big':true}" 表示如果'red'键所对应的值为true 那么使用名称为red的样式， 如果'big'所对应的值true,那么使用名称为big的样式
    "{'red':true,'big':true}" 大括号里面的内容就相当于一个对象
    -->
    <div :class="{'red':true,'big':true}">class结合v-bind的使用案例之多个判断</div>



  </div>
</template>

<script>
export default {
    data(){
        return {
          text:"我是v-text指令的使用案例",
          html:`
              <li>我会v-html指令的使用案例,注意：该标签外面包裹的是反引号</li>
          `,
          isShow:true,
          isShowDiv:false,
          value:"请输入手机号",
          isRed:false,
        }
    }

}
</script>

<style scoped>

  /*
  <style scoped> 表示指定这个Style中的样式只能作用于当前组件中，外部组件将无法使用,起到一个限制的作用
  */
  #v_if_div {
    width: 100px;
    height: 100px;
    background-color: red;
  }

  #v_show_div {
    width: 200px;
    height: 200px;
    background-color: blue;
  }
  /*表示如果当前isRed变量为true，那么将使用该样式*/
  .red {
    width: 100px;
    height: 100px;
    background-color: red;
  }

  /*表示如果当前isRed变量为false，那么将使用该样式*/
  .blue {
    width: 100px;
    height: 100px;
    background-color: blue;
  }

  .big {
    font-size: 20px;
  }
</style>
