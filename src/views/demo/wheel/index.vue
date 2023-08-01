<!--
 * @Author: lyj
 * @Date: 2023-08-01 13:20:59
 * @LastEditTime: 2023-08-01 20:34:40
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <template #header>
            <TypeIt
              :className="'type-it2'"
              :values="['天气轮盘']"
              :cursor="false"
              :speed="80"
            />
          </template>
          <div>
            <div class="wheel">
              <iframe
                src="/static/wheel.html"
                width="100%"
                height="100%"
                ref="iframeDom"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import TypeIt from "@/components/ReTypeit";

// const state: any = reactive({
// });
</script>

<style lang="less" scoped>
.wheel {
  width: 80vw;
  height: 70vh;
}
</style>
