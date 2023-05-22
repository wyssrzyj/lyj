<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-05-15 09:36:54
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <div class="container">
      <img src="./img/bottomImg.png" class="bottomImg" alt="" />
      <div class="eChart-container">
        <div :id="eChart" class="eChart"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive, watch } from 'vue'
  import * as echarts from 'echarts'

  import { echartsOpt } from './category'
  const eChart: any = ref('eChartBroken' + Date.now() + Math.random()) //生成id 防止切换路由不渲染
  const props = defineProps<{
    data: any
  }>()
  const state: any = reactive({
    type: false,
    sum: '',
    content: ''
  })

  // 甘特图
  const ganttGet = () => {
    let myChart = echarts.init(document.getElementById(eChart.value))
    myChart.clear()
    myChart.setOption(echartsOpt)
  }

  const init = () => {
    let _ref = document.getElementById(eChart.value)
    let myChart = _ref ? echarts.getInstanceByDom(_ref) : undefined
    if (myChart !== undefined) {
      //只有获取到dom后才执行
      myChart.clear() //清空数据重新赋值
      echartsOpt.series[0].data = [state.data]
      echartsOpt.title[0].text = ''
      echartsOpt.title[1].text = state.sum
      echartsOpt.title[1].y = 'center'
      myChart.setOption(echartsOpt)
    }
  }

  onMounted(() => {
    ganttGet()
    init()
  })

  //数据改变 触发操作
  watch(
    () => props.data,
    item => {
       state.data = item.data
      state.sum = item.sum
      state.content = item.content
      init()
    },
    { deep: true, immediate: true }
  )
</script>
<style lang="less" scoped>
  .container {
    width: 200px;
    height: 200px;
    position: relative;
  }
  .bottomImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
  }
  .eChart {
    width: 200px;
    height: 200px;
    transform: scale(0.9);
    position: absolute;
    top: 3px;
    left: 2px;
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
