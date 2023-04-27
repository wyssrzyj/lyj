<!--
 * @Author: lyj
 * @Date: 2023-04-25 16:11:41
 * @LastEditTime: 2023-04-26 09:34:15
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div class="list">
        <Block v-for="(item) in list" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {  ref } from 'vue'
  import Block from './block.vue'
  let list: any = ref([])
  const getList = () => {
    let data = [
      {
        id:1,
        title: '猫咪爱吃',
        children: [
          { name: '玉米',content: '玉米甜甜的',id:11 },
          { name: '西瓜',  content: '西瓜凉凉的，我的心是冰冰的',id:12 }
        ]
      },
      {
        id:2,
        title: '乌龟爱吃',
        children: [{ name: '小虾', content: '多吃虾,可以补充很多能量',id:21 }]
      },
      {
        id:3,
        title: '小鱼爱吃',
        children: [{ name: '小草',  content: '小草可以一直长',id:32}]
      }
    ]
    list.value = data
  }
  getList()
</script>

<style lang="scss" scoped>
  .layout-container-table {
    white-space: nowrap;
    padding: 15px 0 0 0;
    position: relative;
    :deep(.el-scrollbar__view) {
      height: 100%;
    }
    &::before,
    &::after {
      content: '';
      width: 15px;
      height: calc(100% - 20px);
      position: absolute;
      background: #fff;
      top: 0;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
    .list {
      box-sizing: border-box;
      overflow-y: hidden;
      overflow-x: auto;
      text-align: left;
      height: 100%;
      padding: 0 15px;
      background: #fff;
      .block {
        margin-right: 20px;
      }
      .block:last-child {
        margin-right: 0;
      }
    }
  }
</style>
