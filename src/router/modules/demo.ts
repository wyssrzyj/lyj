/*
 * @Author: lyj
 * @Date: 2023-04-26 16:37:00
 * @LastEditTime: 2023-08-02 16:42:10
 * @Description:
 * @LastEditors: lyj
 */
import { $t } from "@/plugins/i18n";
import { error } from "@/router/enums";

export default {
  path: "/demo",
  redirect: "/demo/index",
  meta: {
    icon: "",
    // showLink: false,
    title: "Σ(っ °Д °;)っ",
    rank: error
  },
  children: [
    {
      path: "/demo/interesting/index",
      name: "interesting",
      component: () => import("@/views/demo/interesting/index.vue"),
      meta: {
        title: "🛬🛸🐳🐌"
      }
    },
    {
      path: "/demo/screen1/index",
      name: "screen1",
      component: () => import("@/views/demo/screen1/index.vue"),
      meta: {
        title: "🐱‍👤🐱‍👤程序"
      }
    },
    {
      path: "/demo/screen2/index",
      name: "screen2",
      component: () => import("@/views/demo/screen2/index.vue"),
      meta: {
        title: "🎶🎶弹跳"
      }
    },
    {
      path: "/demo/mouseEffects/index",
      name: "mouseEffects",
      component: () => import("@/views/demo/mouseEffects/index.vue"),
      meta: {
        title: "🖱🖱特效1"
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
    // {
    //   path: "/demo/bulletinBoard/cutting1.0/index",
    //   name: "cutting1",
    //   component: () =>
    //     import("@/views/demo/bulletinBoard/cutting1.0/index.vue"),
    //   meta: {
    //     title: "看板1"
    //   }
    // },
    // {
    //   path: "/demo/bulletinBoard/cutting2.0/index",
    //   name: "cutting2",
    //   component: () =>
    //     import("@/views/demo/bulletinBoard/cutting2.0/index.vue"),
    //   meta: {
    //     title: "看板2"
    //   }
    // },
    // {
    //   path: "/demo/bulletinBoard/cutting3.3/index",
    //   name: "cutting3",
    //   component: () =>
    //     import("@/views/demo/bulletinBoard/cutting3.3/index.vue"),
    //   meta: {
    //     title: "看板3"
    //   }
    // },
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
