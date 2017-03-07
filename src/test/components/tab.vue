<template>
	<mo-tabs v-model="activeTab" @change="tabChange">
		<mo-tab tab="tab1" name="tab1">tab1</mo-tab>
		<mo-tab tab="tab2" name="tab2">tab2</mo-tab>
		<mo-tab tab="tab3" name="tab3"></mo-tab>
	</mo-tabs>
</template>

<script>
	import MoTabs from 'mo/tabs/tabs'
	import MoTab from 'mo/tabs/tab'
	export default {
		components : {
			MoTabs,
			MoTab,
		},
		data () {
			return {
				activeTab : 'tab1'
			}
		},
		methods : {
			tabChange(tab) {
				
			}
		}
	}
</script>
