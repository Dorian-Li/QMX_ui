import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import premain from '../views/premain'
import notFound from "../views/notFound";
import forbidden from "../views/forbidden";
import anqijuView from "../views/dataVis/anqiju_baobiao";

import userManage from "../views/userManage";

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/anqijuView/1'
    },


    {
      //主页面
      path:'/anqijuView/:name',
      name:'anqijuView',
      component:anqijuView,
      meta:{authRequired:true},   //meta里面可以随便写，我这里先暂时写上需要认证
    },
    {
      path:'/userManage',
      name:'userManage',
      component:userManage,
    },

    {
      path:'/404',
      component:notFound,
    },
    {
      path:'/403',
      component:forbidden,
    },

  ]
})

// //确保用户在未登录的情况下无法访问除登录页面和用户管理页面以外的其他页面，并将其重定向到登录页面进行登录操作
// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('accessToken');
//   if (to.name === 'userManage') {
//     // Always allow navigation to "userManage" regardless of token
//     next();
//   } else if (to.name !== 'login' && !token) {
//     // Redirect to login page if not on "login" or "userManage" and no token
//     next({ name: 'login' });
//   } else {
//     // Allow other navigations
//     next();
//   }
// });

export default router
