import * as VueRouter from "vue-router";
import Store from "@/store/index.js";
import { ElMessage } from "element-plus";

// 路由组件
import Main from "@/views/main/main.vue";
import User from "@/views/user/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/main",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "/main",
        name: "main",
        component: Main,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("@/views/blog/index.vue"),
      },
    ],
  },
];
/**
 * 创建router实例
 *
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  // history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
// 路由守卫
router.beforeEach((to, from, next) => {
  if (!Store.state.user.isLogined) {
    // 未登陆时，跳转登录页面
    // window.location.href = window.location.origin + "/login/";
    // next(false);
    ElMessage({
      type: "warning",
      message: (
        <div class="tip">
          <p>您还未登录!当前系统{Store.state.systemName}</p>
        </div>
      ),
    });
  }
  Store.commit("changeMenu", to.path);
  next();
});
export default router;
