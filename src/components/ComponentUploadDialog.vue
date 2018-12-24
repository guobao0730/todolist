<template>
    <!--组件上传对话框-->
  <div>


    <!--自定义对话框，此页面都是对护框中的内容，没有对话框本身-->

      <el-form :model="form" label-position="left">

        <el-row :gutter="100">

          <!--左侧-->
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="名称" :label-width="formLabelWidth">
                <!--通过父容器限制子容器-->
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>


              <el-form-item label="类型" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option label="ETL" value="shanghai"></el-option>
                  <el-option label="Tensorflow" value="beijing"></el-option>
                </el-select>
              </el-form-item>




              <el-form-item label="是否正式版" :label-width="formLabelWidth">
                <el-select v-model="form.isOfficialEdition" placeholder="请选择">
                  <el-option label="是" value="shanghai"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
              </el-form-item>


              <el-form-item label="版本" :label-width="formLabelWidth">
                <el-input v-model="form.version" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="所有人" :label-width="formLabelWidth">
                <el-input v-model="form.all" autocomplete="off"></el-input>
              </el-form-item>

            </div>
          </el-col>


          <!--右侧-->
          <el-col :span="12">
            <div class="grid-content bg-purple-light">

              <el-form-item label="目录" :label-width="formLabelWidth">
                <el-input v-model="form.catalog" autocomplete="off"></el-input>
              </el-form-item>


              <el-form-item label="是否可编辑" :label-width="formLabelWidth">
                <el-select v-model="form.isEdit" placeholder="请选择">
                  <el-option label="是" value="shanghai"></el-option>
                  <el-option label="否" value="beijing"></el-option>
                </el-select>
              </el-form-item>




              <el-form-item label="源码地址" :label-width="formLabelWidth">
                <el-input v-model="form.sourceAddress" autocomplete="off"></el-input>
              </el-form-item>





              <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="form.creationTime" autocomplete="off"></el-input>
              </el-form-item>






            </div>
          </el-col>
        </el-row>




        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input v-model="form.des" autocomplete="off" type="textarea"  :rows="3"></el-input>
              </el-form-item>

            </div>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              CMDFormat

              <div id="borderDiv">

                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">

                      <!--CMD一行
                      :gutter="30" 表示设置列与列之间的间距
                      :span="16" 类似于Android中的权重属性，不过在android中数值没有上限，而此时的数值上限为24
                      -->
                      <el-row :gutter="30">
                        <el-col :span="16">
                          <div class="grid-content bg-purple-dark">

                            <!--
label-position="left" 表示设置左对齐
-->
                            <el-form-item label="CMD" :label-width="formLabelWidth">
                              <el-input v-model="form.cmd" autocomplete="off"></el-input>
                            </el-form-item>


                          </div>
                        </el-col>

                        <el-col :span="5">
                          <div class="grid-content bg-purple-dark">

                            <!--
                            :gutter="10" 添加和删除之前的间距
                            -->
                            <el-row :gutter="10">


                              <el-col :span="12">
                                <div class="grid-content bg-purple-dark">
                                  <el-button type="primary" icon="el-icon-plus" ></el-button>
                                </div>
                              </el-col>


                              <el-col :span="12">
                                <div class="grid-content bg-purple-dark">
                                  <!--添加和删除-->
                                  <el-button type="primary" icon="el-icon-delete" ></el-button>
                                </div>
                              </el-col>


                            </el-row>



                          </div>
                        </el-col>


                        <el-col :span="3">
                          <div class="grid-content bg-purple-dark">

                            <el-button type="success">生成</el-button>

                          </div>
                        </el-col>
                      </el-row>


                      <!--type
                      :gutter="50" 设置6个自条目之间的间距
                      -->
                      <el-row :gutter="50">
                        <el-col :span="4">
                          <div class="grid-content bg-purple bottomStyle">
                            Type
                          </div>
                        </el-col>

                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            Value
                          </div>
                        </el-col>

                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            Parameter
                          </div>
                        </el-col>

                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            Default
                          </div>
                        </el-col>

                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            Description
                          </div>
                        </el-col>

                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            Del
                          </div>
                        </el-col>

                      </el-row>



                      <el-row :gutter="50">

                        <!--Type-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple">

                            <el-row >
                              <el-col :span="24">
                                <el-select v-model="value" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in form.data[0].type"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-col>
                            </el-row >


                          </div>
                        </el-col>


                        <!--value-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">

                            <el-row >
                              <el-col :span="24">
                                <el-select v-model="value" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in form.data[0].type"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-col>
                            </el-row >

                          </div>
                        </el-col>

                        <!--Parameter-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple">

                            <el-input
                              size="mini"
                              placeholder="请输入内容"
                              v-model="form.data[0].parameter"
                              clearable>
                            </el-input>

                          </div>
                        </el-col>



                        <!--Default-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">

                            <el-input
                              size="mini"
                              placeholder="请输入内容"
                              v-model="form.data[0].default"
                              clearable>
                            </el-input>

                          </div>
                        </el-col>

                        <!--Description-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple">

                            <el-input
                              size="mini"
                              placeholder="请输入内容"
                              v-model="form.data[0].description"
                              clearable>
                            </el-input>

                          </div>
                        </el-col>

                        <!--Del-->
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light " id="checkboxSpacingDiv">

                            <!-- `checked` 为 true 或 false -->
                            <el-checkbox v-model="form.data[0].isDelete"  size="medium"></el-checkbox>

                          </div>
                        </el-col>

                      </el-row>



                    </div>
                  </el-col>
                </el-row>

              </div>




            </div>
          </el-col>
        </el-row>


        <!--上传-->
        <div class="uploadRootDiv">

          <el-row >
            <el-col :span="22">
              <div class="grid-content bg-purple-dark" id="submissionFileDiv">

                <!--上传文件夹-->
                <img src="../assets/upload.png" class="uploadImg"/>

                <!--拖动上传-->
                <img src="../assets/bottomBorder.png" class="uploadImg"/>

              </div>
            </el-col>

            <!--          <el-col :span="21">
                        <div class="grid-content bg-purple-dark">


                          <el-button type="primary" icon="el-icon-share" ></el-button>

                        </div>
                      </el-col>-->

            <el-col :span="2">
              <div class="grid-content bg-purple-dark">


                <div id="submissionDiv">
                  <el-button type="success" >提交</el-button>
                </div>


              </div>
            </el-col>


          </el-row>

        </div>




        <!--        &lt;!&ndash;测试
                :gutter="100" 表示设置列与列之间的间距
                &ndash;&gt;
                <el-row :gutter="100">

                  &lt;!&ndash;左侧&ndash;&gt;
                  <el-col :span="12">
                    <div class="grid-content bg-purple-dark">

                      &lt;!&ndash;
                      label-position="left" 表示设置文字输入框中的左侧文字左对齐
                      &ndash;&gt;
                      <el-form label-position="right" label-width="80px" >

                        <el-form-item label="名称">
                          <el-input ></el-input>
                        </el-form-item>

                        <el-form-item label="活动区域">
                          <el-input ></el-input>
                        </el-form-item>

                        <el-form-item label="活动形式">
                          <el-input ></el-input>
                        </el-form-item>

                      </el-form>


                    </div>
                  </el-col>


                  &lt;!&ndash;右侧&ndash;&gt;
                  <el-col :span="12">
                    <div class="grid-content bg-purple-dark">

                      &lt;!&ndash;
               label-position="left" 表示设置左对齐
               &ndash;&gt;
                      <el-form label-position="left" label-width="80px" >

                        <el-form-item label="名称">
                          <el-input ></el-input>
                        </el-form-item>

                        <el-form-item label="活动区域">
                          <el-input ></el-input>
                        </el-form-item>

                        <el-form-item label="活动形式">
                          <el-input ></el-input>
                        </el-form-item>

                      </el-form>

                    </div>
                  </el-col>

                </el-row>-->





      </el-form>









  </div>


</template>

<script>
    export default {
        name: "ComponentUploadDialog",
      /*向外暴露是否显示对话框的属性*/

      data(){
        return {
          formLabelWidth: '120px',
          form: {
            name: '',
            catalog:'',
            type:'',
            isEdit:'',
            isOfficialEdition:'',
            sourceAddress:'',
            version:'',
            creationTime:'',
            all:'',
            des:'',
            cmd:'',
            data:[
              {
                type: [{
                  value: '选项1',
                  label: 'in'
                },
                   {
                  value: '选项3',
                  label: 'out'
                }],
                value:[{
                  value: '选项1',
                  label: 'CSV'
                },
                  {
                    value: '选项3',
                    label: 'TSV'
                  }],
                parameter:'',
                default:'',
                description:'',
                isDelete:'',
              },
            ],
          },

          value:'',

        }
      },
      methods:{

      }
    }
</script>

<style scoped>

  /*
  通过限制父容器的宽度从而达到限制子容器的宽度
  */

  /*
  修改el-form-item 组件中的原样式  (右侧箭头)
  */
  i.el-select__caret.el-input__icon.el-icon-arrow-up {
    background-color: #50BAE2;
    width: 40px;
    border-top-left-radius:0.3em;
    border-top-right-radius:0em;
    border-bottom-right-radius:0em;
    border-bottom-left-radius:0.3em;
  }



  /*去除右侧箭头与父容器右侧的间距*/
  .el-input.el-input--suffix.el-input__suffix {
    right: 0px !important;
  }


  #nameRootDiv {
    float: left;
  }

  #catalogRootDiv {
    float: right;
  }


  /*自定义边框*/
  #borderDiv {
    border: 1px solid #DCDFE6;
    border-radius: 2px;
    padding: 20px;
    margin-top: 10px;

  }


  .bottomStyle {
    margin-bottom: 20px;
  }

  /*设置checkbox的顶部间距*/
  #checkboxSpacingDiv {
    margin-top: 5px;
  }

  /*上传*/
  .uploadRootDiv {
    margin-top: 30px;
    border: 1px solid #DCDFE6;
    border-radius: 2px;
  /*设置上传根视图距离底部的间距*/
     margin-bottom: 50px;
  }

  /*提交*/
  #submissionDiv {
    margin-left: 18px;
  }



  .uploadImg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-top: 5px;
  }


</style>
