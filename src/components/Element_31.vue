<template>
    <div>
      ============================31、 Element的学习使用============================
      <div>

        <!--
        使用步骤：
        1、安装 Element: npm install element-ui -S
        2、在mian.js文件中进行配置
            import Vue from 'vue'
            import Element from 'element-ui'
            //引入Element自带的样式
            import 'element-ui/lib/theme-chalk/index.css';
            Vue.use(Element)

        3、测试是否引入成功
        <el-button >Button</el-button>
        -->

        <!--
        element-按钮
        -->
        <el-button  @click="dialogVisible = true">Button</el-button>

        <!--
        =====================element-对话框=====================
        -->
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>



        <!--
        =====================嵌套的 Dialog=====================
        -->
        <el-button  @click="bigDialogVisible = true">点击打开外层 Dialog</el-button>
        <el-dialog title="外层 Dialog" :visible.sync="bigDialogVisible">
          <el-dialog
            width="30%"
            title="内层 Dialog"
            :visible.sync="minDialogVisible"
            append-to-body>
          </el-dialog>



          <div slot="footer" class="dialog-footer">
            <el-button @click="bigDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="minDialogVisible = true">打开内层 Dialog</el-button>
          </div>
        </el-dialog>




        <!--
        element-导航菜单
        -->
        <div>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false" @click='openMenu'>展开</el-radio-button>
            <el-radio-button :label="true" @click='closeMenu'>收起</el-radio-button>
          </el-radio-group>

          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="menuOpen" @close="menuClose" :collapse="isCollapse">

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>

              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>

              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>

            </el-submenu>



            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>



            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>

            <el-menu-item index="4" @click="navFour">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>

        </div>





        <el-button  @click="isVisible = true">显示自定义对话框</el-button>



        <el-dialog title="上传" :visible.sync="isVisible" width="70%" >

          <component-upload-dialog ></component-upload-dialog>

        </el-dialog>





        <div>===========vue2.0结合Element实现select动态控制input禁用===========</div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" @change="inputToDisabled(formInline.region)" placeholder="活动区域">
              <el-option label="上海" value="1"></el-option>
              <el-option label="北京" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="审批人">
            <el-input v-bind:disabled="disabledInput" v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>

        </el-form>






        <div>======================Tree 树形控件======================</div>
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>










      </div>
    </div>
</template>

<script>
  import ComponentUploadDialog from './ComponentUploadDialog'
    export default {
        name: "Element_31",

      data(){
        return {
          dialogVisible: false,
          isCollapse: true,
          isOpen:false,
          isShow:false,
          isVisible:false,
          formInline: {
            user: '',
            region: ''
          },
          disabledInput:false,
          bigDialogVisible:false,
          minDialogVisible:false,
          treeData: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }


        }
      },
      components:{
        ComponentUploadDialog
      },
      created(){


      },
      methods:{

          /*该函数是当用户点击右上角的关闭按钮时所调用的,也就是关闭对话框之前所调用的函数*/
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },


        menuOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        menuClose(key, keyPath) {
          console.log(key, keyPath);
        },

        openMenu(){
          this.isOpen = true;
        },

        closeMenu(){
          this.isOpen = false;
        },

        navFour(){
          console.log("点击了导航栏4");
        },


        inputToDisabled(region){
          console.log("region:"+region);
          //region:1
          //如果选择的是1那么禁用输入框,否则该输入框是可以输入的
          if (region==="1"){
            this.disabledInput=true;
          }else {
            this.disabledInput=false;
          }

        },


        handleNodeClick(data) {
          console.log(data);
        }


      }
    }
</script>

<style scoped>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
