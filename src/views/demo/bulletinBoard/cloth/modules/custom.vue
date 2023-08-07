<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-08-02 14:10:55
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <div :id="eChart" class="eChart" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import * as echarts from "echarts";

const eChart: any = ref("eChartBroken" + Date.now() + Math.random()); //生成id 防止切换路由不渲染
const state: any = reactive({
  echartsOpt: {},
  type: false,
  value: 75
});
//图表配置项
const configuration = () => {
  const labelData: any = [];
  const labelData1: any = [];
  for (let i = 0; i < 100; ++i) {
    labelData.push({
      value: 1,
      name: i,
      itemStyle: {
        normal: {
          color: "rgba(0,209,228,0)"
        }
      }
    });
  }
  for (let i: any = 0; i < labelData.length; ++i) {
    //内层
    if (labelData[i].name < state.value) {
      labelData[i].itemStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0ff"
            },
            {
              offset: 1,
              color: "#5467df"
            }
          ])
        }
      };
    }
  }
  for (let i = 0; i < 100; ++i) {
    labelData1.push({
      value: 1,
      name: i,
      itemStyle: {
        normal: {
          color: "rgba(0,209,228,0)"
        }
      }
    });
  }
  for (let i = 0; i < labelData1.length; ++i) {
    if (labelData1[i].name < 100) {
      labelData1[i].itemStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#251f45"
            },
            {
              offset: 1,
              color: "#251f45"
            }
          ])
        }
      };
    }
  }
  const echartsOpt = {
    title: [
      {
        text: state.value,
        x: "50%",
        y: "37%",
        textAlign: "center",
        textStyle: {
          fontSize: "70",
          fontWeight: "100",
          color: "#0FF",
          textAlign: "center"
        }
      },
      {
        text: "我测试",
        left: "50%",
        top: "52%",
        textAlign: "center",
        textStyle: {
          fontSize: "18",
          fontWeight: "400",
          color: "#8d8793",
          textAlign: "center"
        }
      },
      {
        text: "1008611",
        left: "50%",
        top: "57%",
        textAlign: "center",
        textStyle: {
          fontSize: "14",
          fontWeight: "400",
          color: "rgba(65,63,112,1)",
          textAlign: "center"
        }
      }
    ],
    polar: {
      radius: ["56%", "52%"],
      center: ["50%", "50%"]
    },
    angleAxis: {
      max: 100,
      show: false
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: "",
        type: "bar",
        roundCap: true,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
          color: "#2e2856"
        },
        data: [state.value], //外层
        coordinateSystem: "polar",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: "#585fe1"
              },
              {
                offset: 1,
                color: "#0ff"
              }
            ])
          }
        }
      },
      {
        hoverAnimation: false,
        type: "pie",
        z: 2,
        data: labelData,
        radius: ["43%", "50%"],
        zlevel: -2,
        itemStyle: {
          normal: {
            borderColor: "#180f2a",
            borderWidth: 2
          }
        },
        label: {
          normal: {
            position: "inside",
            show: false
          }
        }
      },
      {
        hoverAnimation: false,
        type: "pie",
        z: 1,
        data: labelData1,
        radius: ["43%", "50%"],
        zlevel: -2,
        itemStyle: {
          normal: {
            borderColor: "#180f2a",
            borderWidth: 2
          }
        },
        label: {
          normal: {
            position: "inside",
            show: false
          }
        }
      }
    ]
  };
  state.echartsOpt = echartsOpt;
};

// 甘特图
const ganttGet = () => {
  const myChart = echarts.init(document.getElementById(eChart.value));
  myChart.clear();
  myChart.setOption(state.echartsOpt);
};

const init = () => {
  const _ref = document.getElementById(eChart.value);
  const myChart: any = _ref ? echarts.getInstanceByDom(_ref) : undefined;
  if (myChart !== undefined) {
    //只有获取到dom后才执行
    myChart.clear(); //清空数据重新赋值

    myChart.setOption(state.echartsOpt);
  }
};

onMounted(() => {
  configuration();
  ganttGet();
  init();
});
</script>
<style lang="less" scoped>
.eChart {
  width: 50vw;
  height: 50vh;
  transform: scale(0.7); //缩放
}
.category-eChart {
  width: 50vw;
  height: 35vh;
  position: relative;
}

.home-title {
  transform: translate(38px, 20px);
}
.home-title-left {
  width: 4px;
  height: 20px;
  background: #039af9;
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}
.gannt-img {
  position: absolute;
  left: 10vw;
  top: 40px;
  img {
    width: 20vw;
    height: 170px;
  }
}
.chart {
  opacity: 1;
}
.chart-no {
  opacity: 0;
}
</style>
