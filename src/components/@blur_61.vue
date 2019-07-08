<template>
  <div>
    ============================61、@blur 事件的使用=========================
    <!--
    @blur 当元素失去焦点时触发blur事件
    -->
    <div>
      <input type="text" placeholder="请输入内容" @blur="blur"/>
    </div>

  </div>
</template>

<script>
    export default {
        name: "@blur_61",
      methods:{
        blur(){
          console.log("blur事件被执行了")
          // blur事件被执行了
        }
      }
    }
</script>

<style scoped>

</style>
