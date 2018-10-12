<template>
  <div>
    ===============================33、利用Vue动态更改Element标签的属性(主要是通过v-if和v-else整个替换实现)===============================
    <div>

      <button @click="disableSelect">禁用</button>
      <button @click="undisableSelect">正常使用</button>

      <div v-if="show">
        <el-select v-model="data.selectValue" placeholder="请选择" size="mini">
          <el-option
            v-for="value in data.value"
            :key="value.value"
            :label="value.label"
            :value="value.value"
          >
          </el-option>
        </el-select>
      </div>

      <!--
      disabled 禁用属性
      -->
      <div v-else>
        <el-select v-model="data.selectValue" placeholder="请选择" size="mini" disabled>
          <el-option
            v-for="value in data.value"
            :key="value.value"
            :label="value.label"
            :value="value.value"
          >
          </el-option>
        </el-select>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "DynamicallyChangingLabelProperties_33",
    data() {
      return {
        show: true,
        data: {

          value: [{
            value: '1',
            label: ' '
          }, {
            value: '2',
            label: 'General'
          },
            {
              value: '3',
              label: 'CSV'
            },
            {
              value: '4',
              label: 'TSV'
            },
            {
              value: '5',
              label: 'JSON'
            },
            {
              value: '6',
              label: 'Directory'
            }],
          selectValue: '',
          isValueDisabled: true,
        },
      }
    },
    methods:{
      disableSelect(){
        this.show = false;
      },

      undisableSelect(){
        this.show = true;
      }
    }
  }
</script>

<style scoped>

</style>
