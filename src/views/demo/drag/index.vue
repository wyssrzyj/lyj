<!--
 * @Author: lyj
 * @Date: 2023-04-26 14:00:09
 * @LastEditTime: 2023-04-27 14:24:58
 * @Description: 
 * @LastEditors: lyj
-->
<!--
 * @Author: lyj
 * @Date: 2023-04-26 09:50:55
 * @LastEditTime: 2023-04-26 10:50:15
 * @Description: 
 * @LastEditors: lyj
-->
<template>
    <div>
        <TypeIt :className="'type-it2'" :values="['使用插件 【sortablejs】']" :cursor="false" :speed="80" />
        <el-row :gutter="24">
            <el-col :span="24">
                <el-card class="box-card" style="margin-top: 15px;">
                    <template #header>
                        <h1>左右拖拽</h1>
                    </template>
                    <work />
                </el-card>
            </el-col>
            <el-col :span="24">
                <el-card class="box-card" style="margin-top: 15px;">
                    <template #header>
                           <div>
                        <h1>   表格上下拖拽</h1>
                        </div>
                    </template>
                    <TopTable />
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>
<script lang="ts" setup>
import work from "./modules/work/index.vue"
import TopTable from "./modules/topTable/index.vue"
import TypeIt from "@/components/ReTypeit";
</script>
<style lang="less" scoped></style>
