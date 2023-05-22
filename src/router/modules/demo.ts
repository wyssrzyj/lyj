/*
 * @Author: lyj
 * @Date: 2023-04-26 16:37:00
 * @LastEditTime: 2023-05-15 13:09:07
 * @Description:
 * @LastEditors: lyj-电脑测试 lyj1974451304@163.com
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
      path: "/demo/bulletinBoard/cutting1.0/index",
      name: "cutting1",
      component: () =>
        import("@/views/demo/bulletinBoard/cutting1.0/index.vue"),
      meta: {
        title: "看板1"
      }
    },
    {
      path: "/demo/bulletinBoard/cutting2.0/index",
      name: "cutting2",
      component: () =>
        import("@/views/demo/bulletinBoard/cutting2.0/index.vue"),
      meta: {
        title: "看板2"
      }
    },
    {
      path: "/demo/bulletinBoard/cutting3.0/index",
      name: "cutting3",
      component: () =>
        import("@/views/demo/bulletinBoard/cutting3.0/index.vue"),
      meta: {
        title: "看板3"
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
    }
  ]
} as RouteConfigsTable;
