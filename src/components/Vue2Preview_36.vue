<template>
    <div>
      ============================36、vue2-preview(主要用来处理预览图)=========================
      <!--
      该vue2-preview相对于vue-previewl来说扩展性更强
      使用不走
      1、安装：npm i vue2-preview -S
      2、在main.js文件中进行配置
          import VuePreview from 'vue2-preview'
          Vue.use(VuePreview)
      3、使用
             <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

       height="100"   当前的宽高时预览图的宽高
      -->
      <div>
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100"  width="100" @click="$preview.open(index, list)">
      </div>
    </div>
</template>

<script>
    export default {
        name: "vue2-preview_36",
      data(){
          return {
            list: [{
              src: 'https://placekitten.com/600/400',
              w: 600,
              h: 400
            }, {
              src: 'https://placekitten.com/1200/900',
              w: 1200,
              h: 900
            }]
          }
      }
    }
</script>

<style scoped>

</style>
