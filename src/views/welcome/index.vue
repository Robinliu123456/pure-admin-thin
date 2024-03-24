<script>
import * as echarts from "echarts";
import chinaMap from "@/map/china.json"; // 如果想显示中国地图，还需要导入对应的地图文件
// import headerCom from "@/components/HeaderCom.vue";

export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      echarts.registerMap("china", { geoJSON: chinaMap });

      const myChart = echarts.init(this.$refs.chart); // $refs.chart为HTML元素的ref属性值
      //   var geoCoordMap = {};
      //   var mapFeatures = echarts.getMap('china').geoJson.features;

      //   mapFeatures.forEach(function(v) {
      //         // 地区名称
      //         var name = v.properties.name;
      //         // 地区经纬度
      //         geoCoordMap[name] = v.properties.cp;

      //     });
      //   const option = {
      //     tooltip: {},
      //     series: [{
      //       type: 'map',
      //       mapType: 'china' // 设置地图类型为中国地图
      //     }]
      //   };

      //   chart.setOption(option);
      // var myChart = echarts.init(document.getElementById('provinceStaticBar'));

      var name_title = "2024年各省市计划招生人数";
      var subname = "数据来自24年招生计划";
      var nameColor = " rgb(55, 75, 113)";
      var name_fontFamily = "等线";
      var subname_fontSize = 15;
      var name_fontSize = 18;
      var mapName = "china";
      var data = [
        {
          name: "西藏",
          value: 1974
        },
        {
          name: "青海",
          value: 3072
        },
        {
          name: "海南",
          value: 3900
        },
        {
          name: "宁夏",
          value: 4176
        },
        {
          name: "贵州",
          value: 10985
        },
        {
          name: "内蒙古",
          value: 11044
        },
        {
          name: "新疆",
          value: 12998
        },
        {
          name: "甘肃",
          value: 15680
        },
        {
          name: "山西",
          value: 15806
        },
        {
          name: "福建",
          value: 16639
        },
        {
          name: "广西",
          value: 17365
        },
        {
          name: "云南",
          value: 17785
        },
        {
          name: "天津",
          value: 18560
        },
        {
          name: "江西",
          value: 19256
        },
        {
          name: "吉林",
          value: 21267
        },
        {
          name: "重庆",
          value: 21404
        },
        {
          name: "河北",
          value: 23437
        },
        {
          name: "湖南",
          value: 24589
        },
        {
          name: "黑龙江",
          value: 25802
        },
        {
          name: "河南",
          value: 26093
        },
        {
          name: "安徽",
          value: 26327
        },
        {
          name: "四川",
          value: 31156
        },
        {
          name: "浙江",
          value: 34096
        },
        {
          name: "山东",
          value: 37440
        },
        {
          name: "广东",
          value: 37842
        },
        {
          name: "陕西",
          value: 38285
        },
        {
          name: "辽宁",
          value: 39273
        },
        {
          name: "上海",
          value: 42549
        },
        {
          name: "湖北",
          value: 43672
        },
        {
          name: "江苏",
          value: 55816
        },
        {
          name: "北京",
          value: 61493
        }
      ];

      var geoCoordMap = {};
      var toolTipData = [
        {
          name: "西藏",
          value: [
            {
              name: "招生学校",
              value: 4
            },
            {
              name: "招生人数",
              value: 1974
            }
          ]
        },
        {
          name: "青海",
          value: [
            {
              name: "招生学校",
              value: 3
            },
            {
              name: "招生人数",
              value: 3072
            }
          ]
        },
        {
          name: "海南",
          value: [
            {
              name: "招生学校",
              value: 5
            },
            {
              name: "招生人数",
              value: 3900
            }
          ]
        },
        {
          name: "宁夏",
          value: [
            {
              name: "招生学校",
              value: 5
            },
            {
              name: "招生人数",
              value: 4176
            }
          ]
        },
        {
          name: "贵州",
          value: [
            {
              name: "招生学校",
              value: 11
            },
            {
              name: "招生人数",
              value: 10985
            }
          ]
        },
        {
          name: "内蒙古",
          value: [
            {
              name: "招生学校",
              value: 12
            },
            {
              name: "招生人数",
              value: 11044
            }
          ]
        },
        {
          name: "新疆",
          value: [
            {
              name: "招生学校",
              value: 11
            },
            {
              name: "招生人数",
              value: 12998
            }
          ]
        },
        {
          name: "甘肃",
          value: [
            {
              name: "招生学校",
              value: 15
            },
            {
              name: "招生人数",
              value: 15680
            }
          ]
        },
        {
          name: "山西",
          value: [
            {
              name: "招生学校",
              value: 16
            },
            {
              name: "招生人数",
              value: 15806
            }
          ]
        },
        {
          name: "福建",
          value: [
            {
              name: "招生学校",
              value: 16
            },
            {
              name: "招生人数",
              value: 16639
            }
          ]
        },
        {
          name: "广西",
          value: [
            {
              name: "招生学校",
              value: 15
            },
            {
              name: "招生人数",
              value: 17365
            }
          ]
        },
        {
          name: "云南",
          value: [
            {
              name: "招生学校",
              value: 15
            },
            {
              name: "招生人数",
              value: 17785
            }
          ]
        },
        {
          name: "天津",
          value: [
            {
              name: "招生学校",
              value: 29
            },
            {
              name: "招生人数",
              value: 18560
            }
          ]
        },
        {
          name: "江西",
          value: [
            {
              name: "招生学校",
              value: 18
            },
            {
              name: "招生人数",
              value: 19256
            }
          ]
        },
        {
          name: "吉林",
          value: [
            {
              name: "招生学校",
              value: 23
            },
            {
              name: "招生人数",
              value: 21267
            }
          ]
        },
        {
          name: "重庆",
          value: [
            {
              name: "招生学校",
              value: 17
            },
            {
              name: "招生人数",
              value: 21404
            }
          ]
        },
        {
          name: "河北",
          value: [
            {
              name: "招生学校",
              value: 26
            },
            {
              name: "招生人数",
              value: 23437
            }
          ]
        },
        {
          name: "湖南",
          value: [
            {
              name: "招生学校",
              value: 24
            },
            {
              name: "招生人数",
              value: 24589
            }
          ]
        },
        {
          name: "黑龙江",
          value: [
            {
              name: "招生学校",
              value: 30
            },
            {
              name: "招生人数",
              value: 25802
            }
          ]
        },
        {
          name: "河南",
          value: [
            {
              name: "招生学校",
              value: 27
            },
            {
              name: "招生人数",
              value: 26093
            }
          ]
        },
        {
          name: "安徽",
          value: [
            {
              name: "招生学校",
              value: 22
            },
            {
              name: "招生人数",
              value: 26327
            }
          ]
        },
        {
          name: "四川",
          value: [
            {
              name: "招生学校",
              value: 34
            },
            {
              name: "招生人数",
              value: 31156
            }
          ]
        },
        {
          name: "浙江",
          value: [
            {
              name: "招生学校",
              value: 32
            },
            {
              name: "招生人数",
              value: 34096
            }
          ]
        },
        {
          name: "山东",
          value: [
            {
              name: "招生学校",
              value: 37
            },
            {
              name: "招生人数",
              value: 37440
            }
          ]
        },
        {
          name: "广东",
          value: [
            {
              name: "招生学校",
              value: 32
            },
            {
              name: "招生人数",
              value: 37842
            }
          ]
        },
        {
          name: "陕西",
          value: [
            {
              name: "招生学校",
              value: 54
            },
            {
              name: "招生人数",
              value: 38285
            }
          ]
        },
        {
          name: "辽宁",
          value: [
            {
              name: "招生学校",
              value: 45
            },
            {
              name: "招生人数",
              value: 39273
            }
          ]
        },
        {
          name: "上海",
          value: [
            {
              name: "招生学校",
              value: 48
            },
            {
              name: "招生人数",
              value: 42549
            }
          ]
        },
        {
          name: "湖北",
          value: [
            {
              name: "招生学校",
              value: 48
            },
            {
              name: "招生人数",
              value: 43672
            }
          ]
        },
        {
          name: "江苏",
          value: [
            {
              name: "招生学校",
              value: 50
            },
            {
              name: "招生人数",
              value: 55816
            }
          ]
        },
        {
          name: "北京",
          value: [
            {
              name: "招生学校",
              value: 152
            },
            {
              name: "招生人数",
              value: 61493
            }
          ]
        }
      ];

      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });

      // console.log("============geoCoordMap===================")
      // console.log(geoCoordMap)
      // console.log("================data======================")
      console.log(data);
      console.log(toolTipData);
      var max = 70000,
        min = 9; // todo
      var maxSize4Pin = 100,
        minSize4Pin = 20;

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      const option = {
        title: {
          text: name_title,
          subtext: subname,
          x: "center",
          textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
          },
          subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              console.log(toolTiphtml);
              // console.log(convertData(data))
              return toolTiphtml;
            } else {
              let toolTiphtml = "";
              for (let i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (let j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              console.log(toolTiphtml);
              // console.log(convertData(data))
              return toolTiphtml;
            }
          }
        },
        // legend: {
        //     orient: 'vertical',
        //     y: 'bottom',
        //     x: 'right',
        //     data: ['credit_pm2.5'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        visualMap: {
          show: true,
          min: 0,
          max: 70000,
          left: "left",
          top: "bottom",
          text: ["多", "少"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            color: ["#00467F", "#A5CC82"] // 蓝绿
          }
        },
        /*工具按钮组*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#3B5077"
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10000;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: data
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: function (val) {
              var a = (maxSize4Pin - minSize4Pin) / (max - min);
              var b = minSize4Pin - a * min;
              b = maxSize4Pin - a * max;
              return (a * val[2]) / 10000 + b;
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#F62157" //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(data)
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 10)
            ),
            symbolSize: function (val) {
              return val[2] / 10000;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow"
              }
            },
            zlevel: 1
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<template>
  <div class="layui-row">
    <!-- 内容主体区域 -->
    <div style="padding: 15px">
      <blockquote class="layui-elem-quote layui-text">
        <h3>新折叠.研未来，专注于为考研同学们提供专业的数据和资讯信息。</h3>
      </blockquote>
      <div class="layui-card layui-panel">
        <div class="layui-card-header">
          <h3>网站宗旨</h3>
        </div>
        <div class="layui-card-body">
          <h4>
            网站功能不求多，只求精。希望能给同学们带来准确、及时的数据和资讯信息。同时结合我们自研的数据深度分析技术，帮同学们节省一些搜集整理
            数据和资讯的时间，让同学们更加专注于复习。考研越来越难，希望我们能给大家帮点小忙。也欢迎大家给我们多提意见，一起来完善这个网站。
          </h4>
        </div>
      </div>
      <div class="layui-card">
        <div class="layui-card-header">
          <h2>数据基本信息统计（截至到2023年11月18日）</h2>
        </div>
        <div class="layui-card-body">
          <div class="layui-row">
            <div id="provinceLabel" class="layui-col-md6">
              <h4>招生目录覆盖学校：876所</h4>
            </div>
            <div id="areaLabel" class="layui-col-md6">
              <h4>招生目录覆盖二级专业：177个</h4>
            </div>
          </div>
          <br />
          <div class="layui-row">
            <div id="firstGradeLabel" class="layui-col-md6">
              <h4>招生目录信息数量：47035条（计划统考招生759895人）</h4>
            </div>
            <div id="schoolRankLabel" class="layui-col-md6">
              <h4>招生简章覆盖学校：40所</h4>
            </div>
          </div>
          <br />
          <div class="layui-row">
            <div id="admissionSchoolCountLabel" class="layui-col-md6">
              <h4>录取名单覆盖学校：40所（部分录入系统）</h4>
            </div>
            <div id="graduateSchoolLabel" class="layui-col-md6">
              <h4>录取名单信息数量：87526条</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-card">
        <div class="layui-card-header"><h2>24招生分省份汇总</h2></div>
        <!-- <div ref="chart" style="width: 600px; height: 400px"></div> -->

        <div class="layui-card-body">
          <!-- <div id="provinceStaticBar" style="width: 100%; height: 400px;"></div> -->
          <!-- <div ref="chart" style="width: 600px; height: 400px"></div> -->
          <div ref="chart" style="width: 600px; height: 400px" />
        </div>
      </div>
    </div>
    <div id="freeAds" class="layui-row" style="display: none">
      <br />
      <h4>
        注意：试用用户仅能查看
        清华大学、北京大学、浙江大学、安徽农业大学、上海交通大学
        5所大学的数据，付费用户可以查看所有876所学校的数十万条数据
      </h4>
      <br />
      <h4>1元30次体验套餐（当前内测价，并额外送15次）微信扫码购买</h4>
      <img
        src="https://datakaoyan-1306323624.cos.ap-nanjing.myqcloud.com/1.jpg"
        style="width: 300px"
      />
      <br />
      <h4>9.9元500次尊贵套餐（当前内测价格，并额外送200次）微信扫码购买</h4>
      <img
        src="https://datakaoyan-1306323624.cos.ap-nanjing.myqcloud.com/2.jpg"
        style="width: 300px"
      />
    </div>
  </div>
</template>
