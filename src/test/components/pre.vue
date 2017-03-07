<template>
	<pre><code :class="`lang-${lang}`" v-html="html"></code></pre>
</template>
<script>
	const HighLight = require('highlight.js')
	require('highlight.js/styles/github.css')
	export default {
		name : 'PreCode',
		props : {
			lang : {
				type : String,
				default : 'html'
			},
			value : String 
		},
		computed : {
			html () {
				return HighLight.highlight(this.lang, this.value).value
			}
		}
	}
</script>