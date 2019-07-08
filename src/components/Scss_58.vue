<template>
  <div>
    ============================58、Sass(Scss) =========================
    <div>
      <!--
      Sass 是什么？
        Sass又称SCSS，它是CSS预处理之一。它在CSS语法的基础上增加了变量、嵌套、混合、导入等等高级功能。那什么是CSS预处理器呢？简单理解就是,CSS预处理是一种专门的编程语言，通过该语言进行Web页面设计，然后再编译成正常的CSS文件，以供项目使用。

        CSS预处理器技术已经非常成熟，而且也涌现出了很多不同的CSS预处理器语言，比如：

                 1、Sass（SCSS）

                 2、Less

                 3、Stylus

                 4、Turbine

                 5、DT CSS

           上述几种CSS预处理器中就属Sass、Less和Stylus最优秀。

      -->
      <div class="head font-style">
          我是顶部布局
      </div>

      <div class="body font-style">
         我是底部布局
      </div>



      <!--
      SCSS 的嵌套
      -->
      <div class="father">
        SCSS嵌套的使用--父
        <div class="son">
          SCSS嵌套的使用--子
        </div>
      </div>


      <div class="icss">SCSS嵌套--伪类嵌套</div>


    </div>
  </div>

</template>

<script>
  import './css/base.scss'
  export default {
    name: "Scss_58"
  }
</script>

<!--
lang="scss" 表示声明使用scss语言
-->
<style lang="scss" scoped>

  /*
   ====================== 用$定义变量  ======================
  $ 是变量声明符
  bg 是变量名
  #2d3a4b 是 bg变量所对应的值
  */
  $bg:#2d3a4b;

  .head {
    width: 30%;
    height: 200px;
    background-color: $bg;
  }

  .body {
    width: 10%;
    height: 500px;
    background-color: $bg;
    margin-top: 20px;
  }


  /*
    ======================SCSS 的嵌套  ======================
  */
  .father {
    width: 500px;
    height: 500px;
    background-color: $bg;
    margin-top: 30px;
    margin-left: 30px;
    position: relative;

    .son {
      width: 200px;
      height: 200px;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -100px;
    }
  }



  /*
    ======================定义全局变量  ======================
  */
  $font-size:20px;

  .home {
    /*
    调用全局变量
    */
    font-size: $font-size;
  }

  .father {
    /*
    定义局部变量
    */
    $font-size:50px;

    .son {
      /*调用局部变量*/
      font-size: $font-size;
    }
  }




  /*
  ======================SCSS嵌套--属性嵌套  ======================
*/
  .box {
    margin-left: 10px;
    margin-top: 30px;
  }


  .box {
    margin: {
     left: 10px;
      top: 30px;
    }
  }


  /*
    ======================SCSS嵌套--伪类嵌套  ======================
  */
  .icss {
    margin-top: 100px;
    margin-left: 30px;
    &:hover {
      color: red;
      font-size: 100px;
    }
  }

/*
 SCSS嵌套--伪类嵌套最终编译以后的样式
  .icss {
    margin-top: 100px;
    margin-left: 30px;
  }

  .icss:hover {
    color: red;
    font-size: 100px;
  }*/



  /*
    ======================不带参数的混合宏定义  ======================
  @mixin 是声明混合宏的关键字
  font-style 是该混合宏的名称
  */
  @mixin font-style {
    font-size: 14px;
    color: #191A1B;
    font-weight: bold;
    font-family: '微软雅黑';
  }

  .font {
    /*
    调用已经声明好的混合宏
      @include 是调用混合宏的关键字
      font-style 是混合宏的名称
    */
    @include font-style;
  }




  /**
    ======================声明一个需要传入参数的混合宏  ======================
   */
  @mixin width-and-height($width){
    width: $width;
    height: $width/2;
  }

  .container {
    /*
    调用带参数的混合宏
    */
    @include width-and-height(100px)
  }





  /*
    ======================声明一个带默认参数的混合宏  ======================
  */
  @mixin width-and-height($width:100px){
    width: $width;
    height: $width/2;
  }


  .container2 {
    @include width-and-height;
  }





  /*
  ======================SCSS--继承======================
  */
  .btn {
    border: 1px solid gray;
    border-radius: 5px;
  }

  .btn-save {
    color: dodgerblue;
    @extend .btn;
  }


  /*
  最终编译以后的CSS样式为
  */

  .btn .btn-save {
    border: 1px solid gray;
    border-radius: 5px;
  }

  .btn-save {
    color: dodgerblue;
  }



  /*
  ======================SCSS--占位符(%)======================
  */

  /*
  % 占位符的关键字
  btn-style 该占位符的名称
  */
  %btn-style {
    border-radius: 5px;
    border: 1px solid gray;
    background-color: dodgerblue;
    color: white;
  }

  .btn-cancel {
    /*
    通过 @extend 关键字调用已经声明的占位符
    */
    @extend %btn-style
  }



</style>
