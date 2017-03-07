export const base = `
<template>
	<mo-tabs v-model="demo.demo1" @change="tabChange">
		<mo-tab tab="Tab1" name="tab1">我是TAB1</mo-tab>
		<mo-tab tab="Tab2" name="tab2">我是TAB2</mo-tab>
		<mo-tab tab="Tab3" name="tab3">我是TAB3</mo-tab>
		<mo-tab tab="Tab4" name="tab4" :disabled="true">我是TAB4</mo-tab>
	</mo-tabs>
</template>
<script>
import MoTabs from 'mo/tabs/tabs'
import MoTab from 'mo/tabs/tab'
export default {
	components: {
		MoTabs,
		MoTab
	},
	data () {
		return {
			demo : {
				demo1 : 'tab1'
			}
		}
	},
	methods : {
		tabChange(name) {
			console.log(name)
		}
	}
}
</script>
`
export const number = `
<template>
	<mo-paging :pageIndex="pageIndex" :total="total" @change="pageChange"></mo-paging>
</template>
<script>
//同上
</script>
`