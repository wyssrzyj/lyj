<!--
 * @Author: lyj
 * @Date: 2022-08-31 13:11:11
 * @LastEditTime: 2023-05-15 09:21:33
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <div class="container">
      <div class="container-left">
        <img :src="shadow" class="container-img" alt="" />
        <div class="flex">
           <div>购机时间 :</div>  <span>{{ state.data.time }}</span>
        </div>
        <div class="flex">
          <div>设备编号 :</div>
         <span>{{ state.data.number }}</span>
        </div>
        <div class="flex">
          <div>设备累计铺布距离 :</div>
          <span>{{ state.data.distance }}米</span>
        </div>
      </div>
      <div class="container-right">
        <div class="flex">
          <div>设备型号 :</div>
          <span>{{ state.data.model }}</span>
        </div>
        <div class="flex">
          <div>设备累计工作时间 :</div>
          <span>{{ state.data.workingHours }}</span>
        </div>
        <div class="flex">
          <div>累计铺布版图 :</div>
          <span>{{ state.data.imgNumber }}张</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import shadow from './img/shadow.png'

  import { reactive, watch } from 'vue'
  const props = defineProps<{
    data: any
  }>()
  const state: any = reactive({
    data: {
      time: '2022/05/09',
      number: 'L-M2057',
      distance: '100',
      model: 'M-457',
      workingHours: '192',
      imgNumber: '8724'
    }
  })

  //监听数据更新
  watch(
    () => props.data,
    item => {
      state.data = item
    },
    { deep: true, immediate: true }
  )
</script>
<style lang="less" scoped>
  .container {
    width: 100%;
    height: 20vh;
    border: 2px solid #003481;
    display: flex;
    line-height: 4vh;
    color: #3fffea;
    position: relative;
  }
  .container-left {
    width: 16vw;
    margin-top: 4vh;
    padding-left: 3vw;
    height: 12vh;
    border-right: 2px solid #263a60;
    span {
      color: #37b1ff;
    }
  }
  .container-right {
    width: 16vw;
    margin-top: 4vh;
    padding-left: 3vw;
    height: 12vh;
    span {
      color: #37b1ff;
    }
  }
  .container-img {
    width: 40vw;
    height: 22vh;
    position: absolute;
    bottom: -4vh;
    left: -4vw;
  }
  .flex{
    display: flex;
    div{
      margin-right: 10px;
    }
  }
</style>
