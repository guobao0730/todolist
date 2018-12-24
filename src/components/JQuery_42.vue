<template>
  <div>
    ============================42、在vue项目中使用JQuery=========================
    <div id="J_div">在vue项目中使用JQuery</div>

  </div>
</template>

<script>
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

      $('#J_div').click(function () {
        console.log("JQuery引入成功！");
        //JQuery引入成功！
      })

    },
    methods: {


    }


  }
</script>

<style scoped lang="scss">



</style>
