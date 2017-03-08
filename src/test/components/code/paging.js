export const demo1 = `
<template>
	<mo-paging :options="{prev : false,
		first: false,
		last : false,
		next : false}"
		:pageIndex="pageIndex.demo1"
		:total="total"
		@change="demo1Change">
	</mo-paging>
</template>

<script>
...
data () {
	return {
		total : 100,
		pageIndex : {
			demo1 : 3
			...
		}
	}
},
methods : {
	demo1Change(page, limit) {

	}
},
...
</script>
`
export const demo2 = `
<template>
	<mo-paging 
	:pageIndex="pageIndex.demo2" 
	:total="total" 
	:showPageSizes="true" 
	@change="demo2Change">
	</mo-paging>
</template>
<script>
...
data () {
	return {
		total : 100,
		pageIndex : {
			demo2 : 2
			...
		}
	}
},
methods : {
	demo2Change(page, limit) {
		
	}
},
</script>
`

export const demo3 = `
<template>
	<mo-paging 
	:pageIndex="pageIndex.demo3" 
	:total="total" 
	:options="{first: false, last: false, pager : false, prev : '上一页', next : '下一页'}"
	@change="demo3Change">
	</mo-paging>
</template>
<script>
...
data () {
	return {
		total : 100,
		pageIndex : {
			demo3 : 1
			...
		}
	}
},
methods : {
	demo3Change(page, limit) {
		
	}
},
</script>
`