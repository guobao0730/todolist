<template>
  <!--
  File组件
  -->
  <div class="root">
    <el-input
      v-model="dataList.name"
      style="margin-bottom:5px;"
    >
      <template slot="prepend">节点名称</template>
    </el-input>

    <el-table
      :data="dataList.tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="文件名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="修改时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="size"
        label="大小">
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="save" style="margin-top: 20px" >保存</el-button>

  </div>
</template>

<script>
  import myMixin from '../mixins/myMixin'
    export default {
        name: "File",
      mixins:[myMixin]
    }
</script>

<style scoped>


  .root {
    width: 80%;
    padding: 30px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 30px auto;
  }

</style>
