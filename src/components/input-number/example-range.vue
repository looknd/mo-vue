<template>
	<mo-input-number v-model="number" :min="0" :max="10" :step="0.5"></mo-input-number>
</template>

<script>
	import MoInputNumber from 'mo/input-number'
	export default {
		components : {
			MoInputNumber
		},
		data () {
			return {
				number : 0
			}
		}
	}
</script>