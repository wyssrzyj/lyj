<!--
 * @Author: lyj
 * @Date: 2023-04-26 14:00:09
 * @LastEditTime: 2023-04-26 14:06:39
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="block">
    <div class="header">
      <span class="num">{{ data.children.length }}</span>
      <!-- 标题 -->
      <div>{{ data.title }}</div>
    </div>
    <div class="list" ref="dom">
      <Item v-for="(item) in data.children" :key="item.id" :data="item" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {  ref, onMounted } from 'vue'
import Item from './item.vue'
import Sortable, { CustomEvent } from 'sortablejs'

  const props = defineProps<{
    data: any
  }>()
    const dom:any = ref(null) as any
    onMounted(() => {
      init()
    })
    const init=()=>{
       dom.value.list = props.data
      new Sortable(dom.value, {
        group: 'shared',
        animation: 150,
        ghostClass: 'blue-background-class',
        onEnd: function(evt: CustomEvent) {
          const pullMode = evt.pullMode
          const oldIndex = evt.oldIndex
          const newIndex = evt.newIndex
          let oldList = evt.target.list.children
          let newList = evt.to.list.children
          if (pullMode) { // 移动至toList并去除旧数据
            newList.splice(newIndex, 0, oldList[oldIndex])
            oldList.splice(oldIndex, 1)
          } else { // 同List位置修改
            const tem = oldList[oldIndex]
            oldList[oldIndex] = oldList[newIndex]
            oldList[newIndex] = tem
          }
        }
      })

    }
   
</script>

<style lang="scss" scoped>
  .block {
    width: 300px;
    height: calc(100% - 10px);
    background: #efefef;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    .header {
      display: flex;
      align-items: center;
      height: 50px;
      padding-left: 15px;
      border-bottom: 4px solid #dadce0;
     margin-bottom: 10px;
        .num{
        display: inline-block;
        margin-right: 4px;
        // padding: 2px 0px;
        color: #fff;
        font-size: 12px;
        min-width: 20px;
        line-height: 20px;
        font-weight: 400;
        text-align: center;
        background-color: #999;
        border-radius: 50%;
      }
      div {
        color: #000;
        margin-left: 5px;
      }
    }
    .list{
      min-height: 150px;
      padding: 0 0 0 10px;
      overflow-y: auto;
      flex: 1;
      height: auto;
      width: calc(100% - 10px);
      background: #eee;
    }
  }
</style>