import Vue from 'vue'
import Router from 'vue-router'

import Paging from '@/components/paging/'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/paging',
		name: 'Paging',
		component: Paging
	}],
	mode: 'history',
})