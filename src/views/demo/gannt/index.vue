<!--
 * @Author: lyj
 * @Date: 2023-01-09 15:17:25
 * @LastEditTime: 2023-04-27 13:24:02
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="new-page">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always" style="height: 87vh">
          <template #header>
            <TypeIt
              :className="'type-it2'"
              :values="['使用插件 【dhtmlx-gantt】']"
              :cursor="false"
              :speed="80"
            />
          </template>
          
          <div id="ganttDemo" ref="ruleFormRef" class="gantt-container" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import TypeIt from "@/components/ReTypeit";
import { gantt } from "dhtmlx-gantt"; // 引入模块
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

const state: any = reactive({
  ganttList: {
    data: [
      {
        //父亲
        id: 1,
        type: true, //判断是否可以移动
        text: "牛爷爷", //名称
        lyj: "8848",
        lxr: "糯米",
        progress: 0.6,
        open: true, //默认展开
        // progress: 1, //控制完成百分比 范围0-1
        color: "" //控制颜色
      },
      {
        //儿子
        id: 11,
        text: "小头爸爸",
        lyj: "8848",
        progress: 0.6,
        parent: 1,
        color: "", //控制颜色
        render: "split" //添加同一行
      },
      {
        //孙子
        id: 111,
        text: "大头儿子1号",
        lyj: "8848",
        start_date: "2023-04-7-9", //开始时间
        end_date: "2023-04-7-17 ", //结束时间
        progress: 0.6,
        parent: 11,
        color: "red" //控制颜色
      },
      {
        id: 112,
        text: "大头儿子2号",
        start_date: "2023-04-9-9", //开始时间
        end_date: "2023-04-9-17 ", //结束时间
        progress: 0.6,
        parent: 11,
        color: "pink" //控制颜色
      },
      {
        id: 113,
        text: "大头儿子3号",
        start_date: "2023-04-11-9", //开始时间
        end_date: "2023-04-11-17 ", //结束时间
        progress: 0.6,
        parent: 11,
        color: "#039af9" //控制颜色
      }
    ],
    links: [
      { id: 1, source: 1, target: 2, type: 0 },
      { id: 3, source: 2, target: 3, type: 0 }
    ]
  }
});
//配置数据【】
const initZoom = () => {
  gantt.i18n.setLocale("cn"); //设置中文
  gantt.config.readonly = false; //只读
  gantt.config.autoscroll = true; //如果线超出屏幕可以x滚动
  gantt.config.order_branch = true; // 左侧可以拖动
  // gantt.config.sort = true //左侧点击表头排序
  gantt.config.drag_move = true; //是否可以移动
  gantt.config.drag_progress = true; //拖放进度
  gantt.config.drag_resize = true; //控制大小
  gantt.config.show_links = true; //控制两端的线是否可以拖动
  gantt.config.details_on_dblclick = false; //双击出弹窗

  gantt.config.show_errors = false; //发生异常时，允许弹出警告到UI界面
  // open = true  图数据中设置 open = true 默认展开树
  // gantt.selectTask('1')//默认选中

  gantt.plugins({
    //多选
    multiselect: true
  });

  //单击事件
  gantt.attachEvent("onTaskSelected", function (id: any) {
    props.onChang(id, state.ganttList);
  });
  //单击右键
  gantt.attachEvent("onContextMenu", function (id: any) {
    // rightData && rightData(id)
  });

  gantt.attachEvent("onTaskOpened", function (e: any) {
    // console.log('分支被打开时(任务打开)', e)
    // expandOperation && expandOperation('开', e)
  });
  gantt.attachEvent("onTaskClosed", function (e: any) {
    // console.log('分支关闭时(任务关闭)', e)
    // expandOperation && expandOperation('关', e)
  });
  // 可以通过此控制 是否可以拖动 当前的状态=1不可拖动
  gantt.attachEvent("onBeforeTaskDrag", function (id: any, mode: any, e: any) {
    const task = gantt.getTask(id);
    // console.log('可以通过此控制 是否可以拖动', task)
    if (task.type === "1") {
      return false;
    } else {
      return true;
    }
  });

  //  日期控制
  const zoomConfig = {
    //只会使用第一个对象的数据
    levels: [
      // {
      //   name: 'Hours', //时
      //   scale_height: 60,
      //   min_column_width: 30,
      //   scales: [
      //     { unit: 'day', step: 1, format: '%M %d %l ' }, //时间的第一层
      //     { unit: 'hour', step: 1, format: '%H' } //时间的第二层
      //   ]
      // },
      {
        name: "Days", //日
        scale_height: 50,
        min_column_width: 100,
        scales: [
          { unit: "day", step: 1, format: " %M %d " }, //月日
          { unit: "day", step: 1, format: "  %l" } //星期
        ]
      },
      {
        name: "Quarter", //月
        height: 100,
        min_column_width: 90,
        scales: [{ unit: "month", step: 1, format: "%M" }]
      },
      {
        name: "Year", //年
        scale_height: 50,
        min_column_width: 30,
        scales: [{ unit: "year", step: 1, format: "%Y" }]
      }
    ]
  };
  gantt.ext.zoom.init(zoomConfig);
};

initZoom();

//渲染
const ganttShow = async () => {
  const chartDom: any = document.getElementById("ganttDemo");
  gantt.clearAll(); //缓存问题 先清楚后添加

  gantt.config.date_format = "%Y-%m-%d %H:%i"; //处理时间格【勿动】2023-2-23
  gantt.init(chartDom); //根据 id
  gantt.parse(state.ganttList); //渲染数据
};

// 赋值数据
const init = () => {
  ganttShow();
  // gantt.selectTask() //选中
  gantt.config.columns = [
    { name: "text", label: "图图的一家", tree: true, width: "150" },
    { name: "start_time", label: "时间", align: "center", width: "150" },
    { name: "type", label: "状态", align: "center" }
  ];
};
onMounted(() => {
  init();
});
</script>

<style scoped>
.gantt-container {
  width: 68vw;
  height: 400px;
}
.new-page {
  height: 100%;
  background-color: #fff;
  border-radius: 4px;
}
</style>
