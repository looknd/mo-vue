<template>
	<div class="mo-overlay" :style="styles"></div>
</template>

<style lang="scss">
	.mo-overlay {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(#000, .6);
	}
</style>

<script>
	export default {
		name : 'MoOverlay',
		props : {
			background : {
				type : String,
				default : 'rgba(0, 0, 0, .6)'
			},
			zIndex : {
				type : Number,
				default : 19900206
			}
		},
		computed : {
			styles () {
				return {
					'background-color' : this.background,
					'z-index' : this.zIndex
				}
			}
		}
	}
</script>