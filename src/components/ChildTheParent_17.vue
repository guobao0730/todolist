<template>
  <div>
    ============================17、 子组件给父组件传递数据============================
    <div>
      <!--

      方式一：
      通过自定义连接器+$emit()+$on()实现
      如果想实现子组件传递数据给父组件，那么就需要一个连接器作为桥梁来实现子组件传递数据给父组件
      当前vue文件为父组件
      1、引入子组件（可以通过局部引入，也可以通过全局引入）
      2、首先父组件需要实时的监听子组件是否有传输数据
      3、子组件通过连接器发送数据给父组件
      4、父组件处理子组件发送过来的数据


      方式二：
      通过$emit('key',value)+ @key 实现
      1、在子组件中调用this.$emit('键',值)
      2、在父组件中的子组件行内设置 @键="自定义函数"
      3、在父组件中定义一个自定义函数(值)，当前的值就是子组件传递过来的值



      方式三：
      通过$nextTick+$parent.父组件中的函数
      1、先在父组件中定义一个子组件需要调用的函数
      2、通过this.$$nextTick(this.$parent.函数名(参数))
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
      * "send" 表示自定义的一个监听器标识，只有子组件和父组件的标识一样才会传输数据
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
