<template>
    <div>
      ============================60、@keyup 事件的使用=========================
      <!--
      @keyup 键盘按下事件


      @keyup.native.enter 表示按下回车键的事件监听

      Vue 组件中的键盘事件为什么要加上native才会生效？
          因为当前是给一个已经封装的组件上添加@keyup事件，如果你在原生的input标签上面就无需添加native
      -->




      <!--
      在原生组件中的使用案例
       @keyup.enter (回车键松开的使用案例)
      -->
      <div>
        <input type="text" placeholder="请输入账号"/>
      </div>
      <div>
        <input type="password" placeholder="请输入密码" @keyup.enter="keyupTest"/>
      </div>





      <!--
      在Element-ui 组件中的使用
       @keyup.native.enter  （回车键松开的使用案例）
      -->
      <div>
        <el-input
          placeholder="请输入账号"
          v-model="account"
          clearable
          style="width: 15%"
        >
        </el-input>
      </div>

      <div>
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="password"
          clearable
          style="width: 15%"
          @keyup.native.enter="keyupTest"
        >
        </el-input>
      </div>






    </div>
</template>

<script>
    export default {
        name: "@keyup_60",
      data(){
          return {
            password:"",
            account:"",
          }
      },
      methods:{
        keyupTest(){
          console.log("正在登录中......")
        }
      }
    }
</script>

<style scoped>

</style>
