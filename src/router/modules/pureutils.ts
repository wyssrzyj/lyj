/*
 * @Author: lyj
 * @Date: 2023-04-26 14:54:38
 * @LastEditTime: 2023-04-27 14:36:42
 * @Description: 
 * @LastEditors: lyj
 */
/*
 * @Author: lyj
 * @Date: 2023-04-26 14:54:38
 * @LastEditTime: 2023-04-27 14:36:33
 * @Description: 
 * @LastEditors: lyj
 */
import { utils } from "@/router/enums";
import hot from "@/assets/svg/hot.svg?component";
// const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/pure-admin-utils",
  redirect: "/pure-admin-utils/index",
  meta: {
    icon: hot,
    title: "pure-admin-utils",
    rank: utils
  },
  children: [
    // {
    //   path: "/pure-admin-utils/index",
    //   name: "FrameUtils",
    //   component: IFrame,
    //   meta: {
    //     title: "pure-admin-utils",
    //     frameSrc: "https://pure-admin-utils.netlify.app/"
    //   }
    // }
  ]
} as RouteConfigsTable;
