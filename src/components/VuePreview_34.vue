<template>
    <div>
      ============================34、vue-preview(主要用来处理图片缩放的插件)=========================
      <div>
        <!--
        官网：https://github.com/LS1231/vue-preview
        使用步骤
        1、安装：npm i vue-preview -S
        2、在main.js文件中进行配置
            import VuePreview from 'vue-preview'

            // defalut install
            Vue.use(VuePreview)
        3、使用<vue-preview
        -->
        <vue-preview :slides="slide" @close="close"></vue-preview>

      </div>
    </div>
</template>

<script>
    export default {
        name: "VuePreview_34",
      data(){
          return {
            /*
            * src 指定的放大以后的图片
            * msrc 指定的缩略图
            * alt 图片放大以后的介绍
            * w 图片被放大以后的宽度
            * h 图片被放大以后的高度
            * */
            slide:[
              {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
              },
              {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                alt: 'picture2',
                title: 'Image Caption 2',
                w: 1200,
                h: 900
              }
            ]
          }
      },
      methods:{
        close(){
          console.log("缩略图关闭了")
        }
      }
    }
</script>

<style scoped>

</style>
