<template>
	<mo-tabs v-model="tab" type="nav">
		<mo-tab-nav name="tab1">新闻</mo-tab-nav>
		<mo-tab-nav name="tab2">军事</mo-tab-nav>
		<mo-tab-nav name="tab3">娱乐</mo-tab-nav>
		<mo-tab-nav name="tab4">体育</mo-tab-nav>
		<mo-tab-nav name="tab5" :disabled="true">文化禁用</mo-tab-nav>
	</mo-tabs>
</template>

<script>
	import {MoTabs, MoTabNav} from 'mo/tabs'
	export default {
		name : 'tabs-nav',
		components : {
			MoTabs,
			MoTabNav
		},
		data () {
			return {
				tab : 'tab3'	
			}
		}
	}
</script>