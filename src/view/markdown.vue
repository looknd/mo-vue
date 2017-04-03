<template>
	<div class="markdown-body" v-html="marked(text)"></div>
</template>
<script>
	import marked from 'marked'
	require('highlight.js/styles/github-gist.css')
	export default {
		props: {
			text: {
				type: String,
				default: ''
			}
		},
		created () {
			marked.setOptions({
				gfm: true,
				tables: true,
				breaks: false,
				pedantic: false,
				sanitize: false,
				smartLists: true,
				smartypants: false,
				highlight (code, lang) {
					return require('highlight.js').highlight(lang, code).value
				}
			})
		},
		methods: {
			marked (text) {
				return marked(text)
			}
		}
	}
</script>