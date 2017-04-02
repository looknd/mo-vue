<template>
	<markdown :text="text"></markdown>
</template>
<script>
	import markdown from './markdown'
	export default {
		name : 'PreCode',
		components : {
			markdown
		},
		props : {
			value : String 
		},
		computed: {
			text () {
				return `\`\`\`html\n${this.value}\n\`\`\``
			}
		},
	}
</script>