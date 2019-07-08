/**
 *@project： todolist
 *@package：
 *@date：2019/7/4 0004 10:03
 *@author 郭宝
 *@brief: 混入js文件
 * 使用背景：
 *    有很多个部分相同的组件，使用每个组件都需要传入该组件的配置相关信息，而且每个组件都会点击保存以后将新配置信息传出去，那么这个时候就可以使用混入来实现
 */

export default {
  data(){
    return {
      dataList:{}
    }
  },
  props:{
    assemblyData:{
      type:Object,
      default:function () {
        return null;
      }
    }
  },
  created(){
    //因为子组件无法直接修改父组件的值，所以需要通过另外一个变量去修改
    this.dataList = this.assemblyData;
  },
  methods:{
    /*
    * 每个使用该混合的组件保存时都调用该函数
    * */
    save(){
      this.$emit("save",this.dataList);
    }
  }


}
