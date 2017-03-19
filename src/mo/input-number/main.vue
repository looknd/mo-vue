<template>
	<div class="mo-number-input">
		<input type="text" v-model.number="val" :style="inputStyle" :class="inputClass" @change="change">
		<span class="mo-number__control" @click.stop>
			<a class="mo-number__plus" @click.stop="plus" :disabled="disabledPlus">
				<i class="mo-icon__arrow_up"></i>
			</a>
			<a class="mo-number__minus" @click.stop="minus" :disabled="disabledMinus">
				<i class="mo-icon__arrow_down"></i>
			</a>
		</span>
	</div>
</template>

<script>
	export default {
		name : 'MoInputNumber',
		props : {
			value : [Number, String],
			min : [Number, String],
			max : [Number, String],
			size : String,
			width : String 
		},
		data () {
			return {
				val : this.value
			}
		},
		methods : {
			change() {
				if (isNaN(this.val)) {
					this.val = ''
				}
				this.$emit('input', this.val)
			},
			plus () {
				let val = this.val || 0
				if (this.disabledPlus) {
					return 
				}
				val++
				this.val = val 
			},
			minus() {
				let val = this.val || 0
				if (this.disabledMinus) {
					return 
				}
				val--
				this.val = val 
			}
		},
		computed : {
			disabledPlus () {
				let val = this.val || 0
				let max = this.max
				if ((max || (max == 0)) && val >= max) {
					return true
				}
				return false
			},
			disabledMinus() {
				let min = this.min
				let val = this.val || 0
				if ((min || (min == 0)) && val <= min) {
					return true
				}
				return false
			},
			inputStyle () {
				if(this.width) {
					let width = this.width
					if (typeof width === 'number') {
						width = `${width}px`
					}
					return `width:${width}`
				}
			},
			inputClass () {
				if (this.size && ['small', 'large'].indexOf(this.size) > -1) {
					return `mo-input--${this.size}`
				}
				return 'mo-input'
			}
		},
	}
</script>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-number-input {
		display: inline-block;
		margin: 0;
		position: relative;
		padding-right: 1rem;
		text-align: center;
		input {
			width: 6rem;
		}
		.mo-number__control {
			position: absolute;
			width: 1rem;
			top: 0;
			bottom: 0;
			right: 1rem;
			font-size: 1rem;
			margin: 1px;
			display: none;
			user-select: none;
			.mo-number__plus,
			.mo-number__minus {
				width: 1rem;
				height: 50%;
				display: flex;
				flex-flow: column;
				align-items: center;
				justify-content: center;
				color: $color-text;
				&:hover {
					color: $color-primary;
					background-color: $color-light;
				}
				&[disabled] {
					color: $color-text!important;
					opacity: .5;
					cursor: default;
					background-color: none;
				}
			}
		}
		&:hover {
			.mo-number__control {
				display: block;
			}
		}
	}
</style>