import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/login.vue";
import Layout from "@/layout/Layout";

Vue.use(Router);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "dashboard",
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/Home"),
          name: "dashboard",
          meta: { title: "首页", icon: "index", noCache: true, affix: true }
        },
        {
          path: "usersInfor",
          component: () => import("@/views/users/usersInfor"),
          name: "usersInfor",
          meta: { title: "人员信息", icon: "index", noCache: true, affix: true }
        },
        {
          path: "usersGroup",
          component: () => import("@/views/users/usersGroup"),
          name: "usersGroup",
          meta: { title: "人员分组", icon: "index", noCache: true, affix: true }
        },
        {
          path: "passRule",
          component: () => import("@/views/rule/passRule"),
          name: "passRule",
          meta: {
            title: "人员通行规则",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "connectivityRules",
          component: () => import("@/views/rule/connectivityRules"),
          name: "connectivityRules",
          meta: {
            title: "人员通行规则",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "passRecord",
          component: () => import("@/views/rule/passRecord"),
          name: "passRecord",
          meta: {
            title: "人员记录",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "proClassify",
          component: () => import("@/views/product/proClassify/proClassify"),
          name: "proClassify",
          meta: {
            title: "产品分类",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "proManage",
          component: () => import("@/views/product/proManage/proManage"),
          name: "proManage",
          meta: {
            title: "产品管理",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "proList",
          component: () => import("@/views/product/proManage/proList"),
          name: "proList",
          meta: {
            title: "产品列表",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "courseClassify",
          component: () =>
            import("@/views/course/courseClassify/courseClassify"),
          name: "courseClassify",
          meta: {
            title: "课程分类",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "courseManage",
          component: () => import("@/views/course/courseManage/courseManage"),
          name: "courseManage",
          meta: {
            title: "课程管理",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "courseList",
          component: () => import("@/views/course/courseManage/courseList"),
          name: "courseList",
          meta: {
            title: "课程列表",
            icon: "index",
            noCache: true,
            affix: true
          }
        },
        {
          path: "courseDetails",
          component: () => import("@/views/course/courseManage/courseDetails"),
          name: "courseDetails",
          meta: {
            title: "课程列表",
            icon: "index",
            noCache: true,
            affix: true
          }
        }, // chapter
        {
          path: "chapter",
          component: () => import("@/views/course/courseManage/chapter"),
          name: "chapter",
          meta: {
            title: "课程章节",
            icon: "index",
            noCache: true,
            affix: true
          }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
