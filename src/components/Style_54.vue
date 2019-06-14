<template>
    <div>
      ============================54、全局样式和局部样式=========================
      <div>
         每个Vue文件中都有一个默认的style标签 scoped> ，其中如果设置了scoped属性，那么就表示该样式为局部样式，只作用于该Vue组件,
        如果没有设置该属性，即表示全局样式，其它组件也可以使用。



      </div>

    </div>
</template>

<script>
    export default {
        name: "Style_54"
    }
</script>

<style scoped>

</style>
