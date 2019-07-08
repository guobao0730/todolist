<template>
  <div>
    ============================通过js-cookie开源库获取值=========================
    <div>

    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
    export default {
        name: "CookiesData",
      mounted(){
          console.log("通过Cookies获取的键为key所对应的值为："+Cookies.get('key'));
      }
    }
</script>

<style scoped>

</style>
