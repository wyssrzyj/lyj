<template>
  <div class="cutting">
    <!-- 头部 -->
    <div class="top">
      <img :src="logo" alt="" class="top-log" />
      <div class="top-txt">裁铺管理系统看板</div>
      <img :src="top" alt="" class="top-title" />
      <img :src="qh" alt="" class="top-right-log" />
      <div class="top-right-time">{{ state.time }}</div>
    </div>
    <!-- 内容 -->
    <div class="mainBody">
      <!-- 左侧 -->
      <div class="mainBody-left">
        <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>订单进度</div>
          </div>
          <div>
            <tableSchedule :height="20" />
          </div>
        </div>
        <div class="left-bottom-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>裁床今日完成进度</div>
          </div>
          <div class="droplet-container">
            <div v-for="(item, index) in state.dropletData" :key="index" class="droplet">
              <WaterBall :number="item.number" />
              <div class="cut">已裁/计划 : {{ item.cut }}/{{ item.plan }}</div>
              <div class="plan">{{ item.name }}</div>
            </div>
          </div>
        </div>

        <div class="left-bottom-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>七日完成量</div>
          </div>
          <div>
            <histogram />
          </div>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="mainBody-right">
        <div class="left-top">
          <div class="left-top-title"></div>
          <div>床次进度</div>
        </div>
        <tableRightDemo :height="80" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import moment from 'moment'
  import logo from './modules/img/logo.png'
  import qh from './modules/img/qh.png'
  import top from './modules/img/top.png'

  import tableSchedule from './modules/tableSchedule.vue'

  import WaterBall from './modules/WaterBall.vue' //胡南的水滴图
  import histogram from './modules/histogram.vue'

  // import tableRight from './modules/tableRight.vue'
  import tableRightDemo from './modules/tableRightDemo.vue'

  const state: any = reactive({
    time: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    dropletData: [
      {
        name: '一号铺布机',
        number: 12,
        cut: 1200,
        plan: 10000
      },
      {
        name: '二号铺布机',
        number: 30,
        cut: 3000,
        plan: 10000
      },
      {
        name: '三号铺布机',
        number: 50,
        cut: 5000,
        plan: 10000
      },
      {
        name: '四号铺布机',
        number: 65,
        cut: 6500,
        plan: 10000
      }
    ]
  })
  //时间
  const setTime = () => {
    setInterval(() => {
      state.time = moment(Date.now()).format('YYYY年MM月DD日 HH:mm:ss')
    }, 1000)
  }
  setTime()
</script>
<style lang="less" scoped>
  .njp-fullscreen.new-pop-window > div {
    padding: 0;
    margin: 0;
  }

  .content {
    background: #010640;
  }

  .top {
    width: 100vw;
    background: #010640;
    position: relative;
    display: flex;
    color: #eef8ff;
    font-size: 38px;
    font-weight: bold;
    height: 10vh;
  }

  .top-log {
    position: absolute;
    left: calc(1vw - 10px);
    top: 2vh;
  }

  .top-right-log {
    position: absolute;
    right: calc(2vw - 10px);
    top: 2vh;
  }

  .top-right-time {
    width: 300px;
    line-height: 25px;
    font-size: 20px;
    color: #409eff;
    position: absolute;
    right: 13vw;
    top: 2vh;
  }

  .top-txt {
    position: absolute;
    letter-spacing: 0.5vw;
    left: 39vw;
    top: 1.5vh;
  }

  .top-title {
    width: 100vw;
    height: 10vh;
  }

  .mainBody {
    width: 100vw;
    height: 90vh;
    background: #010640;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mainBody-left {
    width: 50vw;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .mainBody-right {
    flex: 1;
    height: 100%;
    background: #010640;
  }

  .left-top {
    display: flex;
    width: 100%;
    height: 20px;
    line-height: 42px;
    font-size: 20px;
    margin-bottom: 1vh;
    font-weight: bold;
    color: #94d2ff;
  }

  .right-top {
    margin-left: 11vw;
    display: flex;
    height: 50px;
    line-height: 42px;
    font-size: 20px;
    font-weight: bold;
    color: #4d748c;
  }

  .right-top-content {
    transform: translate(0, -7px);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .right-top-txt {
    cursor: pointer;
    width: 120px;
    margin-right: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .segmentation {
    color: #4d748c;
    margin-right: 10px;
  }

  .segmentation-y {
    color: #95bff4;
    margin-right: 10px;
  }

  .left-top-title {
    width: 7px;
    height: 37px;
    margin-right: 10px;
    margin-left: 10px;
    background: #94d2ff;
    border-radius: 5px;
  }

  .left-top-content {
    flex: 1;
    width: 100%;
    padding: 10px;
    padding-bottom: 0;
  }

  .left-bottom-content {
    height: 32vh;
    width: 100%;
    padding: 10px;
    padding-bottom: 0;
  }

  .right-title {
    width: 100px;
    color: #94d2ff;
    font-size: 20px;
    transform: translate(20vw, 1vw);
  }

  .right-container {
    // width: 100%;
    // background: red;
  }

  .droplet-container {
    display: flex;
    justify-content: space-around;
    transform: translate(-1.5vw, 0);
  }

  .droplet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #1ef0fc;
  }
  .title {
    font-size: 20px;
    text-align: center;
    color: #bce8e8;
    margin-top: 15px;
  }
  .cut {
    margin-bottom: 0.1vh;
    transform: translate(1vw, 0);
  }
  .plan {
    transform: translate(1vw, 0);
  }
</style>
