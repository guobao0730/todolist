<template>
    <div>
      ============================================Element-ui 时间选择器============================================
      <div>

        <el-time-picker
          v-model="value2"
          :picker-options="{
      selectableRange: '00:00:00 - 23:59:00'
    }"
          placeholder="任意时间点"
        :change="change"
        >
        </el-time-picker>
      </div>

    </div>
</template>

<script>
    export default {
        name: "ElementUI_TimePicker_47",
      data(){
        return {
          value2: "",
        }
      },
      updated(){
        console.log("this.value2:"+this.value2);
      },
      mounted(){
          console.log("this.value2:"+this.value2);
      },
      methods:{
        change(){
          console.log("change");
        }
      }
    }
</script>

<style scoped>

</style>
