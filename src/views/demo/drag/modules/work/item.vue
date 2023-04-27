<template>
  <div class="item">
    <div class="title">
      {{ state.data.name }}
    </div>
    <div class="options">
      <p >{{ state.data.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  reactive } from 'vue'
 const props = defineProps<{
    data: any
  }>()
   const state: any = reactive({
    data: props.data,
  })
</script>

<style lang="scss" scoped>
  .item {
    background: #fff;
    width: calc(100% - 10px);
    min-height: 50px;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 10px 15px;
    overflow: hidden;
    white-space: normal;
    cursor: pointer;
    .tags {
      display: inline-block;
      margin-right: 10px;
      .tag{
        color: #fff;
        border-radius: 16px;
        padding: 2px 8px;
        height: 26px;
        line-height: 26px;
        font-weight: 400;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        border: 1px solid transparent;
      }
    }
    .title{
      font-size: 16px;
      margin-right: 8px;
      line-height: 20px;
    }
    .options{
      font-size: 12px;
      color: #999;
      padding-top: 10px;
    }
  }
</style>