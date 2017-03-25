<template>
	<div class="mo-date">
		<div class="mo-date__header">
			<template v-if="onlyYear">
				<div class="header-panel">
					<div class="panel-select panel-select__fluid">
						<a class="select-button select-button__prev" :class="{'select-button--disabled' : tenYear < startYear + 10}" @click="prevTenYear">
							<i class="mo-icon__arrow_left"></i>
						</a>
						<span class="select-button select-button__label">{{tenYear}}s</span>
						<a class="select-button select-button__next" :class="{'select-button--disabled' : tenYear > endYear - 10}" @click="nextTenYear">
							<i class="mo-icon__arrow_right"></i>
						</a>
					</div>
				</div>
			</template>
			<template v-else>
				<template v-if="onlyMonth">
					<div class="panel-select panel-select__fluid">
						<span class="select-button select-button__label">{{year}}年</span>
					</div>
				</template>
				<template v-else>

					<!-- day tab --> 
					<div class="header-panel" v-show="panel == 'day'">
						<div class="panel-select">
							<a class="select-button select-button__prev" :class="{'select-button--disabled' : (year === startYear && month === 1)}" @click="prevMonth">
								<i class="mo-icon__arrow_left"></i>
							</a>
							<a class="select-button select-button__label" @click="togglePanel('month')">{{month}}月</a>
							<a class="select-button select-button__next" :class="{'select-button--disabled' : (year === endYear && month === 12)}" @click="nextMonth">
								<i class="mo-icon__arrow_right"></i>
							</a>
						</div>
						<div class="panel-select">
							<a class="select-button select-button__prev" :class="{'select-button--disabled' : year === startYear}" @click="prevYear">
								<i class="mo-icon__arrow_left"></i>
							</a>
							<a class="select-button select-button__label" @click="togglePanel('year')">{{year}}</a>
							<a class="select-button select-button__next" :class="{'select-button--disabled' : year === endYear}" @click="nextYear">
								<i class="mo-icon__arrow_right"></i>
							</a>
						</div>
					</div>
					
					<!-- month tab --> 
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
					
					<!-- year tab --> 
					<div class="header-panel" v-show="panel == 'year'">
						<div class="panel-select" @click="togglePanel('day')">
							<a class="select-button select-button__prev">
								<i class="mo-icon__arrow_left"></i>
							</a>
							<a class="select-button select-button__label" style="text-align: left">{{year}}</a>
						</div>
						<div class="panel-select">
							<a class="select-button select-button__prev" :class="{'select-button--disabled' : tenYear < startYear + 10}" @click="prevTenYear">
								<i class="mo-icon__arrow_left"></i>
							</a>
							<span class="select-button select-button__label">{{tenYear}}s</span>
							<a class="select-button select-button__next" :class="{'select-button--disabled' : tenYear > endYear - 10}" @click="nextTenYear">
								<i class="mo-icon__arrow_right"></i>
							</a>
						</div>
					</div>
				</template>
			</template>
		</div>
		<div class="mo-date__body">
			<div class="mo-date__scroller" :style="translate">
				<!-- month panel -->
				<div class="body-panel body-panel__flex">
					<ul class="body-panel__cells" v-if="panel == 'month'">
						<li class="body-panel__cell" :class="{'panel-cell--active' : isCurrentMonth(n), 'panel-cell--disabled' : isDisabledMonth(n)}" v-for="n in 12" @click.stop="chooseMonth(n)"><span>{{n}}月</span></li>
					</ul>
				</div>
				
				<!-- day panel --> 
				<div class="body-panel">
					<template v-if="!onlyYear && !onlyMonth">
						<ul class="mo-days mo-week">
							<li class="mo-day" v-for="week in weeks"><span>{{week}}</span></li>
						</ul>
						<ul class="mo-days">
							<li class="mo-day" 
							v-for="d in days" 
							:class="{'mo-day--available' : d.inCurrentMonth && !d.isDisabled, 
							'mo-day--today' : d.isToday, 
							'mo-day--active' : d.isCurrent, 
							'mo-day--disabled' : d.isDisabled}" 
							@click="dateChange(d)"><span>{{d.day}}</span></li>
						</ul>
					</template>
				</div>
				
				<!-- year panel --> 
				<div class="body-panel body-panel__flex">
					<ul class="body-panel__cells" v-if="panel == 'year'">
						<li class="body-panel__cell" :class="{'panel-cell--active' : tenYear - 1 === year, 'panel-cell--disabled' : isDisabledYear(tenYear - 1)}" @click.stop="chooseYear(tenYear - 1)"><span>{{tenYear - 1}}</span></li>
						<li class="body-panel__cell" :class="{'panel-cell--active' : tenYear + n - 1 === year, 'panel-cell--disabled' : isDisabledYear(tenYear + n - 1)}" v-for="n in 10" @click.stop="chooseYear(tenYear + n - 1)"><span v-text="(tenYear + n - 1)"></span></li>
						<li class="body-panel__cell" :class="{'panel-cell--active' : tenYear + 10 === year, 'panel-cell--disabled' : isDisabledYear(tenYear + 10)}" @click.stop="chooseYear(tenYear + 10)"><span>{{tenYear + 10}}</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-date {
		width: rem(280);
		border: 1px solid $color-border;
		overflow: hidden;
		background-color: #fff;
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
				flex: 1 1 0;
				width: 50%;
				padding: 0 .5rem;
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
				&.select-button--disabled {
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
			height: rem(268);
			overflow: hidden;
			position: relative;
			.mo-date__scroller {
				height: 300%;
				overflow: hidden;
				transition: transform .14s cubic-bezier(0.39, 0.58, 0.57, 1);
				transform:translate3d(0, -33.3333%, 0);
				display: flex;
				flex-flow: column;
				.body-panel {
					width: 100%;
					flex: 1 1 0;
					min-height: 33.3333%;
					max-height: 34.4%;
					overflow: hidden;
					background-color: #fff;
					padding: .5rem; 
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
					display: inline-block;
					text-align: center;
					white-space: nowrap;
					color: $color-hint;
					position: relative;
					span {
						display: block;
						width: rem(30);
						height: rem(28);
						line-height: rem(28);
						margin: rem(4) auto;
						position: relative;
					}
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
					&.mo-day--today span{
						color: $color-positive;
						&:after {
							position: absolute;
							content: '';
							top: 0;
							right: 0;
							width: 0;
							height: 0;
							border-top: .5rem solid $color-positive;
							border-left: .5rem solid transparent;
						}
					}
					&.mo-day--active {
						span {
							transition: all .2s;
							color: #fff;
							background-color: $color-primary;
						}
					}
					&.mo-day--disabled {
						color: $color-placeholder!important;
						cursor: default;
						background-color: transparent!important;
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
					padding: rem(10 12);
					line-height: rem(28);
					white-space: nowrap;
					cursor: pointer;
					position: relative;
					span {
						display: block;
					}
					&:hover {
						color: $color-primary;
					}
					&.panel-cell--active {
						span {
							transition: all .2s;
							color: #fff;
							background-color: $color-primary;
						}
					}
					&.panel-cell--disabled {
						cursor: default;
						span {
							color: $color-placeholder!important;
							background-color: transparent!important;
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
			},
			onlyMonth : Boolean,
			onlyYear : Boolean
		},

		data () {
			let data = this.initData(true)
			data.todayMap = dateToMap(new Date())
			return {
				minMap : this.initMin(true),
				maxMap : this.initMax(true),
				...data
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
				if (this.isDisabledMonth(month)) {
					return false
				}
				this.month = month
				if (!this.onlyMonth) {
					this.panel = 'day'
				}
			},

			chooseYear (year) {
				if (this.isDisabledYear(year)) {
					return false
				}
				this.year = year
				if (!this.onlyYear) {
					this.panel = 'day'
				} else {
					//todo
				}
			},

			dateChange (dateMap) {
				if (dateMap.isDisabled) {
					return false
				}
				let date = `${dateMap.year}-${dateMap.month}-${dateMap.day}`
				this.date = formatDate(date, this.format)
				this.$emit('input', this.date)
				this.$emit('change', this.date)
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
			 	let min = this.minMap
			 	let max = this.maxMap
			 	let date = convertDate(`${dateMap.year}-${dateMap.month}-${dateMap.day}`) * 1 
			 	if (min && min.value) {
			 		min = min.value * 1 
			 		if (date < min) {
			 			return true
			 		}
			 	}
			 	if (max && max.value) {
			 		max = max.value * 1
			 		if (date > max) {
			 			return true 
			 		}
			 	}
			 	return false
			 },

			 isCurrentMonth (month) {
			 	if (this.isDisabledMonth(month)) {
			 		return false
			 	}
			 	return month == this.month
			 },

			 isDisabledMonth (month) {
			 	let min = this.minMap, max = this.maxMap, year = this.year
			 	if ((min.year && min.year > year) || (max.year && max.year < year)) {
			 		return true
			 	}

			 	if ((min.year && year > min.year) || (max.year && max.year > year)) {
			 		return false
			 	}

			 	return min.month > month || max.month < month
			 },


			 isDisabledYear (year) {
			 	let min = this.minMap, max = this.maxMap
			 	return (min.year && min.year > year) || (max.year && year > max.year)
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
			 },

			 //初始化数据
			 initData (first = false) {
			 	let date = this.isDate(this.value) ? this.value : null
			 	let currentMap = dateToMap(date || new Date()),
			 	year = currentMap.y, 
			 	month = currentMap.M, 
			 	tenYear = Number(String(year).replace(/\d$/, '0')),
			 	panel = 'day'
			 	this.onlyYear && (panel = 'year')
			 	this.onlyMonth && (panel = 'month')
			 	if (first) {
			 		return {
			 			date,
			 			year,
			 			month,
			 			tenYear,
			 			panel
			 		}
			 	} else {
			 		this.date = date 
			 		this.year = year
			 		this.month = month
			 		this.tenYear = tenYear
			 		this.panel = panel 
			 	}
			 },

			 //初始化最小日期
			 initMin (first = false) {
			 	let minMap = {}
			 	if (this.isDate(this.min)) {
			 		let min = dateToMap(this.min)
			 		minMap = {
			 			value : convertDate(`${min.y}-${min.M}-${min.d}`),
			 			year : min.y,
			 			month : min.M,
			 			day : min.d
			 		}
			 	}
			 	if (first) {
			 		return minMap 
			 	} 
			 	this.minMap = minMap
			 },

			 //初始化最大日期
			 initMax (first = false) {
			 	let maxMap = {}
			 	if (this.isDate(this.max)) {
			 		let max = dateToMap(this.max)
			 		maxMap = {
			 			value : convertDate(`${max.y}-${max.M}-${max.d}`),
			 			year : max.y,
			 			month : max.M,
			 			day : max.d
			 		}
			 	}
			 	if (first) {
			 		return maxMap 
			 	} 
			 	this.maxMap = maxMap
			 },

			},

			watch : {
				value (val, oldVal) {
					if (val === oldVal) {
						return
					}

					this.initData()

				},
				min (val, oldVal) {
					if (val === oldVal) {
						return
					} 
					this.initMin()
				},
				max (val, oldVal) {
					if (val === oldVal) {
						return
					} 
					this.initMax()
				},

			}
		}
	</script>