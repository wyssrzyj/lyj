<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-05-06 09:39:50
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="broken-eChart">
    <div v-if="state.type" class="gannt-img">
      <img :src="zw" alt="" />
    </div>
    <div :id="eChart" :class="!state.type ? 'chart' : 'chart-no'" class="eChart"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive } from 'vue'
  import * as echarts from 'echarts'

  import { echartsOpt } from './histogram'
  import zw from './img/zw.png'

  const eChart: any = ref('eChartBroken' + Date.now() + Math.random()) //生成id 防止切换路由不渲染
  const state: any = reactive({
    type: false,
  })

  // 甘特图
  const ganttGet = () => {
    let myChart = echarts.init(document.getElementById(eChart.value))
    myChart.clear()
    myChart.setOption(echartsOpt)
  }

  const init = (e: any) => {
    // if (!isEmpty(e.data)) {
    state.type = false
    // } else {
    // state.type = true
    // }

    let _ref = document.getElementById(eChart.value)
    let myChart = _ref ? echarts.getInstanceByDom(_ref) : undefined
    if (myChart !== undefined) {
      //只有获取到dom后才执行
      myChart.clear() //清空数据重新赋值
      echartsOpt.series[0].data = e.data1
      echartsOpt.series[1].data = e.data2
      myChart.setOption(echartsOpt)
    }
  }

  onMounted(() => {
    ganttGet()
   const   data= {
        data1: [3900, 1089, 4650, 2580, 5000, 2179, 3113, 2180, 3571, 4210],
        data2: [3000, 2880, 3120, 4095, 3219, 4228, 2415,3840, 4762, 3598]
      }
    init(data)
  })
</script>
<style lang="less" scoped>
  .broken-eChart {
    width: 45vw;
    height: 25vh;
    transform: translate(0, -1vh);
  }
  .eChart {
    width: 100%;
    height: 100%;
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
