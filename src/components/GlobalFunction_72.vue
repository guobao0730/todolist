<template>
  <div>
    ============================72、 利用Vue.prototype定义一个全局函数============================

    <el-form label-position="top" label-width="80px" :model="formLabelAlign" style="padding: 20px;margin: 20px;">
      <el-form-item label="数值1">
        <el-input v-model="formLabelAlign.valueOne" placeholder="请输入数字" clearable></el-input>
      </el-form-item>
      <el-form-item label="数值2">
        <el-input v-model="formLabelAlign.valueTwo" placeholder="请输入数字" clearable></el-input>
      </el-form-item>

      <el-button type="primary" @click="compareSize()">比较大小</el-button>
      <div>最大的值为：{{formLabelAlign.maxValue2}}</div>

    </el-form>





  </div>
</template>

<script>

  export default {
    name: "GlobalFunction_72",
    data(){
      return {
        formLabelAlign:{
          valueOne:0,
          valueTwo:0,
          maxValue2:0,
        },

      }
    },
    methods:{
      compareSize(){

        /*
        方式一：
        * 调用自定义的全局函数
        * */
        //this.formLabelAlign.maxValue2 = this.$maxValue(this.formLabelAlign.valueOne,this.formLabelAlign.valueTwo);



        /*
        * 方式二：
        * */
        this.formLabelAlign.maxValue2 = this.$MathUtil.maxValue(this.formLabelAlign.valueOne,this.formLabelAlign.valueTwo)
      }
    }

  }
</script>

<style scoped>

</style>
