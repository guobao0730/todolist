<template>
  <div>
    ============================40、Jsplumb插件的使用--单个节点添加多个锚点=========================

    <div id="labelManage">
      <div id="main">
        <div class="flowchart-demo" id="flowchart-demo">
          <div class="window" id="flowchartWindow1">1
          </div>
          <div class="window" id="flowchartWindow2">2
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import jsplumb from 'jsplumb'

  export default {
    name: "vue2-preview_36",
    data() {

    },

    /*
 mounted()函数是vue生命周期中的一个函数
 当DOM生成以后所调用的函数
 这个函数一般都是用来操作DOM
 * */
    mounted() {

      this.jsPlumb();
    },
    methods: {
      jsPlumb() {

        jsPlumb.ready(function () {


          //=========设置flowchartWindow1节点可以拖动PlainArrow
          /*
          参数一：可以传入节点标签id/元素id列表/选择器
          参数二：{containment: 'parent'} 表示在父容器内部拖动，不能越出(限制节点的拖动范围)
          */
          jsPlumb.draggable('flowchartWindow1', {containment: 'parent'});
          jsPlumb.draggable('flowchartWindow2', {containment: 'parent'});


          //=========拖动创建连接=========
          //jsPlumb.setContainer('diagramContainer');
          /*
          核心代码：
          isSource: true,
          isTarget: true,

          dragConnection 表示拖动的配置
          当isSource和isTarget都为true时，那么就可以实现拖动创建连接
          connector: ['Straight'], 表示连线的样式为直线
          endpointStyle 表示端点的样式
          maxConnections: -1, -1表示可以拖拽出多条线，默认是1，如果给定数字5表示最多可以连接5条线
          * */
          let dragConnection = {
            isSource: true,
            isTarget: true,
            /*     connector: ['Straight'],
                 endpointStyle: { fill: 'lightgray', outlineStroke: 'lightgray', outlineWidth: 2 ,width: 12, length: 5},*/
            maxConnections: -1,

            endpoint: 'Rectangle',
            connector: ['Straight'],
            paintStyle: {stroke: 'black', strokeWidth: 1},
            endpointStyle: {
              fill: 'lightgray',
              outlineStroke: 'lightgray',
              outlineWidth: 2,
              width: 5,
              length: 5
            },
            overlays: [['PlainArrow', {width: 12, length: 12, location: 1}]],
          };

          let endpoint5 = jsPlumb.addEndpoint('flowchartWindow1', {
            anchor: ['Bottom'],
          }, dragConnection);


          /*添加多个锚点
           anchor: [0.25, 0, 0, -1],
           anchor : 由四个元素构成，分为x,y,dx,dy，其中x,y的值可为0~1(y轴的0表示显示在节点的顶部，1表示显示在节点的底部),dx,dy的值为-1~1
 *          x代表水平方向，y代表竖直方向，dx代表点引出来的线出来时水平方向的偏移角度,dy代表点引出来的线出来时竖直方向的偏移角度
          * */
          /* let endpoint6_1 = jsPlumb.addEndpoint('flowchartWindow2',{
             anchor: [0.25, 0, 0, -1],
           },dragConnection);

           /!*添加多个锚点*!/
           let endpoint6_2 = jsPlumb.addEndpoint('flowchartWindow2',{
             anchor: [0.55, 0, 0, -1],
           },dragConnection);

           /!*添加多个锚点*!/
           let endpoint6_3 = jsPlumb.addEndpoint('flowchartWindow2',{
             anchor: [0.75, 0, 0, -1],
           },dragConnection);*/


          /*
          * 该方式有BUG
          * Continuous 表示根据节点位置，自动调整位置的锚点，当前的锚点不是固定的
          * */
          /*  for (let i = 0; i < 8; i++) {
              jsPlumb.addEndpoint('flowchartWindow2',{
                anchor:[ "Continuous", { faces:["top"] }],
                type:'source',
                num:-1
              },dragConnection);
            }*/


          /*
          target
          动态添加多个锚点，并且保证其能够均匀分配，不会出现连接错位的问题
          x的取值范围是0~1
           */
          let anchorNumber = 4
          let differenceValue = 1 / (anchorNumber+1);
          let x = 0;
          for (let i = 0; i < anchorNumber; i++) {
            jsPlumb.addEndpoint('flowchartWindow2', {
              anchor: [x += differenceValue, 0, 0, -1],
              type: 'target',
              num: -1
            }, dragConnection);


          }


        })
      }
    }


  }
</script>

<style scoped lang="scss">
  .flowchart-demo {
    width: 800px;
    height: 600px;
    border: 1px solid #000;
    position: relative;
  }

  .flowchart-demo .window {
    border: 1px solid #346789;
    /*box-shadow 属性向框添加一个或多个阴影
     box-shadow: 2px 2px 19px #aaa;
     box-shadow: （必需。水平阴影的位置。允许负值） （必需。垂直阴影的位置。允许负值。）  （可选。模糊距离。） （可选。阴影的颜色。）
      因为是新属性，为了兼容各主流浏览器并支持这些主浏览器的较低版本，基于主流浏览器上使用box-shadow属性时，
      我们需要将属性的名称写成-webkit-box-shadow的形式。
      Firefox浏览器则需要写成-moz-box-shadow的形式
      欧朋浏览器  -o-box-shadow
      IE>9  -ms-box-shadow
      -webkit 是在Chrome浏览器中用的 一般是指 浏览器是webkit核心 -webkit-box-shadow
    */
    box-shadow: 2px 2px 19px #aaa;
    -o-box-shadow: 2px 2px 19px #aaa;
    -webkit-box-shadow: 2px 2px 19px #aaa;
    -moz-box-shadow: 2px 2px 19px #aaa;

    /* -moz-border-radius 火狐浏览器的边框圆角*/
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
    opacity: 0.5;
    filter: alpha(opacity=80);
    text-align: center;
    position: absolute;
    background-color: #eeeeef;
    color: black;
    font-family: helvetica;
    font-size: 0.9em;
    line-height: 60px;
    width: 60px;
    height: 60px;
  }

  .flowchart-demo .window:hover {
    box-shadow: 2px 2px 19px #444;
    -o-box-shadow: 2px 2px 19px #444;
    -webkit-box-shadow: 2px 2px 19px #444;
    -moz-box-shadow: 2px 2px 19px #444;
    opacity: 0.6;
    filter: alpha(opacity=60);
  }

  .flowchart-demo .active {
    border: 1px dotted green;
  }

  .flowchart-demo .hover {
    border: 1px dotted red;
  }

  #flowchartWindow1 {
    top: 7em;
    left: 30em;
  }

  #flowchartWindow2 {
    top: 34em;
    left: 30em;
  }


</style>
