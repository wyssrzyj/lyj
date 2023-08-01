/*
 * @Author: lyj
 * @Date: 2023-05-06 16:54:29
 * @LastEditTime: 2023-07-12 20:11:16
 * @Description:
 * @LastEditors: lyj
 */
import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: $t("menus.hslogin"),
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "homeFilled",
      title: $t("menus.hshome"),
      showLink: false,
      rank: 102
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  },
  // 下面是一个无layout菜单的例子（一个全屏空白页面），因为这种情况极少发生，所以只需要在前端配置即可（配置路径：src/router/modules/remaining.ts）
  {
    path: "/empty",
    name: "Empty",
    component: () => import("@/views/empty/index.vue"),
    meta: {
      title: $t("menus.hsempty"),
      showLink: false,
      rank: 103
    }
  },
  {
    path: "/demo/bulletinBoard/cloth/index",
    name: "cloth",
    component: () => import("@/views/demo/bulletinBoard/cloth/index.vue"),
    meta: {
      title: "看板1",
      showLink: false,
      rank: 103
    }
  },
  {
    path: "/demo/bulletinBoard/cutting/index",
    name: "cutting",
    component: () => import("@/views/demo/bulletinBoard/cutting/index.vue"),
    meta: {
      title: "看板2",
      showLink: false,
      rank: 103
    }
  },
  {
    path: "/demo/bulletinBoard/device/index",
    name: "device",
    component: () => import("@/views/demo/bulletinBoard/device/index.vue"),
    meta: {
      title: "看板3",
      showLink: false,
      rank: 103
    }
  }
] as Array<RouteConfigsTable>;
