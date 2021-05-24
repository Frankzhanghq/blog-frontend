const c1 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/Social.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--user--id-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/user/[id].vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--my-page-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/templates/MyPage.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/Project.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--foo-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/Foo.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/Blog.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/zhanghuaqiang/Documents/gitProjects/gitee/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/social/:page(\\d+)?/",
    component: c1
  },
  {
    name: "__user_id",
    path: "/user/:id",
    component: c2,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/projectDetail/:id/",
    component: c3
  },
  {
    path: "/blogDetail/:id/",
    component: c3
  },
  {
    path: "/project/",
    component: c4
  },
  {
    path: "/my-page/",
    component: c3
  },
  {
    path: "/foo/",
    component: c5
  },
  {
    path: "/blog/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
