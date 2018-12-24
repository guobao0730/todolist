<template>
  <div>
    ============================43、在vue项目中使用JQuery-ui=========================
    <div id="J_div">在vue项目中使用JQuery</div>

  </div>
</template>

<script>
  import 'jquery-ui-dist/jquery-ui'
  export default {
    name: "JQuery_42",
    data() {
      return {

      }
    },

    /*
 mounted()函数是vue生命周期中的一个函数
 当DOM生成以后所调用的函数
 这个函数一般都是用来操作DOM
 * */
    mounted() {

     /* $('#J_div').click(function () {
        console.log("JQuery引入成功！");
        //JQuery引入成功！
      })*/

      $('#J_div').draggable();

    },
    methods: {


    }


  }
</script>

<style scoped lang="scss">



</style>
