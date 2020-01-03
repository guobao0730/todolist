<template>
    <div>
      ============================71、 smoothscroll-polyfill(页面平滑滚动)插件的使用=========================
      <div>
        <button @click="scroll">滚动到顶部</button>

      </div>
    </div>
</template>

<script>
    export default {
        name: "SmoothscrollPolyfill_71",
      methods:{
        scroll(){

          /*
          * top: 0  表示纵坐标像素值；取值范围：正负数
          * left: 0 表示横坐标像素值；取值范围：正负数
          * behavior: 'smooth'  表示将滚动行为设置为平滑的滚动；
          *           'auto'    表示滚动框立即滚动
          * */
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
      }
    }
</script>

<style scoped>

</style>
