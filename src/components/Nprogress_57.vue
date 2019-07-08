<template>
    <div>
      ============================57、Nprogress网页加载进度条开源库的使用=========================
      <div>
   <!--
      使用步骤：
        1、安装：
             npm install nprogress --save

        2、导包：
             import NProgress from 'nprogress' // 进度条
             import 'nprogress/nprogress.css' // 进度条样式

        3、对 NProgress进行配置
             NProgress.configure({ showSpinner: false }) // NProgress 配置 ，showSpinner: false 表示禁用右边的环形进度条

        4、使用
             router.beforeEach(async(to, from, next) => {
                    console.log("路由跳转之前");
                  //显示进度条
                    NProgress.start();

                    //继续向下执行
                    next();
                  });

                  router.afterEach(() => {
                    console.log("路由跳转之后");
                  //结束进度条
                    NProgress.done();
             });
        -->
      </div>
    </div>
</template>

<script>
    export default {
        name: "Nprogress_57",
      mounted(){
      }
    }
</script>

<style scoped>



</style>
