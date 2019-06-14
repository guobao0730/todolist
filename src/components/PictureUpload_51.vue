<template>

  <div>
    ============================51、Vue中绑定值和字符串的拼接============================
    <div :class="`core-object${item.name}`">
      Vue中绑定值和字符串的拼接
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        item:{
          name:"test",
        }
      }
    },
    methods:{


    },
  }
</script>

<style>
  .core-objecttest {
    width: 300px;
    height: 300px;
    background-color: red;
  }

</style>
