<template>
	<div class="mo-datetime-picker">
		<label class="mo-picker__control" ref="control">
			<input type="text" class="mo-input" v-model="date" @focus="show">
		</label>
		<div class="mo-datetime-picker__panel" :class="{'only-datepicker' : !onlyDatePicker}" ref="panel" v-show="visible">
			<mo-date v-model="dateTime" @change="dayChange"></mo-date>
			<mo-time v-model="dateTime" @change="timeChange"></mo-time>
			<div class="picker-panel__actions mo-clearfix">
				<a class="mo-button--small mo-button--link mo-left" @click.stop="today">今天</a>
				<div class="mo-right">
					<button class="mo-button--small" @click.stop="hide">取消</button>
					<button class="mo-button--small mo-button--primary" @click.stop="ensure">确定</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const $body = document.body
	import MoDate from './date'
	import MoTime from './time'
	import {getElementRect} from '../utils/offset'
	import {convertDate, dateToMap, formatDate} from '../utils/date'
	export default {
		name : 'MoDatePicker',
		components : {
			MoDate,
			MoTime
		},
		props : {
			value: [String, Date],
			onlyDatePicker : Boolean,
			onlyTimePicker : Boolean,
			format : {
				type : String,
				default : 'yy-MM-dd hh:mm:ss'
			},
		},
		data () {
			return  {
				visible : false,
				date : null,
				dateTime : null,
				day : null,
				time : null
			}
		},
		methods : {
			show() {
				this.resetOffset()
				this.visible = true
				this.$emit('onFocus', this)
			},
			hide() {
				this.visible = false
			},
			resetOffset () {
				let rect = getElementRect(this.$refs['control'])
				let offset = rect.offset
				let $picker = this.$refs['panel']
				$picker.style.cssText += `top:${offset.top + rect.height}px;left:${offset.left}px;`
			},
			initValue(date) {
				if (date) {
					if (date instanceof Date) {
						this.dateTime = date
						this.date = formatDate(date, this.format)
						this.day = formatDate(date, 'yy-MM-dd')
						this.time = formatDate(date, 'hh:mm:ss')
					} else {
						let reg = /^((\d){2,4}.*)((\d){1,2}.*)((\d){1,2}.*)((\d){1,2}.*)?((\d){1,2}.*)?((\d){1,2}.*)?$/
						let timeReg = /^((\d){1,2}.*)((\d){1,2}.*)((\d){1,2}.*)?$/
						if (this.onlyTimePicker) {
							if (reg.test(date) || timeReg.test(date)) {
								date = convertDate(date)
								this.dateTime = date
								this.date = formatDate(date, this.format)
								this.day = formatDate(date, 'yy-MM-dd')
								this.time = formatDate(date, 'hh:mm:ss')
							}
						}
					}
				} else {
					this.dateTime = null
					this.date = null
					this.day = null
					this.time = null
				}
			},

			dayChange (val) {
				this.day = val
				this.dateChange()
			},
			timeChange (val) {
				//console.log(val)
				this.time = val
				this.dateChange()
			},

			dateChange () {
				let date = new Date()
				if (this.day) {
					date = this.day
					if (this.time) {
						date += ` ${this.time}`
					}
					date = convertDate(date)
				}
				this.dateTime = date
				//console.log(date)
				//
			},
			today () {
				this.dateTime = new Date()
				this.ensure()
			},
			ensure () {
				if (!this.dateTime) {
					this.dateTime = new Date()
				}
				this.date = formatDate(this.dateTime, this.format)
				this.hide()
			}
		},
		mounted () {
			this.initValue(this.value)
			$body.appendChild(this.$refs['panel'])
			if (!this._outClickEvent) {
				this._outClickEvent = event => {
					let $el = this.$el, $panel = this.$refs['panel']
					const target = event.target
					if (($el && !$el.contains(target)) && ($panel && !$panel.contains(target))) {
						this.hide()
					}
				}
			}
			$body.addEventListener('click', this._outClickEvent, false)
			window.addEventListener('resize', this.resetOffset, false)
		},
		beforeDestroy () {
			let $panel = this.$refs['panel']
			$panel && $body.removeChild($panel)
			$body.removeEventListener('click', this._outClickEvent, false)
			window.removeEventListener('resize', this.resetOffset, false)
		},
		watch : {
			value (val, oldVal) {
				if (val === oldVal) {
					return 
				}
				this.initValue(val)
			}
		}
	}
</script>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-datetime-picker {
		position: relative;
		display: inline-block;
		.mo-picker__control {
			display: block;
			margin: 0;
		}
	}
	.mo-datetime-picker__panel {
		z-index: 1990;
		position:absolute;
		margin-top: 2px;
		box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
		&.only-datepicker {
			.mo-time {
				margin-top: -1px;
				background-color: $color-lightest;
			}
		}
		.picker-panel__actions {
			padding: rem(10 20);
			border: 1px solid $color-border;
			border-top: none;
			text-align: center;
		}
	}
</style>