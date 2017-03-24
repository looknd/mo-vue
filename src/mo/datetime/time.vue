<template>
	<div class="mo-time">
		<div class="mo-time__body">
			<div class="time-field">
			<mo-input-number v-model="hour" maxlength="2" size="small" width="56px" min="0" max="23"></mo-input-number>时</div>
			<div class="time-field">
			<mo-input-number v-model="minute" maxlength="2" size="small" width="56px" min="0" max="59"></mo-input-number>分</div>
			<div class="time-field" v-if="showSecond">
			<mo-input-number v-model="second" maxlength="2" size="small" width="56px" min="0" max="59"></mo-input-number>秒</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~scss/import.scss'; 
	.mo-time {
		width: rem(292);
		height: 3rem;
		border: 1px solid $color-border;
		overflow: hidden;
		background-color: #fff;
		user-select: none;
		padding: .5rem 1rem;
		.mo-time__body {
			text-align: center;
			font-size: 0;
			.time-field {
				display: inline-block;
				margin-bottom: 0;
				font-size: rem(14);
				.mo-number-input {
					margin: 0 .25rem; 
					input{
						padding-left: .25rem;
						text-align: center;
					}
				}
				
				&:first-child input{
					margin-left: 0
				}
			}
		}
	}

</style>
<script>
	import {convertDate,dateToMap, formatDate} from '../utils/date'
	import MoInputNumber from '../input-number'
	const FormatReg = /^(h{1,2}.?)?(m{1,2}.?)?(s{1,2}.?)?$/
	const TimeReg = /^((\d{1,2}).?)?((\d{1,2}).?)?((\d{1,2}).?)?$/
	export default {
		name : 'MoTime',
		components : {MoInputNumber},
		props : {
			value : [String, Date],
			format : {
				type : String,
				default : 'hh:mm:ss'
			},
			showSecond : {
				type : Boolean,
				default : true
			},
			min : String,
			max : String
		},
		data () {
			return {
				hour : '',
				minute : '',
				second : '',
			}
		},
		methods : {

			initData (val) {
				if (val instanceof Date) {
					let map = dateToMap(val)
					this.hour = map.h
					this.minute = map.m
					this.second = map.s
				} else if (typeof val === 'string' || typeof val === 'number') {
					let value = val.toString()
					let match = val.match(/^(\d{4}(\-|\/|.)\d{1,2}(\-|\/|.)\d{1,2}\s+)?((\d{1,2})(\:)?)?((\d{1,2})(\:)?)?(\d{1,2})?$/)
					if (match) {
						if (match[5]) {
							this.hour = Number(match[5])
						}
						if (match[8]) {
							this.minute = Number(match[8])
						}
						if (match[10]) {
							this.second = Number(match[10])
						}
					}
				}

				this.validate()
			},

			validate () {
				let min, max, time, minMap, maxMap 
				if (this.min && TimeReg.test(this.min)) {
					min = convertDate(`1990-01-01 ${this.min}`) * 1
					minMap = dateToMap(min)
				}
				if (this.max && TimeReg.test(this.max)) {
					max = convertDate(`1990-01-01 ${this.max}`) * 1
					maxMap = dateToMap(max)
				}

				let hour = this.hour || '00'
				let minute = this.minute || '00'
				let second = this.second || '00'

				time = convertDate(`1990-01-01 ${hour}:${minute}:${second}`) * 1
				if (min && time < min) {
					this.hour = minMap.h
					this.minute = minMap.m
					this.second = minMap.s
				}

				if (max && time > max) {
					this.hour = maxMap.h
					this.minute = maxMap.m
					this.second = maxMap.s
				}
			},

			change (key) {
				let value = this[key]
				if (isNaN(value) || value < 0 || (key == 'hour' && value >= 24) || value >= 60) {
					this[key] = ''
				}
				this.validate()
				let hour = this['hour']
				let minute = this['minute']
				let second = this['second'] || '00'
				if (hour == '' || minute == '') {
					return
				}
				let date = `1900-01-01 ${hour}:${minute}:${second}`
				let format = FormatReg.test(this.format) ? this.format : 'hh:mm:ss'
				let time = formatDate(date, format)
				this.$emit('input', time)
				this.$emit('change', time)			
			}
		},

		mounted () {
			this.initData(this.value)
		},

		watch : {
			value (val, oldVal) {
				if (val === oldVal) {
					return
				}
				this.initData(val) 
			},
			min (val, oldVal) {
				if (val === oldVal) {
					return
				}
				this.validate()
			},
			max (val, oldVal) {
				if (val === oldVal) {
					return
				}
				this.validate()
			},
			hour (val) {
				this.hour = val
				this.change('hour')
			},
			minute (val) {
				this.change('minute')
			},
			second(val) {
				this.change('second')
			}
		}
	}
</script>