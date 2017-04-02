<template>
	<li class="mo-tab-nav" :class="{'mo-tab--disabled' : disabled, 'mo-tab--active' : activeTab == name}" @click="tabClick(name)"><slot></slot></li>
</template>

<script>
	export default{
		name : 'mo-tab-nav',
		props : {
			disabled : Boolean,
			name : [String, Number],
		},
		data () {
			return {
				activeTab : this.$parent.activeTab
			}
		},
		methods : {
			tabClick (name) {
				if (this.disabled) {
					return
				} 
				this.activeTab = name 
				this.$parent.$emit('input', this.activeTab)
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