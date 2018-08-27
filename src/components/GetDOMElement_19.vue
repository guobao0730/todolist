<template>
  <div>
    ============================19、 获取DOM元素============================

    <!-- 1、如果想操作DOM,那么在指定的元素上添加ref="名称",-->
    <div ref="myDv">
      <!--
      使用前端框架就是为了减少DOM操作
      1、如果想操作DOM,那么在指定的元素上添加ref="名称",
      2、然后在mounted函数中通过 this.$refs.名称 获取当前的DON对象
        注意：如果ref属性在原生的标签中指定的，那么获取的就是原生的DOM对象
             如果ref属性放在vue组件上，获取的就是组件对象
      -->


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

  },

  /*
  它是生命周期的函数之一
  该函数是组件创建后，数据已经完成初始化，但是DOM还未生成
  *
  * */
  created(){

  },
  /*
   它是生命周期的函数之一
  该函数是数据装载DOM以后，并且DOM已经生成了
  2、通过this.$refs.名称 获取当前的DOM对象
   */
  mounted(){
      let myDv = this.$refs.myDv;
    myDv.innerHTML = '测试是否可以通过';
  }

}
</script>

<style scoped>
</style>
