<template>
	<div class="mo-time">
		<div class="mo-time__body">
			<template v-if="fields.h">
				<label class="time-field"><input type="text" v-model.number="hour" class="mo-input--small" @change="change('hour')" maxlength="2">时</label>
			</template>
			<template v-if="fields.m">
				<label class="time-field"><input type="text" v-model.number="minute" class="mo-input--small" @change="change('minute')" maxlength="2">分</label>
			</template>
			<template v-if="fields.s">
				<label class="time-field"><input type="text" v-model.number="second" class="mo-input--small" @change="change('second')" maxlength="2">秒</label>
			</template>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~scss/import.scss'; 
	.mo-time {
		width: rem(262);
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
				input {
					text-align: center;
					max-width: 3rem;
					margin: rem(0 5);
					padding: .25rem;
				}
				
				&:first-child input{
					margin-left: 0
				}
			}
		}
	}

</style>
<script>
	import {dateToMap, formatDate} from '../utils/date'
	const FormatReg = /^(h{1,2}(\:)?)?(m{1,2}(\:)?)?(s{1,2})?$/
	export default {
		name : 'MoTime',
		props : {
			value : [String, Date],
			format : {
				type : String,
				default : 'hh:mm:ss'
			},
		},
		data () {
			let fields = {h: true, m : true, s: true}
			if (this.format) {
				let match = this.format.match(FormatReg)
				if (match) {
					fields['h'] = !!match[1]
					fields['m'] = !!match[3]
					fields['s'] = !!match[5]
				}
			}

			return {
				fields,
				hour : '',
				minute : '',
				second : ''
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
			},
			change (key) {
				let value = this[key]
				if (isNaN(value) || value < 0 || (key == 'hour' && value >= 24) || value >= 60) {
					this[key] = ''
				}
				let hour = this['hour'] || '00'
				let minute = this['minute'] || '00'
				let second = this['second'] || '00'

				let date = `1900-01-01 ${hour}:${minute}:${second}`
				let format = FormatReg.test(this.format) ? this.format : 'hh:mm:ss'
				let time = formatDate(date, format)
				this.$emit('input', time)				
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
			}
		}
	}
</script>