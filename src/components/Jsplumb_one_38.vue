<template>
    <div>
      ============================38、Jsplumb(展示图表的工具)=========================

      <div id="labelManage">
        <div id="main">
          <div class="flowchart-demo" id="flowchart-demo">
            <div class="window" id="flowchartWindow1" v-on:dblclick="removeNode('flowchartWindow1')">1
            </div>
            <div class="window" id="flowchartWindow2">2
            </div>
            <div class="window" id="flowchartWindow3">3
            </div>
            <div class="window" id="flowchartWindow4">4
            </div>
            <div class="window" id="flowchartWindow5">5
            </div>
            <div class="window" id="flowchartWindow6">6
            </div>
            <div class="window" id="flowchartWindow7">7
            </div>
            <div class="window" id="flowchartWindow8">8
            </div>
            <div class="window" id="flowchartWindow9">9
            </div>
            <div class="window" id="flowchartWindow10">10
            </div>
            <div class="window" id="flowchartWindow11">11
            </div>
            <div class="window changeNodeSize" id="flowchartWindow12">12
            </div>
            <div class="window changeNodeSize" id="flowchartWindow13">13
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
      data(){
          return {

          }
      },

      /*
   mounted()函数是vue生命周期中的一个函数
   当DOM生成以后所调用的函数
   这个函数一般都是用来操作DOM
   * */
      mounted(){
        this.jsPlumb();
      },
      methods:{
        jsPlumb(){

          /*
          详见jsPlumb中文文档
          * https://wdd.js.org/jsplumb-chinese-tutorial/#/?id=_11-%E4%BB%80%E4%B9%88%E6%98%AFjsplumb%EF%BC%9F
          * */
          jsPlumb.ready(function () {


            /*

            endpoint  端点类型，形状  Dot(表示圆形端点)  Rectangle（方形原点）
            connector: ['Bezier'],  表示连线的四种样式,Bezier表示贝塞尔曲线 ,Flowchart: 具有90度转折点的流程线,StateMachine: 状态机,Straight: 直线
            anchor: ['Bottom', 'Top']   anchor表示描点, ['Bottom', 'Top'] 表示起始节点的描点在底部，目标节点的锚点在顶部，
            paintStyle: { stroke: 'lightgray', strokeWidth: 3 },   paintStyle表示绘画样式, stroke: 'lightgray' 表示画笔的颜色为灰色(也就是连接线的颜色), strokeWidth: 3 表示画笔的宽度(也就是连接线的宽度)
            endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 }     endpointStyle表示端点的样式,fill: 'red'表示端点的颜色,   outlineStroke: 'darkgray' 表示端点边框颜色,   outlineWidth: 2  表示端点边框的宽度（但是只有当endpoint是Rectangle时才会生效）
            overlays: [ ['Arrow', { width: 12, length: 12, location: 0.5 }] ]  overlays表示设置连接线箭头的样式 。 Arrow 表示一个可以配置的箭头，PlainArrow表示原始类型的箭头，Diamond表示菱形箭头，Custom表示自定义箭头。width 箭头的宽度。 length表示箭头的长度。location表示箭头处在连接线的位置，0.5表示箭头在连接线的中间，1表示在连接线的末端。该箭头可以添加多个
             */

            //=========将连接样式单独抽离=========
            let connectStyle = {
              endpoint: 'Rectangle',
              connector: ['Flowchart'],
              paintStyle: { stroke: 'black', strokeWidth: 1 },
              endpointStyle: { fill: 'lightgray', outlineStroke: 'lightgray', outlineWidth: 2 ,width: 12, length: 5},
              overlays: [ ['PlainArrow', { width: 12, length: 12, location: 1 }] ],
            }
            /*

           =========connect表示 建立连线=========
            source 起始节点,可以是标签id/element对象/Endpoint端点
            target 目标节点,可以是标签id/element对象/Endpoint端点
            connectStyle 表示连接样式
            * */
            jsPlumb.connect({
              source: 'flowchartWindow1',
              target: 'flowchartWindow2',
            },connectStyle);


            //=========设置flowchartWindow1节点可以拖动PlainArrow
            /*
            参数一：可以传入节点标签id/元素id列表/选择器
            参数二：{containment: 'parent'} 表示在父容器内部拖动，不能越出(限制节点的拖动范围)
            */
            jsPlumb.draggable('flowchartWindow1',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow2',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow3',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow4',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow5',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow6',{containment: 'parent'});
            jsPlumb.draggable('flowchartWindow9',{containment: 'parent'});


            //=========增加一个端点=========
            /*
            addEndpoint 添加端点
            *参数一：可以是标签id/某些元素的选择器/其中任何一个元素的数组  必填项
            *参数二： anchor: ['Bottom'], 表示描点的位置
            *返回端点对象
            * */
            let endpoint3 = jsPlumb.addEndpoint('flowchartWindow3',{
              anchor: ['Bottom'],
            });


            let endpoint4 = jsPlumb.addEndpoint('flowchartWindow4',{
              anchor: ['Top'],
            });

            //将节点3和节点4进行连接
            jsPlumb.connect({
              source: endpoint3,
              target: endpoint4,
            });


            //this.dragCreateConnection();
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
              connector: ['Straight'],
              endpointStyle: { fill: 'lightgray', outlineStroke: 'lightgray', outlineWidth: 1 ,width: 12, length: 5},
              maxConnections: -1,
            };

            let endpoint5 = jsPlumb.addEndpoint('flowchartWindow5',{
              anchor: ['Bottom'],
            },dragConnection);


            /*添加多个锚点*/
            let endpoint6_1 = jsPlumb.addEndpoint('flowchartWindow6',{
              anchor: [0.25, 0, 0, -1],
            },dragConnection);

            /*添加多个锚点*/
            let endpoint6_2 = jsPlumb.addEndpoint('flowchartWindow6',{
              anchor: [0.75, 0, 0, -1],
            },dragConnection);


            let endpoint9 = jsPlumb.addEndpoint('flowchartWindow9',{
              anchor: ['Top'],
            },dragConnection);




            //===============给所有链接添加事件(比如单击，双击等等)===============
            /*
            contextmenu 表示右键单击事件
             */
            jsPlumb.bind('click', function (conn, originalEvent) {
              let isDelete = confirm("确定删除所点击的链接吗？");
              if (isDelete){
                //删除所点击的连线
                jsPlumb.deleteConnection(conn)
              }
            })



            //this.isConnect();

            /*
            * ===============通过UUID进行连接端点===============
            * */
            jsPlumb.addEndpoint('flowchartWindow7', {
              anchors: ['Right'],
              uuid: 'fromId'
            })

            jsPlumb.addEndpoint('flowchartWindow8', {
              anchors: ['Left'],
              uuid: 'toId'
            })

            console.log('3 秒后建立连线')
            setTimeout(function () {
              jsPlumb.connect({ uuids: ['fromId', 'toId'] })
            }, 3000)







            /*
            * ===============给端点增加样式===============
            * */

            /*
            *
            * */
            var common = {
              isSource: true, //表示起始节点可以拖拽建立连接
              isTarget: true, //表示目标节点可以拖拽建立连接
              connector: 'Straight',  //表示连线的演示为直线
              endpoint: 'Dot',        //表示端的样式为圆形
              paintStyle: {           //画笔样式
                fill: 'red',          //表示端点的填充色为红色
                outlineStroke: 'blue',  //表示端点的边框颜色为蓝色
                strokeWidth: 10         //表示端点边框的宽度
              },
              hoverPaintStyle: {              //表示悬停画笔样式,鼠标悬停在端点时的样式
                outlineStroke: 'yellow'       //表示鼠标悬停在端点时的颜色为黄色
              },
              connectorStyle: {               //连接线的样式
                outlineStroke: 'green',       //连接线的颜色
                strokeWidth: 5                //连接线的宽度
              },
              connectorHoverStyle: {          //表示鼠标悬停在连线时的样式
                strokeWidth: 10                //鼠标悬停在连线时线的宽度
              }
            }

            jsPlumb.addEndpoint('flowchartWindow10', {
              anchors: ['Right']
            }, common)

            jsPlumb.addEndpoint('flowchartWindow11', {
              anchor: 'Left'
            }, common)

            jsPlumb.addEndpoint('flowchartWindow11', {
              anchor: 'Right'
            }, common)





            /*
            * ===============改变节点的尺寸===============
            * */











          })
        },

        //===============移出节点，包括节点相关的链接===============
        removeNode(id){
          jsPlumb.remove(id);
        },




        /*
        * ===============连接前的检查，判断是否可以建立连接===============
        * */
        isConnect(){

          // 当链接建立前
          jsPlumb.bind('beforeDrop', function (info) {
            var a = 10
            var b = 2
            if (a < b) {
              console.log('链接会自动建立')
              return true // 链接会自动建立
            } else {
              console.log('链接取消')
              return false // 链接不会建立，注意，必须是false
            }
          })
        },

        /* ===============给端点设置样式 ===============*/
        endpointStyle(){


        }

      }


    }
</script>

<style scoped lang="scss">
  .flowchart-demo {
    width: 100%;
    height: 1500px;
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
    left: 36em;
  }
  #flowchartWindow2 {

    top: 34em;
    left: 5em;


  }
  #flowchartWindow3 {
    top: 27em;
    left: 48em;
  }
  #flowchartWindow4 {
    top: 23em;
    left: 22em;
  }

  #flowchartWindow5 {
    top: 1em;
    left: 70em;
  }

  #flowchartWindow6 {
    top: 26em;
    left: 70em;
  }

  #flowchartWindow7 {
    top: 50em;
    left: 50em;
  }

  #flowchartWindow8 {
    top: 50em;
    left: 80em;
  }

  #flowchartWindow9{
    top: 26em;
    left: 80em;
  }

  #flowchartWindow10{
    top: 50em;
    left: 5em;
  }

  #flowchartWindow11{
    top: 50em;
    left: 30em;
  }

  #flowchartWindow12{
    top: 60em;
    left: 5em;
  }

  #flowchartWindow13{
    top: 60em;
    left: 30em;
  }

</style>
