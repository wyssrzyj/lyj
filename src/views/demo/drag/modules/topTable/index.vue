<!--
 * @Author: lyj
 * @Date: 2023-04-26 14:00:09
 * @LastEditTime: 2023-04-26 14:19:11
 * @Description: 
 * @LastEditors: lyj
-->

<template>
  <div style="width:800px">
 
    <el-table 
    ref="tableEl1"
    border 
    stripe 
    :data="state.tableData"
     height="250"
     style="width: 100%" 
    :header-cell-style="{ 'text-align': 'center' }" 
    :cell-style="{ 'text-align': 'center' }">
     <!-- 拖拽  -->
    <el-table-column prop="date" label="操作" width="180" >
        <template #default="">
          <img :src="drag" alt="" class="drag-icon move-icon">
      </template>
    </el-table-column>

    <el-table-column prop="name" label="标题" width="180" />
    <el-table-column prop="address" label="内容" />
  </el-table>
  </div>
</template>
<script lang="ts" setup>
 import { reactive,nextTick,ref } from 'vue'
import Sortable from 'sortablejs'
import drag from  "./drag.png"
const tableEl1 = ref()
  const state: any = reactive({
    tableData : [
  {
    id: '1',
    name: '小心',
    address: '最爱偷吃零食',
  },
  {
    id: '2',
    name: '梅露',
    address: '身体超级软',
  },
  {
    id: '3',
    name: '糯米',
    address: '爱咬鞋子',
  },
  {
    id: '4',
    name: '咪咪',
    address: '巨能吃 ',
  },
{
    id: '5',
    name: '暹罗',
    address: '淘气 ',
  },
{
    id: '6',
    name: '乌龟',
    address: '爱睡觉 ',
  },
{
    id: '7',
    name: '六角龙',
    address: '晒太阳',
  },]

  })
     nextTick(() => {
      initSortable()
    })
     const initSortable = () => {
    const el1 = tableEl1.value.$el.querySelector('.el-table__body tbody')
    Sortable.create(el1, {
      handle: '.move-icon',
      onEnd: ({ newIndex, oldIndex }) => {
        const arr = state.tableData
        const currRow = arr.splice(oldIndex, 1)[0]
        arr.splice(newIndex, 0, currRow)
        state.tableData = []
        nextTick(() => {
          state.tableData = arr
        })
      }
    })
  }
</script>
<style lang="less" scoped>
.drag-icon{
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>