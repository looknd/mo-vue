<template>
	<ul>
		<li class="mo-tab__item" 
		:class="{'mo-tab--disabled' : item.disabled, 'mo-tab--active' : currentTab == item.name}" 
		v-for="(item, index) in items" 
		v-html="item.tab || `Tab${index}`"
		@click="tabClick(item)">
		</li>
	</ul>
</template>
<script>
	export default {
		name : 'MoTabNav',
		props : {
			tabs : Array,
			currentTab : String
		},
		methods : {
			tabClick (item) {
				if (!item.disabled) {
					this.$emit('click', item.name)
				}
			}
		},
		data () {
			console.log(this.tabs)
			return {
				items : this.tabs || []
			}
		}
	}
</script>