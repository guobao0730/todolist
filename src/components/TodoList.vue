<template>
  <div>
    <!--利用v-model实现input组件和inputValue变量进行双向数据绑定-->
    <input v-model="inputValue"/>
    <button @click="submit" >提交</button>
    <ul>
      <!--
      todo-item是自定义的组件
      v-for="(item,index) in list" 表示循环展示list数组中的数据,item表示当前的条目对象,index表示当前条目的下标,in是一个关键字（之前是用的of）
      :key="index" 表示用index下标作为渲染的标识
      :content="item" 表示将当前的item变量传递给子组件todo-item 中的 content 变量
      :index="index" 表示将当前的index变量赋值给自组件todo-item 中的 index 变量
       @deleteItem="deleteItem"   @deleteItem是在子组件todo-item中定义的一个函数名，类似于自定义一个监听器，deleteItem表示当前组件中的所对应的函数
      -->
      <todo-item v-for="(item,index) in list" :key="index" :content="item" :index="index" @deleteItem="deleteItem"></todo-item>
    </ul>
  </div>
</template>

<script>
  /*
  如果想在组件中引入其它组件，
  1、那么首先需要将引入的组件进行导包，
  2、然后通过components关键字进行声明
  3、使用
  */
import TodoItem from './TodoItem'
export default {
    /*components表示对引入的组件进行声明*/
  components :{
      /*'todoItem':TodoItem  ,TodoItem表示引入的组件,todoItem表示使用组件的名称*/
      'todoItem':TodoItem
  },
  /*当前的data是一个函数，return是一个对象*/
    data() {
        return {
            inputValue:'测试',
            list:[]
        }
    },
    methods: {
        /*提交的函数*/
      submit(){
          /*
          * 当点击提交的时候，将当前输入的值存储到list数组中,并且将当前的inputValue变量赋值为空
          * */
          this.list.push(this.inputValue);
          this.inputValue = "";
      },
      /*
      删除item的函数
       index 表示的是从自组件传递过来的要删除的下标
      * */
      deleteItem(index){
          /*表示根据下标删除对应的元素,1表示删除一项元素*/
          this.list.splice(index,1);
      }

    }

}
</script>

<style >

</style>
