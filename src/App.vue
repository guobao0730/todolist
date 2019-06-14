
<template>
  <div >
    你好，Vue
     <!--
      template 表示模板标签

      vue单文件方式：
      单文件是指的以*.vue结尾的文件，最终会通过webpack编译成*.js在浏览器运行
      vue文件由template标签+script标签+style标签组成的

       注意：
       1、在Vue里面的语法要求template标签中只能有一个根标签，如果想使用多个那么需要将多个标
签包裹在一个标签里
       2、在script中 ，按照export default {在此处编写业务逻辑} 来写
       3、在style中可以设置scoped属性，让其只在template中生效

       Vue工程项目中目录的解析
       src目录存放可以看懂的源代码，具备一定的功能划分，可以利用MVC的设计模式来设计
       dist目录下一般存放的是真实上线的代码，这里面的代码一般都是都会混淆以后的代码
       webpack.config.js 文件，它主要是为了将src目录下的文件生成dist目录下的代码
       package.js 文件， 一般存放在node_modules/babel-loader/lib/package.json中，它主要是对
包的信息进行描述

       双向数据流：
       1、JS内存属性发生改变，影响页面的变化
       2、页面的改变影响JS内存属性的改变
      -->

    <hello-world></hello-world>

    <!--todo-list组件案例-->
    <todo-list></todo-list>
    <!--
    11、常用指令的练习
    -->
    <common-instruction_11></common-instruction_11>


    <!--柱状图的使用-->
    <e-bar></e-bar>


    <!--methods和on的使用案例-->
    <methods-and-on_12></methods-and-on_12>

    <!--漂亮的学生列表-->
    <beautiful-student-list_13></beautiful-student-list_13>

    <!--父子组件的使用-->
    <parent-child-components_14></parent-child-components_14>


    <!--全局组件的使用-->
    <globainamingresources_15></globainamingresources_15>

    <!--父组件传值给子组件-->
    <father-the-son_16></father-the-son_16>

    <!--子组件传递数据给父组件-->
    <child-the-parent_17></child-the-parent_17>


    <!--过滤器-->
    <filter_18></filter_18>


    <!--获取DOM元素-->
    <get-d-o-m-element_19></get-d-o-m-element_19>


    <!--
    mint-ui插件的使用
    -->
    <mint_ui_20></mint_ui_20>


    <!--vue-router插件的使用-->
    <vue_router_21></vue_router_21>

    <!--router-link的学习-->
    <router_link_22></router_link_22>


    <!--编程导航的学习和使用-->
    <programming_navigation_23></programming_navigation_23>

    <!--
    21.5、留坑(vue-router路由所需要的)
    -->
    <router-view></router-view>


    <!--重定向和404-->
    <redirect-and404_24></redirect-and404_24>

    <!--多视图-->
    <multi_view_25></multi_view_25>

    <!--
    axios的使用（处理网络请求的）
    -->
    <axios_26></axios_26>

    <!--过滤器-->
    <interceptor_27></interceptor_27>

    <!--watch关键字-->
    <watch_28></watch_28>

    <!--VUX的使用-->
    <vux_29></vux_29>

    <!--moment时间处理类库的使用-->
    <Moment_30></Moment_30>

    <!--Element组件的使用-->
    <Element_31></Element_31>

    <!---->
    <vue-arrays_32></vue-arrays_32>

    <!--利用Vue动态更改标签的属性-->
    <dynamically-changing-label-properties_33></dynamically-changing-label-properties_33>

    <vue-preview_34></vue-preview_34>

    <FileUpload_35></FileUpload_35>


    <vue2-preview_36></vue2-preview_36>

    <vuex_37></vuex_37>


    <jsplumb_one_38></jsplumb_one_38>

    <DragManuallyCreateLink_39></DragManuallyCreateLink_39>


<!--    <js-plumb_two_40></js-plumb_two_40>-->

   <!-- <js-plumb_three_41></js-plumb_three_41>-->

    <JQuery_42></JQuery_42>

    <JQuery_ui_43></JQuery_ui_43>

    <Jquery_contextmenu_44></Jquery_contextmenu_44>

    <element-u-i-remote-search_45></element-u-i-remote-search_45>

    <element-u-i-table_46></element-u-i-table_46>


    <element-u-i_-time-picker_47></element-u-i_-time-picker_47>

    <vuex_48></vuex_48>

    <Dialog_Echarts_49></Dialog_Echarts_49>

    <progress-dialog_50></progress-dialog_50>

    <picture-upload_51></picture-upload_51>


    <meteor-shower_52></meteor-shower_52>

    <Computed_53></Computed_53>

    <Vuex_54></Vuex_54>

    <driver_55></driver_55>

  </div>
</template>

<!--在Vue语法中script标签中都是用来处理逻辑的-->
<script>
import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList'
import CommonInstruction_11 from './components/CommonInstruction_11'
import EBar from './components/EBar'
import MethodsAndOn_12 from './components/MethodsAndOn_12'
import BeautifulStudentList_13 from './components/BeautifulStudentList_13'
import ParentChildComponents_14 from './components/ParentChildComponents_14'
import Globainamingresources_15 from './components/Globainamingresources_15'
import FatherTheSon_16 from './components/FatherTheSon_16'
import ChildTheParent_17 from './components/ChildTheParent_17'
import Filter_18 from './components/Filter_18'
import GetDOMElement_19 from './components/GetDOMElement_19'
import mint_ui_20 from './components/mint_ui_20'
import vue_router_21 from './components/vue_router_21'
import router_link_22 from './components/router_link_22'
import programming_navigation_23 from  './components/programming_navigation_23'
import redirectAnd404_24 from './components/redirectAnd404_24'
import multi_view_25 from './components/multi_view_25'
import axios_26 from './components/axios_26'
import interceptor_27 from './components/interceptor_27'
import watch_28 from './components/watch_28'
import vux_29 from './components/vux_29'
import Moment_30 from './components/Moment_30'
import Element_31 from './components/Element_31'
import VueArrays_32 from './components/VueArrays_32'
import DynamicallyChangingLabelProperties_33 from './components/DynamicallyChangingLabelProperties_33'
import VuePreview_34 from './components/VuePreview_34'
import FileUpload_35 from './components/FileUpload_35'
import Vue2Preview_36 from './components/Vue2Preview_36'
import Vuex_37 from './components/Vuex_37.vue'
import Jsplumb_one_38 from './components/Jsplumb_one_38.vue'
import DragManuallyCreateLink_39 from './components/DragManuallyCreateLink_39.vue'
/*import JsPlumb_two_40 from './components/JsPlumb_two_40.vue'*/
/*import JsPlumb_three_41 from './components/JsPlumb_three_41.vue'*/
import JQuery_42 from './components/JQuery_42.vue'
import JQuery_ui_43 from './components/JQuery_ui_43.vue'
import Jquery_contextmenu_44 from './components/Jquery_contextmenu_44'
import ElementUIRemoteSearch_45 from './components/ElementUIRemoteSearch_45'
import ElementUITable_46 from './components/ElementUITable_46'
import ElementUI_TimePicker_47 from './components/ElementUI_TimePicker_47'
import Vuex_48 from './components/Vuex_48'
import Dialog_Echarts_49 from './components/Dialog_Echarts_49'
import ProgressDialog_50 from './components/ProgressDialog_50.vue'
import PictureUpload_51 from './components/PictureUpload_51.vue'
import MeteorShower_52 from './components/MeteorShower_52'
import Computed_53 from './components/Computed_53'
import Vuex_54 from './components/Vuex_54'
import Driver_55 from './components/Driver_55'
export default {
  components: {
    'todoList': TodoList,
    'commonInstruction_11': CommonInstruction_11,
    'eBar':EBar,
    'methodsAndOn_12':MethodsAndOn_12,
    'beautifulStudentList_13':BeautifulStudentList_13,
    'parentChildComponents_14':ParentChildComponents_14,
    'helloWorld':HelloWorld,
    'globainamingresources_15':Globainamingresources_15,
    'fatherTheSon_16':FatherTheSon_16,
    'childTheParent_17':ChildTheParent_17,
    'Filter_18':Filter_18,
    'GetDOMElement_19':GetDOMElement_19,
    'mint_ui_20':mint_ui_20,
    'vue_router_21':vue_router_21,
    'router_link_22':router_link_22,
    'programming_navigation_23':programming_navigation_23,
    'redirectAnd404_24':redirectAnd404_24,
    'multi_view_25':multi_view_25,
    'axios_26':axios_26,
    'interceptor_27':interceptor_27,
    'watch_28':watch_28,
    'vux_29':vux_29,
    'Moment_30':Moment_30,
    'Element_31':Element_31,
    'VueArrays_32':VueArrays_32,
    'DynamicallyChangingLabelProperties_33':DynamicallyChangingLabelProperties_33,
    'VuePreview_34':VuePreview_34,
    'FileUpload_35':FileUpload_35,
    'Vue2Preview_36':Vue2Preview_36,
    'Vuex_37':Vuex_37,
    'Jsplumb_one_38':Jsplumb_one_38,
    'DragManuallyCreateLink_39':DragManuallyCreateLink_39,
    /*'JsPlumb_two_40':JsPlumb_two_40,*/
    /*'JsPlumb_three_41':JsPlumb_three_41,*/
    'JQuery_42':JQuery_42,
    'JQuery_ui_43':JQuery_ui_43,
    'Jquery_contextmenu_44':Jquery_contextmenu_44,
    'ElementUIRemoteSearch_45':ElementUIRemoteSearch_45,
    'ElementUITable_46':ElementUITable_46,
    'ElementUI_TimePicker_47':ElementUI_TimePicker_47,
    'Vuex_48':Vuex_48,
    'Dialog_Echarts_49':Dialog_Echarts_49,
    'ProgressDialog_50':ProgressDialog_50,
    'PictureUpload_51':PictureUpload_51,
    MeteorShower_52,
    Computed_53,
    Vuex_54,
    Driver_55
  },
  /*
    在这里主要主要编写逻辑代码
  */

  /*
    函数编写方式一：
    data:function(){

    }
  */


}
</script>

<style>

</style>
