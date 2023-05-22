<template>
  <div class="cutting">
    <!-- 头部 -->
    <div class="top">
      <img :src="logo" alt="" class="top-log" />
      <div class="top-txt">裁床设备看板</div>
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
            <div>耗材列表</div>
          </div>
          <div>
            <tableRoll1 :data="state.data.leftData1" :height="36" />
          </div>
        </div>
        <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>保养列表</div>
          </div>
          <div>
            <tableRoll2 :data="state.data.leftData2" :height="30" />
          </div>
        </div>
        <!-- <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>设备保养记录</div>
          </div>
          <div>
            <tableRollRight3 :data="state.data.leftData3" :height="5" />
          </div>
        </div> -->
      </div>
      <!-- 中 -->
      <div class="mainBody-centre">
        <div class="left-top-content">
          <leftTopTable :data="state.data.middleData" />
        </div>
        <!-- 环图 -->
        <div class="category">
          <div class="category1">
            <CategoryV2 :data="state.data.imgData[0]" />
            <div class="category-time">当日工作时间</div>
          </div>
          <div class="category1">
            <div class="category-title">稼动率</div>
            <div class="categoryV1-img">
              <CategoryV1 :data="state.data.imgData[1]" />
            </div>
          </div>
          <div class="category1">
            <CategoryV2 :data="state.data.imgData[2]" />
            <div class="category-time">当日裁剪时间</div>
          </div>
        </div>

        <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>七日稼动率</div>
          </div>
          <div class="broken">
            <div class="cropLayout">
              <img class="bottomColor-Broken" src="./modules/img/bottomColor.png" alt="" />
              <Broken :data="state.data.brokenData" />
            </div>
          </div>
        </div>
        <!-- 底部切换 -->
        <div class="switch">
          <div v-for="item in state.bottomList" :key="item.id" :class="item.type ? 'switchSubitem' : 'switchSubitem-no'"></div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="mainBody-right">
        <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>今日裁剪版图</div>
          </div>
          <div class="left-top-content">
            <div class="cropLayout">
              <tableRollRight1 :data="state.data.rightData1" :height="30" />
              <img class="bottomColor" src="./modules/img/bottomColor.png" alt="" />
            </div>
          </div>
        </div>
        <div class="left-top-content">
          <div class="left-top">
            <div class="left-top-title"></div>
            <div>设备保养记录</div>
          </div>
          <div class="left-top-content">
            <!-- <div class="maintenance">
              <img class="maintenanceIcon" src="./modules/img/maintenance.png" alt="" />
              累计维修测试:
              <div class="maintenanceSum">{{ state.type * 14 }}次</div>
            </div> -->
            <div class="left-top-content">
              <div class="cropLayout">
                <tableRollRight2 :data="state.data.rightData2" :height="32" />
                <img class="bottomColor" src="./modules/img/bottomColor.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue'
  import { cloneDeep } from 'lodash'

  import moment from 'moment'
  import logo from './modules/img/logo.png'
  import qh from './modules/img/qh.png'
  import top from './modules/img/top.png'
  import Custom from './modules/custom.vue' //百分比圈

  import { dataList } from './modules/conifgs'
  // 左侧
  import tableRoll1 from './modules/tableRoll1.vue'
  import tableRoll2 from './modules/tableRoll2.vue'
  import tableRollRight3 from './modules/tableRollRight-3.vue'
  // 中间
  import leftTopTable from './modules/leftTopTable.vue'
  import Broken from './modules/broken.vue'
  import CategoryV1 from './modules/category-v1.vue'
  import CategoryV2 from './modules/category-v2.vue'
  //右侧
  import tableRollRight1 from './modules/tableRollRight-1.vue'
  import tableRollRight2 from './modules/tableRollRight-2.vue'

  const state: any = reactive({
    time: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    type: 1,
    bottomList: [
      { only: 1, type: true },
      { only: 2, type: false },
      { only: 3, type: false }
    ],
    data: dataList[0], //总数据

    componentTimer: null, //刷新数据的定时器
    componentTimerInterval: 10000 //刷新数据的时间间隔
  })
  //时间
  const setTime = () => {
    setInterval(() => {
      state.time = moment(Date.now()).format('YYYY年MM月DD日 HH:mm:ss')
    }, 1000)
  }
  setTime()

  const setType = (e: any) => {
    let data = cloneDeep(state.bottomList)
    data.map((item: any) => {
      if (item.only === e) {
        item.type = true
      } else {
        item.type = false
      }
    })
    state.data = dataList[e - 1]
    state.bottomList = data
  }

  const init = () => {
    state.type++
    if (state.type > 3) {
      state.type = 1
    }
    setType(state.type)
  }
  //间隔**秒重新获取接口数据
  const componentTimerFun = () => {
    state.componentTimer = setInterval(() => {
      init()
    }, state.componentTimerInterval)
  }
  onMounted(() => {
    componentTimerFun()
  })
</script>
<style lang="less" scoped>
  .njp-fullscreen.new-pop-window > div {
    padding: 0;
    margin: 0;
  }

  .category {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 2vw;
    padding-right: 2vw;
    color: #94d2ff;
    font-size: 15px;
  }
  .broken {
    width: 35vw;
    transform: translate(x, y);
  }
  .category1 {
    text-align: center;
  }
  .category-title {
    transform: translate(0, 2vh);
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
    width: 30vw;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .mainBody-centre {
    width: 35vw;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .mainBody-right {
    width: 30vw;
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
  .maintenance {
    line-height: 28px;
    margin-top: 10px;
    display: flex;
    color: #1ef0fc;
  }
  .maintenanceSum {
    margin-left: 10px;
    color: #ff2121;
  }
  .maintenanceIcon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .cropLayout {
    position: relative;
  }
  .bottomColor {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bottomColor-Broken {
    position: absolute;
    bottom: 4vh;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .switch {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1vh;
  }
  .switchSubitem {
    width: 8vw;
    height: 20px;
    background: #37b1ff;
    border-radius: 5px;
  }
  .switchSubitem-no {
    width: 8vw;
    height: 20px;
    background: #263a60;
    border-radius: 5px;
  }
  .categoryV1-img {
    transform: scale(1.3);
    transform: translate(0, 2vh);
  }
  .category-time {
    transform: translate(0, -25px);
  }
</style>
