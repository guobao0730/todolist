<template>
  <div>
    ============================17、 子组件给父组件传递数据============================
    <div>
      <!--
      如果想实现子组件传递数据给父组件，那么就需要一个连接器作为桥梁来实现子组件传递数据给父组件
      当前vue文件为父组件
      1、引入子组件（可以通过局部引入，也可以通过全局引入）
      2、首先父组件需要实时的监听子组件是否有传输数据
      3、子组件通过连接器发送数据给父组件
      4、父组件处理子组件发送过来的数据
      -->


      <!--
      1、 1、引入子组件（可以通过局部引入，也可以通过全局引入）
      -->
      <button @click="startListener">实时监听子组件发送过来的数据</button><br/>

      <child></child>

    </div>

  </div>
</template>

<script>
import connector from '../connector'
export default {
  data(){
    return {
    }
  },
  methods:{
      /*
       2、首先父组件需要实时的监听子组件是否有传输数据
      开始监听子组件发送过来的数据
      * "sub" 表示自定义的一个监听器标识，只有子组件和父组件的标识一样才会传输数据
      * data 表示子组件传递过来的数据
      * */
    startListener(){
      connector.$on("send",function (data) {
          console.log("data:"+data);
          //data:我是子组件发给父组件的数据
      })

    }
  }

}
</script>

<style scoped>
</style>
