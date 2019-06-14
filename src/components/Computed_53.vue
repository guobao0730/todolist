<template>
    <div>
      ============================53、computed 关键字的使用=========================
      <div>
        <!--
        computed属性 是什么？

        Vue中的computed属性称为计算属性，通过该关键字可以监听多个变量或者多个对象。


        computed属性和watch属性之间的区别：

         1、通过watch属性可以监听一个变量或者一个对象，而computed属性可以监听多个。
        -->

        <div>
          通过computed关键字监听多个变量的改变
          单价：<input v-model="price"/>
          件数：<input v-model="number"/>
          折扣：<input v-model="rate"/>
          最终计算的结果为：{{result}}
        </div>


        <el-button @click="changeName">通过计算属性监听对象的变量改变</el-button>
        <div>
          {{name}}
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Computed_53",
      data() {
          return {
            price:0,
            number:0,
            rate:0,

            person:{
              name:"a"
            }
          }
      },
      computed:{
          /*
        当前的sum是自定义的，当sum中的this.变量名 所对应值发生改变时会调用该sum函数
         */
          result() {
            //当price或者number，rate发生改变的时候会将其的运算结果返回出去
            return this.price*this.number*(this.rate/100);
          },
          name(){
            console.log("this.person.name变量改变了");
            return this.person.name;
          }
      },
      methods:{
        changeName(){
          this.person.name = "b";
        }
      }
    }
</script>

<style scoped>

</style>
