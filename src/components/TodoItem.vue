<template>
  <!--
  @click="notifyParentDeleteMe"  表示给当前这个条目设置一个点击事件
  notifyParentDeleteMe  表示函数名
  {{content}}  表示当前这个组件所要显示的数据来自父容器传递过来的content值
  -->
  <li @click="notifyParentDeleteMe" class="li_item">{{content}}</li>
</template>

<script>
export default {
    /* props:['content','index'] 表示接收从服务器传递过来的content和index变量*/
  props:['content','index'],
  methods:{
      /*通知父容器删除当前条目*/
    notifyParentDeleteMe(){
        /*自定义一个deleteItem监听器，并传入index，以实现自组件和父组件进行通信*/
      this.$emit('deleteItem', this.index)
    }
  }
}
</script>

<style scoped>
  /*scoped 表示给当前这个组件的样式添加了一个作用域,该样式只能作用于当前组件，其它组件将不可使用，就算是id选择器或者类选择器的名称相同也不可使用.
  如果想实现其它组件也使用该组件的样式，那么去除scoped关键字即可
  */
  .li_item {
    color: red;
  }
</style>
