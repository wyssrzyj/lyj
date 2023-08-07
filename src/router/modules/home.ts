/*
 * @Author: lyj
 * @Date: 2023-05-06 16:54:29
 * @LastEditTime: 2023-08-02 16:17:26
 * @Description:
 * @LastEditors: lyj
 */
import { $t } from "@/plugins/i18n";
import { home } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: $t("🦄🦝🐨🐱‍🚀🐱‍👓"),
    rank: home
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: $t("🦄🦝🐨🐱‍🚀🐱‍👓")
      }
    }
  ]
} as RouteConfigsTable;
