// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
main.js文件是程序的入口
一般一个项目中，大多都是只有一个Vue实例来显示
 import Vue from 'vue' 表示引入Vue,这是ES6的语法格式
 import App from './App' 表示引入App.vue文件，从同级目录下的App文件进行引入。这是ES6的语法格式
 */
import Vue from 'vue'
import App from './App'

/*
* 引入echarts
* */
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/*
全局组件的使用
 1、在main,js文件中导入子组件对应的包
 2、利用Vue.component('组件名称',组件对象)
* */
import Item from './components/Item'
Vue.component('item',Item);


import Son from './components/Son'
Vue.component('son',Son);

import child from './components/child'
Vue.component('child',child)



/*
* 引入mint-ui
* */
import Mint from 'mint-ui';
//引入mint-ui中的样式
import 'mint-ui/lib/style.css';
Vue.use(Mint);


/*
*21.1、下载vue-router：npm install vue-router
*21. 2、引入vue-router
* */
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from './components/home'
import login from './components/login'

import movie from './components/movie'
import scienceFictionFilm from './components/scienceFictionFilm'
import comedyMovie from './components/comedyMovie'
import splash from './components/splash'
import notFoundVue from './components/notFoundVue'



/*
*2、 引入axios
* 通过这种方式就可以全局使用axios
* */
import Axios from 'axios';
Vue.prototype.$axios = Axios;


/*
该段代码主要是为了跨域请求而编写的
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false*/


/*
* 引入Moment时间类库
* */
import Moment from 'moment'//导入文件
Vue.prototype.$moment = Moment;//赋值使用



/*
* 30、moment配合过滤器来完成需求
* 进行全局配置
* convertData 表示过滤器的名称
* function (value)  表示具体的实现函数
* */
Vue.filter('convertData',function (value) {
  //表示将当前传入的时间格式化为：年-月-日  ，比如：2006-01-12
  return Moment(value).format('YYYY-MM-DD');
})



/*
* 引入Element
* */
import Element from 'element-ui'
//引入Element自带的样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)



/*
* 引入vue-preview(显示缩略图的插件)
* */
import VuePreView from 'vue-preview'
Vue.use(VuePreView)


import Vue2Preview from 'vue2-preview'
Vue.use(Vue2Preview)


import jquery from 'jquery'
Vue.prototype.$ = jquery;
window.jQuery = jquery;

import Jquery_contextmenu from 'jquery-contextmenu'
Vue.use(Jquery_contextmenu)
import 'jquery-contextmenu/dist/jquery.contextMenu.css'

import store from './store'

/*
 *
 *21. 3、创建路由对象并配置路由规则
 * */
let router = new VueRouter({

  linkActiveClass:'mui-active',
  /*
   * routes 当前的KEY是固定的
   * */
  routes:[

    /*
     {path:'/home',component:home} 表示配置一条规则
     name:'home'  其中的home是这条规则的名称,可以通过名称来关联这条规则
     path 是固定的，当前的规则必须有锚点值的匹配路径，
     * '/' 表示路径
     * component:home 表示显示的内容，也就是路径下面要显示的内容,当前的home是一个vue文件
     * */
    {name:'home', path:'/home',component:home},
    /*{name:'login', path:'/login',component:login}*/

    {name:'login', path:'/login/:id',component:login},


    {name:'movie', path:'/movie',component:movie},

    {name:'scienceFictionFilm', path:'/scienceFictionFilm',component:scienceFictionFilm},

    {name:'comedyMovie', path:'/comedyMovie',component:comedyMovie},

      /*表示设置重定向，页面初始直接进入到规则名称为splash的页面，也就是进入到splash页面*/
    {path:'/',redirect:{name:'splash'}},
    {name:'splash', path:'/splash',component:splash},


    /*404页面
    * */
    {path:'*',component:notFoundVue},

  ]


})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*
  * 21. 4、将其路由对象传递给Vue实例,options中
  * router:router, 通过ES6可以将其简写为  router,
  * */
  router,
  store,
  components: { App },
  template: '<App/>'
})
