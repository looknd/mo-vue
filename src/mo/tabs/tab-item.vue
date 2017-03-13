<template>
	<li class="mo-tab__item" :class="{'mo-tab--disabled' : disabled, 'mo-tab--active' : activeTab == name}" @click="tabClick(name)">
		<slot></slot>
	</li>
</template>

<script>

	export default {
		name : 'MoTabItem',
		props : {
			disabled : Boolean,
			name : [String, Number],
			value : String,
		},
		data () {
			return {
				activeTab : this.value
			}
		},
		methods : {
			tabClick (name) {
				if (this.disabled) return 
				this.activeTab = name 
				this.$emit('input', this.activeTab)
			}
		},
		watch : {
			value (val) {
				this.activeTab = val
			}
		}
	}
</script>