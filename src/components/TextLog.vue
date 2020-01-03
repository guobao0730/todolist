<template>
  <p>我是p标签,数据为：{{data}}</p>
</template>

<script>
export default {
  name: 'TextLog',
  props: {
    data: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
