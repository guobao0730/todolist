<template>
    <div>
      ============================75、动态添加选择器 =========================
      <ul>
        <!--
        :class="{'now':selectName === item.name}" 表示如果当前的名称是选中的，那么就添加一个now的样式
        -->
        <li v-for="(item,index) in listData" :key="index" :class="{'now':selectName === item.name}" @click="switchState(item.name)">{{item.name}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "DynamicAddSelector_75",
      data(){
          return {
            listData:[
              {
                name:"热门推荐"
              },
              {
                name:"手机数码"
              }
            ],
            selectName:'热门推荐'
          }
      },
      methods:{
        switchState(name){
          this.selectName = name;
        }
      }
    }
</script>

<style scoped>

  ul {
    height: 40px;
    list-style: none;
  }

  li {
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: left;
    background-color: black;
    color: red;
    padding: 10px;

    cursor: pointer;
  }

  .now {
    background-color: red;
    color: black;
    cursor: default;
  }



</style>
