<template>
	<ul class="mo-tabs__nav">
		<li class="mo-tab-nav" v-for="(item, index) in items" :key="index" :class="{'mo-tab--disabled' : item.disabled, 'mo-tab--active' : currentTab == item.name}" @click="tabClick(item)">{{item.tab || `Tab${index}`}}</li>
	</ul>
</template>
<script>
	export default {
		name : 'mo-tab-navs',
		props : {
			tabs : Array,
			currentTab : String
		},
		methods : {
			tabClick (item) {
				if (item.disabled) {
					return
				} 
				this.activeTab = item.name 
				this.$parent.$emit('input', this.activeTab)
			}
		},
		data () {
			return {
				items : this.tabs || [],
				activeTab : this.currentTab
			}
		},
		watch : {
			currentTab (val) {
				this.activeTab = val
			}
		}
	}
</script>