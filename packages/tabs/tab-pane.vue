<template>
	<div class="mo-tab-pane" :class="{'mo-tab--active' : name == activeTab}"><slot></slot></div>
</template>

<script>
	export default{
		name : 'mo-tab-pane',
		props : {
			disabled : Boolean,
			tab : [String, Number],
			name : [String, Number]
		},
		data () {
			return {
				activeTab : this.$parent.activeTab
			}
		},
		mounted () {
			if (this.$parent.type === 'pane') {
				this.$parent.add && this.$parent.add(this)
			}
		},
		watch : {
			'$parent.activeTab' (val, oldVal) {
				if (val === oldVal) {
					return
				}
				
				this.activeTab = val
			}
		}
	}
</script>