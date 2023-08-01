<template>
  <div class="productProcess">
    <!-- 如果页面刷新数据比较频繁，可以将loading、showFlag的相关代码删除，防止过于频繁的出现加载动画 -->
    <div v-show="!state.showFlag" class="loading_div">
      <div>Loading...</div>
      <!-- 这个loading自己写，代码没贴出来 -->
    </div>

    <div v-show="state.showFlag">
      <!-- 参数名称、列数根据实际情况调整 -->
      <div class="table_body">
        <div class="table_th">
          <div class="tr1 th_style">保养项目</div>
          <div class="tr2 th_style">保养时间</div>
          <div class="tr3 th_style">保养状态</div>
        </div>
        <div class="table_main_body" :style="{ height: state.height + 'vh' }">
          <div class="table_inner_body" :style="{ top: state.tableTop + 'px' }">
            <div v-for="(item, index) in state.tableList" :key="index" class="table_tr">
              <div class="tr1 tr">{{ item.styleCode }}</div>
              <div class="tr2 tr">{{ item.styleName }}</div>
              <div class="tr3 tr">
                <div class="consumables">
                  <div v-for="(v, vIndex) in state.data" :key="vIndex">
                    <div class="consumables-subitem" :style="{ background: vIndex + 1 <= item.statu ? color.get(item.statu) : '#191440' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted, onBeforeUnmount, watch } from 'vue'
  import { color } from './conifgs'
  const props = defineProps<{
    height: any
    data: any
  }>()

  const state: any = reactive({
    data: new Array(10),
    height: props.height,
    showFlag: true,
    tableTimer: null,
    tableTop: 0,
    tableList: [],
    tableListSize: 0,

    //需要根据情况设置的参数
    title: '排产进度',
    visibleSize: 6, //容器内可视最大完整行数
    lineHeight: 49, //每行的实际高度（包含margin-top/bottom,border等）
    tableTimerInterval: 100, //向上滚动 1px 所需要的时间，越小越快，推荐值 100

    componentTimer: null, //刷新数据的定时器
    componentTimerInterval: 3600000 //刷新数据的时间间隔
  })
  onMounted(() => {
    clearInterval(state.componentTimer)

    bsGetProductProcess(props.data)

    componentTimerFun()
  })
  onBeforeUnmount(() => {
    clearInterval(state.componentTimer)
    clearInterval(state.tableTimer)
  })

  //调用数据接口，获取列表数据，根据自己情况填接口url
  const bsGetProductProcess = (v: any) => {
    //先清后加
    clearInterval(state.tableTimer) //清除滚动定时器
    state.tableTop = 0 //重新滚动
    state.showFlag = false
    // 赋值
    state.tableList = v

    state.showFlag = true
    tableActionFun()
  }

  const tableActionFun = () => {
    //数据长度是否>可视最大行
    state.tableListSize = state.tableList.length
    if (state.tableListSize > state.visibleSize) {
      state.tableList = state.tableList.concat(state.tableList)
      tableTimerFun()
    } else {
      fillTableList()
    }
  }
  //当数据过少时，不触发自动轮播事件，并填充没有数据的行，参数根据实际情况修改即可
  const fillTableList = () => {
    let addLength = state.visibleSize - state.tableListSize
    for (let i = 0; i < addLength; i++) {
      state.tableList.push({
        planNo: '-',
        type: '-',
        startDate: '-',
        endDate: '-',
        process: '-'
      })
    }
  }
  //****滚动逻辑
  const tableTimerFun = () => {
    let count = 0
    state.tableTimer = setInterval(() => {
      if (count < (state.tableList.length / 2) * state.lineHeight) {
        state.tableTop -= 1
        count++
      } else {
        count = 0
        state.tableTop = 0
      }
    }, state.tableTimerInterval)
  }
  //间隔**秒重新获取接口数据
  const componentTimerFun = () => {
    state.componentTimer = setInterval(() => {
      bsGetProductProcess()
    }, state.componentTimerInterval)
  }
  //监听数据更新
  watch(
    () => props.data,
    item => {
      bsGetProductProcess(item)
    },
    { deep: true, immediate: true }
  )
</script>

<style scoped>
  .productProcess {
    width: 100%;
  }
  .loading_div {
    color: #eee;
    padding-top: 100px;
  }
  .title_div {
    width: 100%;
  }
  .table_body {
    width: 100%;
  }
  .table_th {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .tr {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 5px;
    text-align: center;
    font-size: 14px;
  }
  .tr1 {
    width: 35%;
  }
  .tr2 {
    width: 24%;
  }
  .tr3 {
    flex: 1;
    font-size: 13px;
  }
  .consumables {
    margin-top: 5px;
    width: 10.1vw;
    height: 3vh;
    border: 1px solid #31caff;

    display: flex;
  }
  .consumables-subitem {
    width: 1vw;
    height: 2.8vh;
    border: 2px solid #22343f;
    border-top: 1px solid #22343f;
    border-bottom: 1px solid #22343f;
  }

  .th_style {
    color: rgb(0, 221, 253);
    font-weight: bold;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 5px;
    text-align: center;
  }
  .table_main_body {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .table_inner_body {
    width: 100%;
    position: absolute;
    left: 0;
  }
  .table_tr {
    display: flex;
    height: 40px;
    line-height: 40px;
    color: #409eff;
    font-size: 15px;
    border: 1px solid #039af9;
    border-radius: 5px;
    margin-top: 7px;
    background: #060b25;
    box-shadow: inset 0px 0px 6px 0px #376cff;
  }
  .table-icon {
    width: 20px;
    height: 20px;
    margin-top: 8px;
  }
</style>
