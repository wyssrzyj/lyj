<!--
 * @Author: lyj
 * @Date: 2023-04-27 08:50:55
 * @LastEditTime: 2023-04-27 14:31:28
 * @Description: 
 * @LastEditors: lyj
-->

<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <el-card class="box-card" style="margin-top: 15px;">
        <template #header>
          <TypeIt
              :className="'type-it2'"
              :values="['使用插件 【cropperjs】']"
              :cursor="false"
              :speed="80"
            />
        </template>
          <el-button @click="showWindow" type="primary">上传图片</el-button>
      <Cropper :layer="state" v-model="img" />
        <img class="const-img" :src="img" alt=""  >
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  reactive, ref } from 'vue'
import Cropper from './modules/cropper/index.vue'
import xmlImg  from  "./modules/xml.jpg"
import TypeIt from "@/components/ReTypeit";

    let img = ref(xmlImg)
    const state = reactive({
      show: false,
      title: '图片上传'
    })
    const  showWindow=()=> {
      state.show = true
    }

</script>

<style lang="scss" scoped>
  .const-img{
    margin-top: 10%;
    width:500px ;
    height: 500px;
    border-radius: 10px;
  }
</style>