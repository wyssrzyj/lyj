/*
 * @Author: lyj
 * @Date: 2023-04-26 16:37:00
 * @LastEditTime: 2023-04-27 14:34:15
 * @Description: 
 * @LastEditors: lyj
 */
import { $t } from "@/plugins/i18n";
import { error } from "@/router/enums";

export default {
  path: "/demo",
  redirect: "/demo/index",
  meta: {
    icon: "informationLine",
    // showLink: false,
    title: "demo例子",
    rank: error
  },
  children: [
    {
      path: "/demo/mouseEffects/index",
      name: "mouseEffects",
      component: () => import("@/views/demo/mouseEffects/index.vue"),
      meta: {
        title: "鼠标特效"
      }
    },
     {
      path: "/demo/echartsDemo/index",
      name: "echartsDemo",
      component: () => import("@/views/demo/echartsDemo/index.vue"),
      meta: {
        title: "图表"
      }
    },
     {
      path: "/demo/cutting/index",
      name: "cutting",
      component: () => import("@/views/demo/cutting/index.vue"),
      meta: {
        title: "看板"
      }
    },
      {
      path: "/demo/drag/index",
      name: "drag",
      component: () => import("@/views/demo/drag/index.vue"),
      meta: {
        title: "拖拽"
      }
    },
       {
      path: "/demo/imgCropping/index",
      name: "imgCropping",
      component: () => import("@/views/demo/imgCropping/index.vue"),
      meta: {
        title: "图片裁剪"
      }
    },
         {
      path: "/demo/gannt/index",
      name: "gannt",
      component: () => import("@/views/demo/gannt/index.vue"),
      meta: {
        title: "甘特图"
      }
    },
  ]
} as RouteConfigsTable;
