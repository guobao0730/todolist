<template>
  <div>
    ============================29、VUX ui框架的使用=========================
    <div>

      <!--
      1、cnpm install vux --save
      2、cnpm install vux-loader --save-dev
      3、cnpm install less less-loader --save-dev
      -->

      <!--
      @click.native="showPosition('top')"
      -->
      <x-button type="primary">Top</x-button>


      <div>自动轮播</div>
      <swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
      <br/>
      <br/>




      <div>循环模式</div>
      <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
      <p>current index: {{demo06_index}}</p>



    </div>

  </div>
</template>

<script>
  import {Swiper} from 'vux'
  import { XButton } from 'vux'
  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]
  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))




  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]


  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))


  export default {
    data() {
      return {
        demo03_list: demoList,
        demo06_list: urlList,
        demo06_index: 0,
      }
    },
    components: {
      Swiper,
      XButton
    },
    methods: {

      demo06_onIndexChange (index) {
        this.demo06_index = index
      },


    },
    watch: {},
    computed: {}
  }
</script>

<style scoped>
</style>
