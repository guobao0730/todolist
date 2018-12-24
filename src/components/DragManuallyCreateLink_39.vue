<template>
  <div>
    ============================39、Jsplumb手动拖动Demo=========================
    <div id="diagramContainer">
      <div id="item_left" class="item"></div>
      <div id="item_right" class="item" style="margin-left:50px;"></div>
      <div id="item_right-2" class="item" style="margin-left:50px;margin-top: 100px"></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DragManuallyCreateLink_39",
      data(){
        return {

        }
      },

      mounted(){
          this.jsPlumbInit();
      },
      methods:{
        jsPlumbInit(){
          /* global jsPlumb */
          let config = {}
          config.connectorPaintStyle = {
            lineWidth: 1,
            strokeStyle: '#4caf50',
            joinstyle: 'round',
            fill: 'pink',
            outlineColor: '',
            outlineWidth: ''
          }

          // 鼠标悬浮在连接线上的样式
          config.connectorHoverStyle = {
            lineWidth: 2,
            strokeStyle: 'red',
            outlineWidth: 10,
            outlineColor: ''
          }

          config.baseStyle = {
            endpoint: ['Dot', {
              radius: 8,
              fill: '#ff5722'
            }], // 端点的形状
            connectorStyle: config.connectorPaintStyle, // 连接线的颜色，大小样式
            connectorHoverStyle: config.connectorHoverStyle,
            paintStyle: {
              fillStyle: '#4caf50',
              radius: 6
              // lineWidth: 0
            }, // 端点的颜色样式
            hoverPaintStyle: {
              fillStyle: 'red',
              strokeStyle: 'red'
            },
            isSource: true, // 是否可以拖动（作为连线起点）
            connector: ['Straight', {
              gap: 0,
              cornerRadius: 5,
              alwaysRespectStubs: true
            }], // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
            isTarget: true, // 是否可以放置（连线终点）
            maxConnections: -1, // 设置连接点最多可以连接几条线
            connectorOverlays: [
              ['Arrow', {
                width: 10,
                length: 10,
                location: 1
              }],
              ['Label', {
                label: '',
                cssClass: '',
                labelStyle: {
                  color: 'red'
                },
                events: {
                  click: function (labelOverlay, originalEvent) {
                    console.log('click on label overlay for :' + labelOverlay.component)
                    console.log(labelOverlay)
                    console.log(originalEvent)
                  }
                }
              }]
            ]
          }

          jsPlumb.ready(function () {
            //jsPlumb.setContainer('diagramContainer')

            jsPlumb.addEndpoint('item_left', {
              anchors: ['Right']
            }, config.baseStyle)

            jsPlumb.addEndpoint('item_right', {
              anchor: 'Left'
            }, config.baseStyle)

            jsPlumb.addEndpoint('item_right', {
              anchor: 'Right'
            }, config.baseStyle)

            jsPlumb.addEndpoint('item_right-2', {
              anchor: 'Left'
            }, config.baseStyle)
          })
        }
      }
    }
</script>

<style scoped>
  #diagramContainer {
    padding: 20px;
    width: 80%;
    height: 200px;
    border: 1px solid gray;
  }

  .item {
    height: 80px;
    width: 80px;
    border: 1px solid blue;
    float: left;
  }
</style>
