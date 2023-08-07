<!--
 * @Author: lyj
 * @Date: 2023-08-01 13:20:59
 * @LastEditTime: 2023-08-07 11:21:36
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <el-tabs v-model="state.type" class="demo-tabs" @tab-click="handleClick">
      <!-- 卢ღღღ颜 -->
      <el-tab-pane label="卢ღღღ颜" name="User1">
        <div class="container">
          <div class="love">
            <Stereoscopic />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="天气轮盘" name="User2">
        <div class="container">
          <iframe
            src="/html/天气轮盘.html"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="🤖🤖🤖" name="User3">
        <div class="container">
          <iframe
            src="/html/动态机器人.html"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="🖱🖱特效1" name="User4">
        <div class="container">
          <iframe
            src="/html/鼠标特效.html"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="🖱🖱特效2" name="User5">
        <div class="container">
          <MouseEffects />
        </div>
      </el-tab-pane>
      <el-tab-pane label="宝可梦卡片" name="User6">
        <div class="container">
          <iframe
            src="https://poke-holo.simey.me/"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="小猫打字" name="User7">
        <div class="container">
          <iframe
            src="/html/小猫打字.html"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <!-- 猫猫性格 -->
      <el-tab-pane label="猫猫性格" name="User8">
        <div class="container">
          <iframe
            src="/html/猫猫性格.html"
            width="100%"
            height="100%"
            ref="iframeDom"
          />
        </div>
      </el-tab-pane>
      <!-- 页面效果 -->
      <el-tab-pane label="页面效果" name="User9">
        <div class="container effect">
          <Lotus />
        </div>
      </el-tab-pane>

      <!-- 立体按钮 -->
      <el-tab-pane label="立体按钮" name="Config">
        <div class="container">
          <NewButton />
        </div>
      </el-tab-pane>
      <!-- 底部冒泡 -->
      <el-tab-pane label="底部冒泡" name="Role">
        <div class="container-bottom">
          <div class="bubbling">
            <Bottom />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="404" name="404">
        <div class="container">
          <error />
        </div>
      </el-tab-pane>
      <el-tab-pane label="搜寻中~" name="Task">搜寻中~</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

import Stereoscopic from "./modules/stereoscopic/index.vue";
import type { TabsPaneContext } from "element-plus"; //小卢和小颜
import NewButton from "./modules/button/index.vue"; //立体按钮
import Bottom from "./modules/bottom/index.vue"; //底部按钮
import MouseEffects from "./modules/mouseEffects/index.vue"; //鼠标特效
import error from "./modules/error/index.vue"; //404
import Lotus from "./modules/lotus/index.vue"; //荷花

const state: any = reactive({
  type: "User1"
});
const handleClick = (tab: TabsPaneContext) => {
  state.type = tab.paneName;
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 600px;
}
.effect {
  // padding: 10px;
  // background: #231f20;
}
.love {
  margin-top: 150px;
}
.container-bottom {
  width: 100%;
  height: 600px;
}

.bubbling {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
