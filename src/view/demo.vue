<template>
	<mo-tabs v-model="tab">
		<mo-tab-pane tab="示例DEMO" name="demo">
			<slot name="demo"></slot>
		</mo-tab-pane>
		<mo-tab-pane tab="源码CODE" name="code">
			<pre-code v-model="code" v-if="code"></pre-code>
			<slot name="code"></slot>
		</mo-tab-pane>
	</mo-tabs>
</template>

<script>
	import {MoTabs, MoTabPane} from 'mo/tabs/'
	import PreCode from './code'
	export default {
		name : 'demo',
		props : {
			code : String
		},
		components : {
			MoTabs,
			MoTabPane,
			PreCode
		},
		data () {
			return {
				tab : 'demo'
			}
		}
	}
</script>