<template>
  <div>
    ============================该movie组件是为了配合23、 编程导航的学习使用而创建的============================
    <div >
        我是电影
      <button @click="goBack">跳转到上一页</button>

      <button @click='gotoScienceFictionFilm'>
        跳转到科幻电影
      </button>

      <button @click='gotoComedyMovie'>
        跳转到喜剧电影
      </button>

      <button @click="pageDown">跳转到下一页</button>
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
      //跳转到科幻电影
    gotoScienceFictionFilm(){
        /*
        表示直接跳转到科幻电影
         '/scienceFictionFilm'  表示当前目录下的scienceFictionFilm.vue文件
         */
        this.$router.push('/scienceFictionFilm');
    },

    gotoComedyMovie(){
        //表示直接跳转到喜剧电影页面
        this.$router.push('/comedyMovie')
    },
    goBack(){
        /*
        直接返回到上一页
         注意：此时只有进入了当期页面之后再点击上一页才会生效，否则点击无效
        * */
        this.$router.go(-1);
    },

    pageDown(){
        /*
        直接跳转到下一页
        注意：此时只有点击了其它的页面之后返回点击下一页才会生效，否则点击无效
        * */
        this.$router.go(1);
    }


  },
  /*created()函数是vue生命周期中的一个函数
   当DOM还未生成时所调用的函数
   这个函数一般都用来做数据的初始化
   */
  created(){
      /*获取从programming_navigation_23.vue传递过来的id和name值*/
      console.log("this.$router.query.id:"+this.$router.query);
    /*
     this.$router.query.id:undefined
     此时并未获取对应的值，该问题待研究
     */

  },
  mounted(){


  }



}
</script>

<style scoped>
</style>
