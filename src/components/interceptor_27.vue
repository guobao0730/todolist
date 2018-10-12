<template>
  <div>
    ============================27、拦截器(主要用来处理http网络请求的)=========================
    <div >

      <!--
      前端中的拦截器主要是过滤的作用，

      在main.js文件中添加此段代码
      //拦截器
      Axios.interceptors.request.use(function (config) {

        //个性化的修改
        config.headers = {
          accept:'interceptors'
        }

        return config;
      })

      -->
    </div>

  </div>
</template>

<script>
  export default {
  data(){
    return {
        value:true,
    }
  },
  methods:{


  },
}
</script>

<style scoped>
</style>
