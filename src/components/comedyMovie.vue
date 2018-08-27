<template>
  <div>
    ============================该comedyMovie组件是为了配合23、 编程导航的学习使用而创建的============================
    <div >
        我是喜剧电影
      <button @click='goBack'>
        返回上一页
      </button>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    goBack(){
        //表示返回到上一页
        this.$router.go(-1);
    }

  },
  mounted(){


  }



}
</script>

<style scoped>
</style>
