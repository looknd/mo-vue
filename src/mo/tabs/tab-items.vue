<template>
	<ul class="mo-tabs__nav">
		<mo-tab-item v-for="(item, index) in items" :key="index" v-model="activeTab" :name="item.name" v-html="item.tab || `Tab${index}`"></mo-tab-item>
	</ul>
</template>
<script>
	import MoTabItem from './tab-item'
	export default {
		name : 'MoTabItems',
		components : {
			MoTabItem
		},
		props : {
			tabs : Array,
			currentTab : String
		},
		methods : {
			tabClick () {
				let item
				for (let i = 0, len = this.items.length; i < len; i++) {
					if (this.items[i].name == this.activeTab) {
						item = this.items[i]
						break
					}
				}
				if (!item) {
					item = this.items[0]
				}
				if (!item.disabled) {
					this.$emit('click', item.name)
				}
			}
		},
		data () {
			return {
				items : this.tabs || [],
				activeTab : this.currentTab
			}
		},
		watch : {
			activeTab (val) {
				this.tabClick()
			}
		}
	}
</script>