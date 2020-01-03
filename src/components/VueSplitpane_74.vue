<template>
  <div>
    ============================74、vue-splitpane(垂直水平分割窗口)插件的使用 =========================

    <div class="root">
      <!--
      v-on:resize="resize"
      :min-percent='20' 表示最小百分比为20；默认为10
      :default-percent='30' 表示默认百分比为30；默认为10
      split="vertical" 表示为垂直方向拆分；取值为:horizontal/vertical;
      -->
      <split-pane  :min-percent='20' :default-percent='30' split="vertical">
        <!--
        slot="paneL"  表示指定该组件为左侧面板
        -->
        <template slot="paneL">

          <!--自定义左侧面板的内容-->
          <div class="dv-a">A</div>
        </template>

        <!--
        slot="paneR"  表示指定该组件为右侧面板
        -->
        <template slot="paneR">

          <!--
          再次将右侧面板进行拆分
          -->
          <split-pane split="horizontal">
            <template slot="paneL">
              <div class="dv-b">B</div>
            </template>
            <template slot="paneR">
              <div class="dv-c">C</div>
            </template>
          </split-pane>
        </template>
      </split-pane>
    </div>


    <!--
    垂直分割为3个面板
    -->
    <div class="root" style="margin-top: 30px">
      <split-pane   :min-percent='20' :default-percent='30' split="vertical">
        <template slot="paneL">
          <!--自定义左侧面板的内容-->
          <div class="dv-a">A</div>
        </template>
        <template slot="paneR">
          <split-pane split="vertical">
            <template slot="paneL">
              <div class="dv-b">B</div>
            </template>
            <template slot="paneR">
              <div class="dv-c">C</div>
            </template>
          </split-pane>
        </template>
      </split-pane>

    </div>

  </div>
</template>

<script>
    export default {
        name: "VueSplitpane_74"
    }
</script>

<style scoped>

  .root {
    width: 100%;
    height: 500px;
  }

  .dv-a {
    width: 100%;
    height: 100%;
    background-color: dodgerblue;
  }

  .dv-b {
    width: 100%;
    height: 100%;
    background-color: yellow;
  }

  .dv-c {
    width: 100%;
    height: 100%;
    background-color: #ce272d;
  }



</style>
