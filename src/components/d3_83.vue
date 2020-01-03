<template>
  <div>
    ============================83、d3图表在Vue中的使用============================
    <div style="width: 100%;height: 100%;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
         width="960" height="500"> </svg>
    </div>


    <div id="mydiv">

    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3'
    export default {
        name: "d3_83",
      mounted(){
          this.initEchart();
        this.getListData();
      },
      methods:{
          initEchart(){
            var svg = d3.select("svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height"),
              color = d3.scaleOrdinal(d3.schemeCategory10);

            var a = {
                id: "a"
              },
              b = {
                id: "b"
              },
              c = {
                id: "c"
              },
              nodes = [a, b, c],
              links = [];

            var simulation = d3.forceSimulation(nodes)
              .force("charge", d3.forceManyBody().strength(-1000))
              .force("link", d3.forceLink(links).distance(200))
              .force("x", d3.forceX())
              .force("y", d3.forceY())
              .alphaTarget(1)
              .on("tick", ticked);

            var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
              link = g.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll(".link"),
              node = g.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll(".node");

            restart();

            d3.timeout(function() {
              links.push({
                source: a,
                target: b
              }); // Add a-b.
              links.push({
                source: b,
                target: c
              }); // Add b-c.
              links.push({
                source: c,
                target: a
              }); // Add c-a.
              restart();
            }, 1000);

            d3.interval(function() {
              nodes.pop(); // Remove c.
              links.pop(); // Remove c-a.
              links.pop(); // Remove b-c.
              restart();
            }, 2000, d3.now());

            d3.interval(function() {
              nodes.push(c); // Re-add c.
              links.push({
                source: b,
                target: c
              }); // Re-add b-c.
              links.push({
                source: c,
                target: a
              }); // Re-add c-a.
              restart();
            }, 2000, d3.now() + 1000);

            function restart() {

              // Apply the general update pattern to the nodes.
              node = node.data(nodes, function(d) {
                return d.id;
              });

              node.exit().transition()
                .attr("r", 0)
                .remove();

              node = node.enter().append("circle")
                .attr("fill", function(d) {
                  return color(d.id);
                })
                .call(function(node) {
                  node.transition().attr("r", 8);
                })
                .merge(node);

              // Apply the general update pattern to the links.
              link = link.data(links, function(d) {
                return d.source.id + "-" + d.target.id;
              });

              // Keep the exiting links connected to the moving remaining nodes.
              link.exit().transition()
                .attr("stroke-opacity", 0)
                .attrTween("x1", function(d) {
                  return function() {
                    return d.source.x;
                  };
                })
                .attrTween("x2", function(d) {
                  return function() {
                    return d.target.x;
                  };
                })
                .attrTween("y1", function(d) {
                  return function() {
                    return d.source.y;
                  };
                })
                .attrTween("y2", function(d) {
                  return function() {
                    return d.target.y;
                  };
                })
                .remove();

              link = link.enter().append("line")
                .call(function(link) {
                  link.transition().attr("stroke-opacity", 1);
                })
                .merge(link);

              // Update and restart the simulation.
              simulation.nodes(nodes);
              simulation.force("link").links(links);
              simulation.alpha(1).restart();
            }

            function ticked() {
              node.attr("cx", function(d) {
                return d.x;
              })
                .attr("cy", function(d) {
                  return d.y;
                })

              link.attr("x1", function(d) {
                return d.source.x;
              })
                .attr("y1", function(d) {
                  return d.source.y;
                })
                .attr("x2", function(d) {
                  return d.target.x;
                })
                .attr("y2", function(d) {
                  return d.target.y;
                });
            }
          },
        getListData(){

          //制作画布
          let width = 400;//画布宽度
          let height = 400;//画布高度
          let svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height);
          //画布周边的空白
          let padding = {left:30, right:30, top:20, bottom:20};

          //定义一个数组
          let datas = [20,10,30,60,33,24,12,5];

          //定义坐标轴比例尺
          //x轴比例尺
          let ranges = d3.range(datas.length)//ranges是datas数组下标集合的一个数组
          /*注意:4版本后下面的这种用法好像不可以了
            var xScale = d3.scale.ordinal()
                           .domain(d3.range(datas.length))
                           .rangeRoundBands([0, width - padding.left - padding.right])
          */
          let xScale = d3.scaleBand()
            .domain(ranges) //这里装的是一个数组
            .range([0, width - padding.left - padding.right])

          //y轴比例尺
          let min = d3.min(datas);
          let max = d3.max(datas);
          let yScale = d3.scaleLinear()
            .domain([0 , max])//值域范围，即y轴的最大最小值
            .range([height-padding.top-padding.bottom , 0]);

          //定义坐标轴
          //X轴
          let xAxis = d3.axisBottom(xScale);
          //Y轴
          let yAxis = d3.axisLeft(yScale);

          //矩形之间的空白
          let rectPadding = 4;
          //添加矩形元素
          let rects = svg.selectAll(".MyRect")
            .data(datas)
            .enter()
            .append("rect")//添加矩形
            .attr("class","MyRect")//添加类名
            .attr("transform","translate("+padding.left+","+padding.top+")")//矩形的位置
            .attr("x",function(d,i){//生成的矩形距离画布左侧的距离
              return xScale(i) + rectPadding/2;
            })
            .attr("y",function(d){//生成的矩形距离画布顶部的距离
              return yScale(d);
            })
            .attr("width",xScale.bandwidth() - rectPadding )//根据比例尺来计算出矩形的宽度
            .attr("height",function(d){
              return height - padding.top -padding.bottom - yScale(d);//画布高度-距离顶部-距离底部-矩形距离顶部的高算出矩形的高度
            })
            .attr("fill","steelblue");//矩形颜色
          //添加文字元素
          let texts = svg.selectAll(".MyText")
            .data(datas)
            .enter()
            .append("text")//添加图形数据
            .attr("class","MyText")
            .attr("transform","translate("+padding.left+","+padding.top+")")
            .attr("x",function(d,i){
              return xScale(i) + rectPadding/2;
            })
            .attr("y",function(d){
              return yScale(d);
            })
            .attr("dx",function(){//文字距离矩形左边的距离
              return (xScale.bandwidth() - rectPadding*5)/2;
            })
            .attr("dy",function(d){//文字距离矩形顶部的距离
              return 0;
            })
            .text(function(d){
              return d;
            })

          //添加坐标轴元素
          //添加X轴
          svg.append("g")
            .attr("class","axis")
            .attr("transform","translate("+padding.left+","+(height-padding.bottom)+")")
            .call(xAxis)
          //添加Y轴
          svg.append("g")
            .attr("class","axis")
            .attr("transform","translate("+padding.left+","+padding.top+")")
            .call(yAxis)
        }
      }
    }
</script>

<style scoped>

</style>
