import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LinkA from '../views/LinkA.vue';
import LinkB from '../views/LinkB.vue';
import LinkC from '../views/LinkC.vue';
import LinkD from '../views/LinkD.vue';
import LinkE from '../views/LinkE.vue';
import LinkF from '../views/LinkF.vue';
import PageA from '../views/PageA.vue';
import PageB from '../views/PageB.vue';
import NamedViewA from '../views/NamedViewA.vue';
import NamedViewB from '../views/NamedViewB.vue';
import ShowUser from '../views/ShowUser.vue';
import Props from '../views/Props.vue';
import ErrorPage from '../views/ErrorPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home,
    // 巢狀路由
    children: [{
      path: 'a',
      component: LinkA
    }, {
      path: 'b',
      component: LinkB
    }, {
      path: 'c',
      component: LinkC,
      children: [{
        path: 'c-1',
        // 具名視圖
        components: {
          left: NamedViewA,
          right: NamedViewB
        }
      }]
    }, {
      path: 'd',
      component: LinkD,
      children: [{
        // 動態路由
        path: ':id',
        component: ShowUser,
      }]
    }, {
      path: 'e',
      component: LinkE,
      children: [{
        // 動態路由傳參(id)
        props: true,
        path: ':id',
        component: Props,
      }]
    }, {
      path: 'f',
      component: LinkF
    }]
  }, {
    path: '/pageA',
    component: PageA
  }, {
    path: '/pageB',
    component: PageB
  }, {
    // 404頁面
    path: '/:pathMatch(.*)',
    component: ErrorPage
  }, {
    // redirect
    path: '/f/:pathMatch(.*)',
    component: Home
  }]
});

export default router
