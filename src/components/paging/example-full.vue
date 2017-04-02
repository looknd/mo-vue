<template>
	<div>
		<mo-paging 
		:pageIndex="index" 
		:pageSize="limit" 
		:total="total" 
		:showPageSizes="true" 
		@change="change">
		</mo-paging>
		<span style="margin-left: 10px;">当前页码：{{index}}，每页显示{{limit}}</span>
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
				limit : 10 
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