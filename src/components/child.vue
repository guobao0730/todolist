<template>
  <div>
    <!--子组件传递数据给父组件-->

    <button @click="send">发送数据给父组件</button>
  </div>
</template>

<script>
import connector from '../connector'
export default {
  name:"child",
  data(){
      return {
      }
  },
  methods:{

      send(){
        /*
        3、子组件通过连接器发送数据给父组件
        向父组件发送一个字符串数据
        * send 表示发送数据的标识，只有父子的标识相同才会接收到数据
        * */
        connector.$emit('send','我是子组件发给父组件的数据')
      }
  }

}
</script>

<style scoped>

</style>
