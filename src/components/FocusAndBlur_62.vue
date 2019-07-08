<template>
  <div>
    ============================62、DOM的 focus() 方法和blur() 方法=========================
    <!--
    focus() 表示为元素赋予焦点
    blur()  表示使元素失去焦点
    -->
    <div>
      <el-input
        placeholder="请输入账号"
        v-model="account"
        clearable
        style="width: 15%"
      ref="account"
      >
      </el-input>
    </div>
    <div style="margin-top: 50px">
      <el-button @click="setFocus">输入框获取焦点</el-button>
      <el-button @click="losingFocus">输入框失去焦点</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "FocusAndBlur",
    data(){
      return {
        account:""
      }
    },
    methods:{
      /*
      * 设置获取焦点
      * */
      setFocus(){
        this.$refs.account.focus();
      },

      /*
      * 失去焦点
      * */
      losingFocus(){
        this.$refs.account.blur();
      }

    }
  }
</script>

<style scoped>

</style>
