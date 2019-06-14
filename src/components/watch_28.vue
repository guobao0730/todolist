<template>
  <div>
    ============================28、watch关键字的使用=========================
    <div>

      <!--
      watch 侦听器
      watch关键字类似于双向数据绑定v-model
      通过watch关键字可以监听变量的改变,也可以监听对象的改变

      如果想监听复杂数据类型那么需要深度监视才可以,比如监听student对象数组的改变

      如果需要对10个变量进行监视，那么需要用到计算属性computed 关键字
      -->

      <button @click="changeValue">通过watch关键字监听变量的改变</button>


      <button @click="changeArray">通过watch关键字深度监听数组对象的改变</button>


      <!--
      price,number,rate是三个变量
      当前的sum是一个函数
      -->
      <div>
        通过computed关键字监听多个变量的改变
        单价：<input v-model="price"/>
        件数：<input v-model="number"/>
        折扣：<input v-model="rate"/>
        最终计算的结果为：{{sum}}
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: true,
        student: [{
          name: '张三'
        }, {
          name: '李四'
        }],


        price: 0,
        number: 0,
        rate: 0,
      }
    },
    methods: {
      /*改变value的值*/
      changeValue() {
        this.value = false;
      },

      changeArray() {
        this.student[0].name = '郭宝';
      }
    },
    watch: {
      /*
      如果想监听单个变量可以用此种方式
      表示当value值发生改变后会调用该函数,newValue就是value改变以后的值
      * */
      value: function (newValue) {
        console.log("通过watch监听到value的值发生改变了:newValue" + newValue);
        //通过watch监听到value的值发生改变了
      },

      /*深度监听student对象数组发生了改变*/
      student: {
        handler: function (newArray, oldArray) {
          console.log("通过watch深度监听到student的值发生改变了");
          console.log(newArray);
          console.log(oldArray);
          //通过watch深度监听到student的值发生改变了
        },
        deep: true
      }


    },


    /*
    * 当前的computed是为了监听多个变量而创建的
    * */
    computed: {
      /*
      当前的sum是自定义的，当sum中的this.变量名 所对应值发生改变时会调用该sum函数
       */
      sum() {
        //当price或者number，rate发生改变的时候会将其的运算结果返回出去
        return this.price * this.number * (this.rate / 100);
      }
    }
  }
</script>

<style scoped>
</style>
