<template>
	<ul class="mo-paging" v-if="layout == 'number'">
		<li
		:class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]"
		v-if="config.prev"
		@click="prev" v-html="config.prev"></li>

		<li
		:class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]"
		v-if="config.first && pages > 1"
		@click="first" v-html="config.first"></li>
		
		<li class="paging-item" v-if="!config.first && showPrevMore" @click="first">1</li>
		
		<li
		:class="['paging-item', 'paging-item--more']"
		v-if="showPrevMore" v-html="config.more"></li>

		<li
		:class="['paging-item', {'paging-item--current' : index === pager}]"
		v-for="pager in pagers"
		@click="go(pager)">{{ pager }}</li>

		<li
		:class="['paging-item', 'paging-item--more']"
		v-if="showNextMore" v-html="config.more"></li>
		
		<li class="paging-item" v-if="!config.last && showNextMore" @click="last">{{pages}}</li>

		<li
		<li
		:class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]"
		v-if="config.last && pages > 1"
		@click="last" v-html="config.last"></li>

		<li
		:class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]"
		v-if="config.next" @click="next" v-html="config.next"></li>
	</ul>
	<div class="mo-paging mo-paging__text" v-else>
		
	</div>
</template>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-paging {
		display: inline-block;
		padding: 0;
		margin: 1rem 0;
		font-size: 0;
		list-style: none;
		user-select: none;
		&.mo-paging__text {
			display: block;
			font-size: rem(14);
		}
		> .paging-item {
			display: inline;
			font-size: rem(14);
			position: relative;
			padding: rem(6 12);
			line-height: 1.42857143;
			text-decoration: none;
			border: 1px solid $color-border;
			background-color: #fff;
			margin-left: -1px;
			cursor: pointer;
			color: $color-text;
			&:first-child {
				margin-left: 0;
			}
			&:hover {
				background-color: #f0f0f0;
				color: $color-primary;
			}
			&.paging-item--disabled,
			&.paging-item--more{
				background-color: #fff;
				color: $color-text;
			}
			&.paging-item--disabled {
				cursor: not-allowed;
				opacity: .75;
			}
			&.paging-item--more,
			&.paging-item--current {
				cursor: default;
			}
			&.paging-item--current {
				background-color: $color-primary;
				color:#fff;
				position: relative;
				z-index: 1;
				border-color: $color-primary;
			}
		}
	}
</style>
<script>
	import {extend} from '../utils'
	export default {
		name : 'MoPaging',
		props : {

			//页面中的可见页码，其他的以...替代, 必须是奇数
			perPages : { 
				type : Number,
				default : 5 
			},

			//当前页码
			pageIndex : {
				type : Number,
				default : 1
			},

			//每页显示条数
			pageSize : {
				type : Number,
				default : 10
			},

			//总记录数
			total : {
				type : Number,
				default : 1
			},

			//分页样式 {number : 数字分页， text: 文字分页}
			layout : { 
				type : String,
				default : 'number'  
			},

			//配置参数
			options : Object
		},
		methods : {
			prev(){
				if (this.index > 1) {
					this.go(this.index - 1)
				}
			},
			next(){
				if (this.index < this.pages) {
					this.go(this.index + 1)
				}
			},
			first(){
				if (this.index !== 1) {
					this.go(1)
				}
			},
			last(){
				if (this.index != this.pages) {
					this.go(this.pages)
				}
			},
			go (page) {
				if (this.index !== page) {
					this.index = page
					this.$emit('change', this.index)
				}
			}
		},
		computed : {

			//计算总页码
			pages(){
				return Math.ceil(this.size / this.limit)
			},

			pagers () {
				const array = []
				const perPages = this.perPages
				const pageCount = this.pages
				let current = this.index
				const _offset = (perPages - 1) / 2

				
				const offset = {
					start : current - _offset,
					end   : current + _offset
				}

				//-1, 3
				if (offset.start < 1) {
					offset.end = offset.end + (1 - offset.start)
					offset.start = 1
				}
				if (offset.end > pageCount) {
					offset.start = offset.start - (offset.end - pageCount)
					offset.end = pageCount
				}
				if (offset.start < 1) offset.start = 1

					this.showPrevMore = (offset.start > 1)
				this.showNextMore = (offset.end < pageCount)

				for (let i = offset.start; i <= offset.end; i++) {
					array.push(i)
				}

				return array
			}
		},
		data () {
			const config = extend({}, {prev : 'prev',
				first: 'first',
				last : 'last',
				next : 'next',
				more : '...'}, this.options)

			return {
				config,
				index : this.pageIndex,
				limit : this.pageSize,
				size : this.total || 1,
				showPrevMore : false,
				showNextMore : false
			}
		},
		watch : {
			pageIndex(val) {
				this.index = val || 1
			},
			pageSize(val) {
				this.limit = val || 10
			},
			total(val) {
				this.size = val || 1
			}
		}
	}
</script>