<template>
	<mo-tabs v-model="tab">
		<mo-tab-pane tab="新闻" name="tab1">新闻板块</mo-tab-pane>
		<mo-tab-pane tab="军事" name="tab2">军事板块</mo-tab-pane>
		<mo-tab-pane tab="娱乐" name="tab3">娱乐版块</mo-tab-pane>
		<mo-tab-pane tab="体育" name="tab4">体育板块</mo-tab-pane>
		<mo-tab-pane tab="文化" name="tab5" :disabled="true">文化板块</mo-tab-pane>
		<mo-tab-pane tab="数码" name="tab6">数码板块</mo-tab-pane>
		<mo-tab-pane tab="社会" name="tab7">社会板块</mo-tab-pane>
	</mo-tabs>
</template>

<script>
	import {MoTabs, MoTabPane} from 'mo/tabs'
	export default {
		name : 'tabs-pane',
		components : {
			MoTabs,
			MoTabPane
		},
		data () {
			return {
				tab : 'tab3'	
			}
		}
	}
</script>