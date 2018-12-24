<template>
  <div >
    ============================================Element-ui 远程搜索组件============================================

    <!--
    selectedData 表示选中的数据数组
    multiple  表示是否可以多选,添加该属性就表示支持多选，去除即表示不支持
    remote   表示是否为远程搜索，添加该属性就表示支持，远程搜索就是当输入已有的数据时以下拉列表的方式显示对应的数据列表
filterable  表示是否可搜索 ，可搜索就表示可输入并搜索对应的数据，它并不是一个简单的下拉列表
      reserve-keyword  表示多选可搜索时，是否选中一个以后保留当前的搜索关键字，也就是是否关闭当前的下拉列表
:remote-method 远程搜索方法
 :loading 是否正在从远程获取数据
    -->
    <div>
      <el-select
        v-model="selectedData"
        multiple
        remote
        filterable
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>


  </div>

</template>

<script>
    export default {
        name: "ElementUIRemoteSearch_45",
      data() {
        return {
          options4: [],
          selectedData: [], //该数组中存放的都是选中的值
          list: [],
          loading: false,
          states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]
        }
      },
      mounted() {
          /*遍历states数组，让狗*/
        this.list = this.states.map(item => {
          return { value: item, label: item };
        });

        console.log(this.list)

      },
      methods: {

          /*
          * 该函数是输入数据以后就会调用
          * */
        remoteMethod(query) {
          console.log("remoteMethod");
          if (query !== '') {
            //如果有数据
            console.log("query !== ''----");
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.options4 = this.list.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            console.log("query == ''----");
            this.options4 = [];
          }
        }
      },
      updated(){
          console.log("updated---")


        for (let i = 0; i < this.selectedData.length; i++) {
          let value = this.selectedData[i];
          console.log(value);
          /*
          Alabama
          Alaska
           */

        }
      }
    }
</script>

<style scoped>



</style>
