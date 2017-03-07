import Vue from 'vue'
import Router from 'vue-router'

import Install from './components/install'
import Paging from './components/paging'
import Tab from './components/tab'





Vue.use(Router)

export default new Router({
	routes: [{
		path: '/install',
		component: Install
	},{
		path: '/paging',
		component: Paging
	},{
		path: '/tab',
		component: Tab
	}],
	mode: 'history',
	linkActiveClass: 'active',
})