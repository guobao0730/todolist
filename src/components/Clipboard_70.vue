<template>
  <div>
    ============================70、clipboard(实现点击按钮复制到剪切板的插件)的使用=========================
    <!--
    clipboard.js插件的使用步骤
    1、安装
         npm install clipboard --save
    2、编写布局
    3、引入 clipboard
         import ClipboardJS from 'clipboard'
    4、实例化clipboard并设置监听回调
    -->
    <div>

      <el-input placeholder="请输入内容" v-model="input2" id="foo" style="width: 30%;padding: 30px">
          <el-button  slot="append" class="btn" data-clipboard-target="#foo"  @click="copy" >复制</el-button>
      </el-input>

    </div>
  </div>
</template>

<script>
  import ClipboardJS from 'clipboard'

  export default {
    name: "Clipboard",
    data() {
      return {
        input2:'https://github.com/zenorocha/clipboard.js.git',
        clipboard:null,
      }
    },
    created(){
    },
    methods: {
      copy() {
        this.clipboard = new ClipboardJS('.btn');
        let this_ = this;
        this.clipboard.on('success', function (e) {
          console.info('Action:', e.action);
          //Action: copy
          console.info('Text:', e.text);
          //Text: https://github.com/zenorocha/clipboard.js.git

          console.info('Trigger:', e.trigger);

          this_.$message.success("复制成功！");

          e.clearSelection();
        });

        this.clipboard.on('error', function (e) {
          console.error('Action:', e.action);
          console.error('Trigger:', e.trigger);

          this_.$message.success("复制失败！");
        });
      }
    }
  }
</script>

<style scoped>

</style>
