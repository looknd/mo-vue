<template>
	<i :class="className" :style="style"></i>
</template>

<script>
	export default {
		name : 'mo-icon',
		props : {
			value : String,
			size : {
				type : [String, Number],
				default : 24
			},
			color : String,
			styles : String
		},
		computed : {
			className () {
				if (!this.value) {
					return ''
				}
				return `mo-icon__${this.value}`
			},
			style () {
				
				let size = this.size
				if (typeof size === 'number' || !isNaN(size)) {
					size = `${this.size}px`
				}
				let style = `font-size:${size};`
				if (this.color) {
					style += `color:${this.color}`
				}
				if (this.styles) {
					style += `${this.styles}`
				}
				return style
			}
		}
	}
</script>