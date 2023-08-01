<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-05-12 16:56:41
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="broken-eChart">
    <div :id="eChart" class="eChart"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive, watch } from 'vue'
  import * as echarts from 'echarts'

  import { echartsOpt } from './broken'
  import { isEmpty } from 'lodash'

  const eChart: any = ref('eChartBroken' + Date.now() + Math.random()) //生成id 防止切换路由不渲染
  const props = defineProps<{
    data: any
  }>()
  const state: any = reactive({
    type: false,
    data: {
      name: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00', '06:00'],
      data: [40, 80, 60, 70, 75, 60, 20]
    } //今日达成率
  })

  // 甘特图
  const ganttGet = () => {
    let myChart = echarts.init(document.getElementById(eChart.value))
    myChart.clear()
    myChart.setOption(echartsOpt)
  }

  const init = (e: any) => {
    if (!isEmpty(e.data)) {
      state.type = false
    } else {
      state.type = true
    }

    let _ref = document.getElementById(eChart.value)
    let myChart = _ref ? echarts.getInstanceByDom(_ref) : undefined
    if (myChart !== undefined) {
      echartsOpt.xAxis.data = state.data.name

      echartsOpt.series[0].data = e
      //只有获取到dom后才执行
      myChart.clear() //清空数据重新赋值
      myChart.setOption(echartsOpt)
    }
  }

  onMounted(() => {
    ganttGet()
    let data = state.data.data
    init(data)
  })
  watch(
    () => props.data,
    item => {
      init(item)
    },
    { deep: true, immediate: true }
  )
</script>
<style lang="less" scoped>
  .broken-eChart {
    width: 100%;
    height: 35vh;
    position: relative;
  }
  .eChart {
    width: 100%;
    height: 35vh;
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
