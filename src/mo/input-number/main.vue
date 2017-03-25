<template>
	<label class="mo-number-input">
		<input type="text" v-model.number="val" :style="inputStyle" :class="inputClass" :disabled="disabled" @change="onChange" :maxlength="maxlength">
		<span class="mo-number__control" @click.stop>
			<a class="mo-number__plus" @click="plus" :disabled="disabledPlus">
				<i class="mo-icon__arrow_up"></i>
			</a>
			<a class="mo-number__minus" @click="minus" :disabled="disabledMinus">
				<i class="mo-icon__arrow_down"></i>
			</a>
		</span>
	</label>
</template>

<script>
	export default {
		name : 'MoInputNumber',
		props : {
			value : [Number, String],
			min : [Number, String],
			max : [Number, String],
			size : String,
			width : String,
			disabled: Boolean,
			maxlength : [Number, String],
			step : {
				type : [Number, String],
				default : 1
			}
		},
		data () {
			return {
				val : this.value
			}
		},
		methods : {
			onChange() {
				this.initVal()
				this.change()
			},
			change() {
				const val = this.val || ''
				this.$emit('input', val)
				this.$emit('change', val)
			},
			plus () {
				let val = this.val || 0
				if (this.disabledPlus) {
					return 
				}
				val += this.step
				this.val = val
				this.change()
			},
			minus() {
				let val = this.val || 0
				if (this.disabledMinus) {
					return 
				}
				val -= this.step
				this.val = val
				this.change()
			},
			isEffectiveVal (number) {
				return number || number == 0 
			},
			initVal () {
				let val = this.val
				if (this.isEffectiveVal(val)) {
					val = Number(val)
					const step = this.isEffectiveVal(this.step) ? Number(this.step) : 0 
					if (this.isEffectiveVal(this.min) ) {
						const min = Number(this.min)
						if (val <= min) {
							this.val = min 
							return
						}
					}
					if (this.isEffectiveVal(this.max)) {
						const max = Number(this.max) 
						if (val >= max) {
							this.val = max 
							return 
						}
					}
				} else {
					this.val = ''
				}
			}
		},
		computed : {
			disabledPlus () {
				if (this.disabled) {
					return true
				}
				const val = this.val || 0,
				max = this.max,
				step = Number(this.step)
				if (this.isEffectiveVal(max)) {
					return val + step > max
				}

				return false
			},
			disabledMinus() {
				if (this.disabled) {
					return true
				}
				const min = this.min,
				val = this.val || 0,
				step = Number(this.step)
				if (this.isEffectiveVal(min)) {
					return val - step < min 
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
		watch : {
			value (val) {
				this.val = val
				this.isEffectiveVal(val) && this.initVal()
			},
			min (val) {
				this.isEffectiveVal(val) && this.initVal()
			},
			max (val) {
				this.isEffectiveVal(val) && this.initVal()
			}
		}
	}
</script>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-number-input {
		display: inline-block;
		margin: 0;
		padding: 0;
		position: relative;
		text-align: center;
		input {
			width: 6rem;
			text-align: center;
			padding-left: .25rem;
			padding-right: .25rem;
			transition: padding-right .2s;
		}
		.mo-number__control {
			position: absolute;
			width: 1rem;
			top: 0;
			bottom: 0;
			right: 0;
			font-size: 1rem;
			margin: 1px;
			opacity: 0;
			user-select: none;
			transition: opacity .2s;
			.mo-number__plus,
			.mo-number__minus {
				width: 1rem;
				height: 50%;
				display: flex;
				flex-flow: column;
				align-items: center;
				justify-content: center;
				color: $color-hint;
				&:hover {
					color: $color-primary;
					background-color: $color-light;
				}
				&[disabled] {
					color: $color-hint!important;
					opacity: .5;
					cursor: default;
					background-color: none;
				}
			}
		}
		&:hover {
			input {
				padding-right: 1rem;
			}
			.mo-number__control {
				opacity: 1;
			}
		}
	}
</style>