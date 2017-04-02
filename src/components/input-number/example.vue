<template>
	<mo-input-number v-model="number"></mo-input-number>
</template>

<script>
	import MoInputNumber from 'mo/input-number'
	export default {
		components : {
			MoInputNumber
		},
		data () {
			return {
				number : 1 
			}
		}
	}
</script>