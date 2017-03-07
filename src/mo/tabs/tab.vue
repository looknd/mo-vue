<template>
	<div class="mo-tabs--body" v-show="active" v-if="$slots.default">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name : 'MoTab',
		props : {
			tab : String,
			name : String,
			disabled : Boolean
		},
		computed : {
			active () {
				return this.$parent.currentTab === (this.name || null)
			}
		},
		mounted () {
			this.$parent.add && this.$parent.add(this)
		}
	}
</script>