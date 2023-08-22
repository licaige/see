import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/button',
    component: () => import('../pages/button.vue')
  },
  {
    path: '/cell',
    component: () => import('../pages/cell.vue')
  },
  {
    path: '/dropdown-menu',
    component: () => import('../pages/dropdown-menu.vue')
  },
  {
    path: '/overlay',
    component: () => import('../pages/overlay.vue')
  },
  {
    path: '/popup',
    component: () => import('../pages/popup.vue')
  },
  {
    path: '/toast',
    component: () => import('../pages/toast.vue')
  },
  {
    path: '/icon',
    component: () => import('../pages/icon.vue')
  },
  {
    path: '/tabs',
    component: () => import('../pages/tabs.vue')
  },
  {
    path: '/dialog',
    component: () => import('../pages/dialog.vue')
  },
  {
    path: '/field',
    component: () => import('../pages/field.vue')
  },
  {
    path: '/action-sheet',
    component: () => import('../pages/action-sheet.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
