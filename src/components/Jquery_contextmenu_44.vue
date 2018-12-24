<template>
  <div id="root-div">
    ============================44、在vue项目中使用Jquery-contextmenu=========================

    <!--
    使用步骤：
    1、安装： npm i jquery-contextmenu --save-dev
    2、在main.js文件中引包：(注意：在引入样式时可以点击进去jquery-contextmenu的安装目录中查找对应的css文件，然后按需引入即可)
      import Jquery_contextmenu from 'jquery-contextmenu'
      Vue.use(Jquery_contextmenu)
      import 'jquery-contextmenu/dist/jquery.contextMenu.css'

    3、使用：


    -->
    <button class="with-cool-menu">Jquery-contextmenu</button>
  </div>
</template>

<script>
  export default {
    name: "Jquery_contextmenu_44",
    mounted() {


      $.contextMenu({
        selector: '.with-cool-menu',
        callback: function (key, options) {
          var m = "clicked: " + key;
          window.console && console.log(m) || alert(m);
        },
        items: {
          "edit": {name: "Edit", icon: "edit"},
          "cut": {name: "Cut", icon: "cut"},
          copy: {name: "Copy", icon: "copy"},
          "paste": {name: "Paste", icon: "paste"},
          "delete": {name: "Delete", icon: "delete"},
          "sep1": "---------",
          "quit": {
            name: "Quit", icon: function () {
              return 'context-menu-icon context-menu-icon-quit';
            }
          }
        }
      });

      $('.with-cool-menu').on('click', function (e) {
        console.log('clicked', this);
      })




      $.contextMenu({
        selector: '#root-div',
        callback: function (key, options) {
          var m = "clicked: " + key;
          window.console && console.log(m) || alert(m);
        },
        items: {
          copy: {name: "Copy", icon: "copy"},
          "paste": {name: "Paste", icon: "paste"},
          "delete": {name: "Delete", icon: "delete"},
          "sep1": "---------",
          "quit": {
            name: "Quit", icon: function () {
              return 'context-menu-icon context-menu-icon-quit';
            }
          }
        }
      });



    }

  }
</script>

<style scoped>

  #root-div {

    width: 100%;
    height: 300px;
    background-color: grey;
  }

</style>
