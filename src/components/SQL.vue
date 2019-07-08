<template>
  <div class="root">
    <el-input
      v-model="dataList.name"
      style="margin-bottom:5px;"
    >
      <template slot="prepend">节点名称</template>
    </el-input>

    <el-form ref="form" :model="dataList" label-width="80px" label-position="top" >

      <el-form-item label="SQL语句">
        <el-input type="textarea" v-model="dataList.desc" :rows="2"
                  placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import myMixin from '../mixins/myMixin'

  export default {
    name: "SQL",
    mixins: [myMixin]
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
