<template>
  <div>
    ============================56、js-cookie开源库的使用=========================
    <div>
      <!--
      js-cookie 的使用方式：
      1、首先安装：npm install js-cookie --save
      2、引包：import Cookies from 'js-cookie'
      3、通过Cookies存值
            Cookies.set('key','value');
      4、通过Cookies取值
            Cookies.get('key)

      详细见github 官方介绍：https://github.com/js-cookie/js-cookie

      -->



      <cookies-data></cookies-data>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
import CookiesData from './CookiesData'
  export default {
    name: "Js-Cookie_56",
    components:{
      CookiesData
    },
    mounted() {
      //存到Cookies 中
          Cookies.set('key','value');
    }
  }
</script>

<style scoped>

</style>
