export const simple = `
<template>
	<mo-paging :options="{prev : false,
		first: false,
		last : false,
		next : false}"
		:pageIndex="pageIndex"
		:total="total"
		@change="pageChange">
	</mo-paging>
</template>
<script>
import MoPaging from 'mo/paging/'
export default {
	components: {
		MoPaging
	},
	data () {
		return {
			pageIndex : 3,
			total : 100
		}
	},
	methods : {
		pageChange(page) {
			console.log(page)
		}
	}
}
</script>
`
export const number = `
<template>
	<mo-paging :pageIndex="pageIndex" :total="total" @change="pageChange"></mo-paging>
</template>
<script>
//同上
</script>
`