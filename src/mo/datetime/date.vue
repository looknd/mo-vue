<template>
	<div class="mo-date">
		<div class="mo-date__header">

			<div class="header-panel" v-show="panel == 'day'">
				<div class="panel-select">
					<a class="select-button select-button__prev" :class="{'select-button__disabled' : (year === startYear && month === 1)}" @click="prevMonth">
						<i class="mo-icon__arrow_left"></i>
					</a>
					<a class="select-button select-button__label" @click="togglePanel('month')">{{month}}月</a>
					<a class="select-button select-button__next" :class="{'select-button__disabled' : (year === endYear && month === 12)}" @click="nextMonth">
						<i class="mo-icon__arrow_right"></i>
					</a>
				</div>
				<div class="panel-select">
					<a class="select-button select-button__prev" :class="{'select-button__disabled' : year === startYear}" @click="prevYear">
						<i class="mo-icon__arrow_left"></i>
					</a>
					<a class="select-button select-button__label" @click="togglePanel('year')">{{year}}</a>
					<a class="select-button select-button__next" :class="{'select-button__disabled' : year === endYear}" @click="nextYear">
						<i class="mo-icon__arrow_right"></i>
					</a>
				</div>
			</div>

			<div class="header-panel" v-show="panel == 'month'">
				<div class="panel-select" @click="togglePanel('day')">
					<a class="select-button select-button__prev">
						<i class="mo-icon__arrow_left"></i>
					</a>
					<a class="select-button select-button__label" style="text-align: left">{{month}}月</a>
				</div>
				<div class="panel-select" @click="togglePanel('year')">
					<a class="select-button select-button__label" style="text-align: right">{{year}}</a>
					<a class="select-button select-button__next">
						<i class="mo-icon__arrow_right"></i>
					</a>
				</div>
			</div>

			<div class="header-panel" v-show="panel == 'year'">
				<div class="panel-select" @click="togglePanel('day')">
					<a class="select-button select-button__prev">
						<i class="mo-icon__arrow_left"></i>
					</a>
					<a class="select-button select-button__label" style="text-align: left">{{year}}</a>
				</div>
				<div class="panel-select">
					<a class="select-button select-button__prev" :class="{'select-button__disabled' : tenYear < startYear + 10}" @click="prevTenYear">
						<i class="mo-icon__arrow_left"></i>
					</a>
					<span class="select-button select-button__label">{{tenYear}}s</span>
					<a class="select-button select-button__next" :class="{'select-button__disabled' : tenYear > endYear - 10}" @click="nextTenYear">
						<i class="mo-icon__arrow_right"></i>
					</a>
				</div>
			</div>

		</div>
		<div class="mo-date__body">
			<div class="mo-date__scroller" :style="translate">
				<div class="body-panel body-panel__flex">
					<ul class="body-panel__cells">
						<li class="body-panel__cell" :class="{'panel-cell--active' : n === month}" v-for="n in 12" @click="chooseMonth(n)">
							{{n}}月
						</li>
					</ul>
				</div>
				<div class="body-panel">
					<ul class="mo-days mo-week">
						<li class="mo-day" v-for="week in weeks">{{week}}</li>
					</ul>
					<ul class="mo-days">
						<li class="mo-day" 
						v-for="d in days" 
						:class="{'mo-day--available' : d.inCurrentMonth, 'mo-day--today' : d.isToday, 'mo-day--active' : d.isCurrent, 'mo-day--disabled' : d.isDisabled}" @click="dateChange(d)">{{d.day}}</li>
					</ul>
				</div>
				<div class="body-panel body-panel__flex">
					<ul class="body-panel__cells">
						<li class="body-panel__cell" @click="chooseYear(tenYear - 1)">{{tenYear - 1}}</li>
						<li class="body-panel__cell" :class="{'panel-cell--active' : tenYear + n - 1 === year}" v-for="n in 10" @click="chooseYear(tenYear + n - 1)">
							{{tenYear + n - 1}}
						</li>
						<li class="body-panel__cell" @click="chooseYear(tenYear + 10)">{{tenYear + 10}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-date {
		width: rem(252);
		border: 1px solid $color-border;
		overflow: hidden;
		background-color: rgba(#fff, .9);
		user-select: none;
		.mo-date__header {
			height: 3rem;
			border-bottom: 1px solid $color-border;
			.header-panel {
				width: 100%;
				height: 100%;
				display: flex;
				flex-flow: row;
			}
			.panel-select{
				flex: 1 1 auto;
				width: 50%;
				margin: 0 .5rem;
				display: flex;
				flex-flow : row;
				&.panel-select__fluid {
					width: 100%;
				}
			}
			.select-button {
				cursor: pointer;
				white-space: nowrap;
				transition: all .2s;
				&:active {
					background-color: $color-lighter;
				}
				&.select-button__disabled {
					color: $color-placeholder;
					cursor: default;
					background-color: transparent;
				}
			}
			.select-button__prev,
			.select-button__next {
				width: 2rem;
				height: 2rem;
				margin: .5rem 0;
				font-size: rem(24);
				padding-top: rem(2);
				text-align: center;
			}
			.select-button__label {
				flex: 1 1 auto;
				text-align: center;
				line-height: 2rem;
				margin: .5rem 0;
			}
		}

		.mo-date__body {
			height: rem(252);
			overflow: hidden;
			position: relative;
			.mo-date__scroller {
				height: 300%;
				overflow: hidden;
				transition: transform .14s cubic-bezier(0.39, 0.58, 0.57, 1);
				transform:translate3d(0, -33.3333%, 0);
				.body-panel {
					width: 100%;
					height: rem(252);
					overflow: hidden;
					background-color: #fff;
				}
				.body-panel__flex {
					display: flex;
					flex-flow: column;
					align-items: center;
					justify-content: center;
				}
			}
			.mo-days {
				list-style-type: none;
				margin: 0;
				padding: 0;
				font-size: 0;
				.mo-day {
					font-size: rem(14);
					width: 100 / 7 * 1%;
					height: rem(36);
					line-height: rem(26);
					display: inline-block;
					text-align: center;
					padding: rem(5);
					white-space: nowrap;
					color: $color-hint;
					position: relative;
					&.mo-day--available {
						color: $color-text;
						cursor: pointer;
						transition: all .2s;
						&:hover {
							color: $color-primary;
						}
						&:active {
							background-color: $color-lighter;
						}
					}
					&.mo-day--today,&.mo-day--today:hover,&.mo-day--today.mo-day--active {
						color: $color-positive;
					}
					&.mo-day--active {
						color: $color-primary;
						font-size: 1rem;
						font-weight: bold;
						&:after {
							width: 80%;
							height: 2px;
							content: '';
							position: absolute;
							left: 10%;
							bottom: .25rem;
							background-color: $color-primary;
						}
					}
					&.mo-day--disabled {
						color: $color-placeholder!important;
						cursor: default;
						background-color: transparent!important;
					}
				}
				&.mo-week {					
					.mo-day {
						font-size: rem(14);
					}
				}
			}

			.body-panel__cells {
				list-style-type: none;
				margin: 0;
				padding: 1rem;
				font-size: 0;
				.body-panel__cell {
					display: inline-block;
					width: 33.3333%;
					font-size: rem(14);
					text-align: center;
					padding: rem(10 5);
					line-height: rem(24);
					white-space: nowrap;
					cursor: pointer;
					position: relative;
					&:hover {
						color: $color-primary;
					}
					&.panel-cell--active {
						color: $color-primary;
						&:after {
							width: 60%;
							height: 1px;
							content: '';
							position: absolute;
							left: 20%;
							bottom: .5rem;
							background-color: $color-primary;
						}
					}
				}
			}
		}
	}
</style>
<script>
	import {convertDate, dateToMap, formatDate} from '../utils/date'
	export default {
		name : 'MoDate',

		props : {
			value : [String, Date],
			weeks : {
				type : Array,
				default () {
					return ['日','一','二','三','四','五','六']
				}
			},
			min : [String, Date],
			max : [String, Date],
			startYear : {
				type : Number,
				default : 1899
			},
			endYear : {
				type : Number,
				default : 3000
			},
			format : {
				type : String,
				default : 'yy-MM-dd'
			}
		},
		data () {
			let todayMap = dateToMap(new Date())
			let map = this.initDateMap()
			let year = map.year 
			let tenYear = Number(String(year).replace(/\d$/, '0'))
			return {
				date : this.getCurrentDate(),
				todayMap,
				panel : 'day',
				tenYear,
				minDate : this.isDate(this.min) ? convertDate(this.min) : null,
				maxDate : this.isDate(this.max) ? convertDate(this.max) : null,
				...map
			}
		},


		computed : {
			translate () {
				let panel = this.panel
				let offset = 0
				switch (panel) {
					case 'day' :
					offset = '-33.3333%'
					break
					case 'year' :
					offset = '-66.6666%'
					break
					case 'month' :
					offset = 0
					break
				}
				return `-webkit-transform:translate3d(0, ${offset}, 0);transform:translate3d(0, ${offset}, 0)`
			},

			currentDateMap () {
				if (this.date) {
					return dateToMap(this.date)
				}
				return {}
			},


			days () {

				let year = this.year, 
				month = this.month,
				firstDay = this.getFirstDayInMounth(),
				days = this.getDays(year, month),
				todayMap = this.todayMap,
				array = [], i

				//上月
				let lastMonth = month -1, lastYear = year
				if (lastMonth < 1) {
					lastMonth = 12
					lastYear = year - 1
				}
				let lastMonthDays = this.getDays(lastYear, lastMonth)

				//下月
				let nextMonth = month + 1, nextYear = year 
				if (nextMonth > 12) {
					nextMonth = 1
					nextYear = year + 1
				}



				//上月部分
				for (i = 1 ; i < firstDay + 1; i++) {
					let date = {
						year : lastYear,
						month : lastMonth,
						day : lastMonthDays - firstDay + i 
					}
					date.isToday = this.isToday(date)
					date.isCurrent = this.isCurrentDate(date)
					date.isDisabled = this.isDisabledDate(date)
					array.push(date)
				}


				//当月
				for (i = 1; i < days + 1; i++) {
					let date = {
						year : year,
						month : month,
						day : i,
						inCurrentMonth : true,
					}
					date.isToday = this.isToday(date)
					date.isCurrent = this.isCurrentDate(date)
					date.isDisabled = this.isDisabledDate(date)
					array.push(date)
				}

				let len = firstDay + days
				let nextLen = 42 - len
				if (len >= 42) {
					nextLen = len - 42
				}
				
				for (i = 0; i < nextLen; i++) {
					let date = {
						year : nextYear,
						month : nextMonth,
						day : i+1
					}
					date.isToday = this.isToday(date)
					date.isCurrent = this.isCurrentDate(date)
					date.isDisabled = this.isDisabledDate(date)
					array.push(date)
				}

				return array
			}
		},


		methods : {

			togglePanel (panel) {
				this.panel = panel
			},

			chooseMonth (month) {
				this.month = month
				this.panel = 'day'
			},

			chooseYear (year) {
				this.year = year
				this.panel = 'day'
			},

			dateChange (dateMap) {
				if (dateMap.isDisabled) {
					return false
				}
				let date = `${dateMap.year}-${dateMap.month}-${dateMap.day}`
				this.date = formatDate(date, this.format)
			},

			/**
			 * 获取当月有多少天
			 * @return {Number}
			 */
			 getDays (year, month) {
			 	return new Date(year, month, 0).getDate()
			 },

			 isToday (dateMap) {
			 	let today = this.todayMap
			 	return dateMap.year == today.y && dateMap.month == today.M && dateMap.day == today.d  
			 	//return new Date().toDateString() === new Date(date).toDateString()
			 },

			 isCurrentDate (dateMap) {
			 	if (!this.date) {
			 		return false
			 	}
			 	let map = this.currentDateMap
			 	return dateMap.year == map.y && dateMap.month == map.M && dateMap.day == map.d  
			 },

			 isDisabledDate (dateMap) {
			 	let min = this.minDate
			 	let max = this.maxDate
			 	let date = convertDate(`${dateMap.year}-${dateMap.month}-${dateMap.day}`) * 1 
			 	if (min) {
			 		min = min * 1 
			 		if (date < min) {
			 			return true
			 		}
			 	}
			 	if (max) {
			 		max = max * 1
			 		if (date > max) {
			 			return true 
			 		}
			 	}
			 	return false
			 },

			 isDate (date) {
			 	return (date instanceof Date) || /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(date)
			 }, 

			/**
			 * 获取每月的1号是周几
			 * @return {Number}
			 */
			 getFirstDayInMounth () {
			 	return new Date(this.year, this.month - 1, 1).getDay()
			 },

			 getCurrentDate (date) {
			 	return this.isDate(date) ? date : ''
			 },

			 initDateMap () {
			 	let date = this.date || this.value
			 	let map
			 	if (date) {
			 		map = dateToMap(date)
			 	} else {
			 		map = dateToMap(new Date()) 
			 	}
			 	return {
			 		year  : map.y,
			 		month : map.M
			 	}
			 },

			 nextYear () {
			 	if (this.year < this.endYear) {
			 		this.year++
			 	}
			 },
			 prevYear () {
			 	if (this.year > this.startYear) {
			 		this.year--
			 	}
			 },
			 nextMonth () {
			 	if (this.year === this.endYear && this.month === 12) {
			 		return false
			 	}
			 	let month = this.month + 1
			 	if (month > 12) {
			 		this.month = 1
			 		this.year++
			 	} else {
			 		this.month = month
			 	}
			 },
			 prevMonth () {
			 	if (this.year === this.startYear && this.month === 1) {
			 		return false
			 	}

			 	let month = this.month - 1
			 	if (month < 1) {
			 		this.month = 12
			 		this.year--
			 	} else {
			 		this.month = month
			 	}
			 },

			 prevTenYear() {
			 	let year = this.tenYear
			 	if (year >= this.startYear + 10) {
			 		this.tenYear = year - 10 
			 	}
			 },
			 nextTenYear() {
			 	let year = this.tenYear
			 	if (year + 10 <= this.endYear) {
			 		this.tenYear = year + 10
			 	}
			 }

			},
			mounted () {

			},

			watch : {
				value (val, oldVal) {
					if (val === oldVal) {
						return
					} 
					this.date = this.getCurrentDate()
					const map = this.initDateMap()
					this.year = map.year
					this.month = map.month
				},
				min (val, oldVal) {
					if (val === oldVal) {
						return
					} 
					this.minDate = this.isDate(val) ? convertDate(val) : null
				},
				max (val, oldVal) {
					if (val === oldVal) {
						return
					} 
					this.maxDate = this.isDate(val) ? convertDate(val) : null
				},

			}
		}
	</script>