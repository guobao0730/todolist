<template>
    <div>
      ============================32、在Vue项目中实现动态添加或者删除对象和对象数组============================
      <div>
        <el-button type="primary" icon="el-icon-plus" @click="add"></el-button>

        <el-button type="primary" icon="el-icon-delete" @click="deleteItem"></el-button>

        <el-row :gutter="50"   v-for="(item,index) in data" :key="index">

          <!--Type-->
          <el-col :span="4">
            <div class="grid-content bg-purple">

              <el-row >
                <el-col :span="24">


                  <el-select v-model="value" placeholder="请选择" size="mini">
                    <el-option
                      v-for="obj in item.type"
                      :key="obj.value"
                      :label="obj.label"
                      :value="obj.value">
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
                      v-for="obj in item.value"
                      :key="obj.value"
                      :label="obj.label"
                      :value="obj.value">
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
                v-model="item.parameter"
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
                v-model="item.default"
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
                v-model="item.description"
                clearable>
              </el-input>

            </div>
          </el-col>

          <!--Del-->
          <el-col :span="4">
            <div class="grid-content bg-purple-light " id="checkboxSpacingDiv">

              <!-- `checked` 为 true 或 false -->
              <el-checkbox v-model="item.isDelete"  size="medium"></el-checkbox>

            </div>
          </el-col>

        </el-row>

      </div>



    </div>
</template>

<script>
    export default {
        name: "VueArrays_32",
      data(){
          return {
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
                isDelete:false,
              },
            ],
            value:'',

          }
      },
      methods:{
        add(){

          this.data.push({
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
            isDelete:false,
          });

        },
        deleteItem(){
          /*遍历数组，然后根据选中的状态获取对应的下标，然后进行删除*/
          for (let i = 0;i<this.data.length;i++){
            let obj = this.data[i];
            if (obj.isDelete){
              this.data.splice(i,1);
              i--
            }
          }




        }
      }
    }
</script>

<style scoped>

</style>
