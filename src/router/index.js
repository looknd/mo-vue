import Vue from 'vue'
import Router from 'vue-router'

import Install from '@/components/install'
import Tabs from '@/components/tabs'
import Paging from '@/components/paging'
import Modal from '@/components/modal'
import InputNumber from '@/components/input-number'
import Icon from '@/components/icon'




Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/install',
    component: Install
  },
  {
    path: '/tabs',
    component: Tabs
  },
  {
    path: '/paging',
    component: Paging
  },
  {
    path: '/modal',
    component: Modal
  },
  {
    path: '/input-number',
    component: InputNumber
  },
  {
    path: '/icon',
    component: Icon
  }
  ],
  linkActiveClass: 'active',
})
