<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-04-26 17:09:47
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div >
    <div :id="eChart"  class="eChart"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive } from 'vue'
  import * as echarts from 'echarts'

  import { echartsOpt } from './broken'
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
    let _ref = document.getElementById(eChart.value)
    let myChart = _ref ? echarts.getInstanceByDom(_ref) : undefined
    if (myChart !== undefined) {
      
      //只有获取到dom后才执行
      myChart.clear() //清空数据重新赋值
      myChart.setOption(echartsOpt)
    }
  }

  onMounted(() => {
    ganttGet()
    init(state.data)
  })
</script>
<style  scoped>
  .eChart {
    padding: 1vw;
    width: 80vw;
    height: 80vh;
  }
</style>
