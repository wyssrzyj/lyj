<!--
 * @Author: lyj
 * @Date: 2023-08-01 13:20:59
 * @LastEditTime: 2023-08-02 16:05:26
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
              :values="['假黑客程序']"
              :cursor="false"
              :speed="80"
            />
          </template>
          <div>
            <div class="wheel">
              <iframe
                src="/html/假黑客程序.html"
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
</script>

<style lang="less" scoped>
.wheel {
  width: 80vw;
  height: 70vh;
}
</style>
