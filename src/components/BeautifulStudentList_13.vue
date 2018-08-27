<template>
  <div>
    ============================13、漂亮的学生列表============================
    <div>
       姓名：<input v-model="name"/><br>
       性别：<input v-model="sex"/><br>
       年龄：<input v-model="age"/><br>
      <button @click="add">添加</button>
      <ul>

        <!--
        v-for="(item,index) in list"  表示循环展示list数组中的数据，item表示当前条目对象，index表示当前条目的下标
        :key="index"  表示用下标来进行渲染
        :class="{'男':'man','女':'woman'}[item.sex]    表示根据当前的对象item中的sex属性来匹配所对应的类选择器名称，如果当前的条目的sex值为男，那么类选择器的名称为man
        姓名：{{item.name}}    表示显示的数据为：    姓名：当前条目的姓名     比如：  姓名：guobao           item.name(表示当前条目的名称)
        <button @click="deleteItem(index)">删除</button>   表示在每个条目中添加一个删除按钮，   @click="deleteItem(index)" 表示当点击删除按钮时调用deleteItem(index)函数，并且传入当前条目的下标
        -->
        <li v-for="(item,index) in list" :key="index" :class="{'男':'man','女':'woman'}[item.sex]">
          姓名：{{item.name}}       性别：{{item.sex}}        年龄：{{item.age}}
          <button @click="deleteItem(index)">删除</button>
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
export default {
  name:"BeautifulStudentList",
  data(){
      return {
          /*创建三个变量临时保存输入框输入的值*/
        name:'',
        sex:'',
        age:'',
        /*定义一个数组存储最终展示的数据*/
        list:[{
          name:'郭宝',
          sex:'男',
          age:'30',
        }]
      }
  },
  methods:{
    add(){
        /*将点击以后将输入框输入的数据添加到数组中*/
        this.list.push({
          name:this.name,
          sex:this.sex,
          age:this.age,
        });

      //清除输入框输入的数据
      this.name = '';
      this.sex = '';
      this.age = '';

      },
    deleteItem(index){
        /*根据传入的下标删除对应的元素，1表示只删除一项元素*/
      this.list.splice(index,1);
    }
  }



}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  .man {
    background-color: red;
    color: white;
  }

  .woman {
    background-color: black;
    color: white;
  }

</style>
