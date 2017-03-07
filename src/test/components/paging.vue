<template>
	<div>
		<h2 class="app-title">Paging</h2>
		<h3 class="demo-title">Demo</h3>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">简单分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.simple">
					<mo-tab tab="Demo" name="demo">
						<mo-paging :options="{prev : false,
							first: false,
							last : false,
							next : false}"
							:pageIndex="pageIndex"
							:total="total"
							@change="pageChange">
						</mo-paging>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.simple"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">数字分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.number">
					<mo-tab tab="Demo" name="demo">
						<mo-paging :pageIndex="pageIndex" :total="total" @change="pageChange"></mo-paging>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.number"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">文字分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-paging layout="text"></mo-paging>
			</main>
		</div>
		<h3 class="demo-title">Api</h3>
	</div>
</template>
<script>
	import PreCode from './pre'
	import MoPaging from 'mo/paging/'
	import MoTabs from 'mo/tabs/tabs'
	import MoTab from 'mo/tabs/tab'
	import * as code from './code/paging'
	export default {
		components : {
			PreCode,
			MoPaging,
			MoTabs,
			MoTab
		},
		data () {
			return {
				pageIndex : 3,
				total : 100,
				activeTab : {
					simple : 'demo',
					number : 'demo'
				},
				code
			}	
		},
		methods : {
			pageChange(page) {
				console.log(page)
			}
		}
	}
</script>