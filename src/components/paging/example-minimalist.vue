<template>
	<div>
		<mo-paging 
		:options="options"
		:pageIndex="index" 
		:pageSize="limit" 
		:total="total" 
		@change="change">
		</mo-paging>
		<span style="margin-left: 10px;">当前页码：{{index}}</span>
	</div>
</template>

<script>
	import MoPaging from 'mo/paging'
	export default {
		components : {
			MoPaging
		},
		data () {
			return {
				total : 100,
				index : 3,
				limit : 10,
				options : {
					pager : false,
				}
			}
		},
		methods : {
			change (page, limit) {
				this.index = page
				this.limit = limit
			}
		}
	}
</script>