<template>
	<div>
		<h2 class="app-title">Paging</h2>
		<h3 class="demo-title">Demo</h3>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">简单分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.demo1">
					<mo-tab tab="Demo" name="demo">
						<mo-paging :options="{prev : false,
							first: false,
							last : false,
							next : false}"
							:pageIndex="pageIndex.demo1"
							:total="total"
							@change="demo1Change">
						</mo-paging>
						<span style="margin-left: 10px;">当前页码：{{pageIndex.demo1}}</span>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.demo1"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">完整分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.demo2">
					<mo-tab tab="Demo" name="demo">
						<mo-paging :pageIndex="pageIndex.demo2" :total="total" :showPageSizes="true" @change="demo2Change"></mo-paging>
						<span style="margin-left: 10px;">当前页码：{{pageIndex.demo2}}，每页显示{{demo2Limit}}</span>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.demo2"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">极简分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.demo3">
					<mo-tab tab="Demo" name="demo">
						<mo-paging :pageIndex="pageIndex.demo3" :total="total" :options="{first: false, last: false, pager : false, prev : '上一页', next : '下一页'}" @change="demo3Change"></mo-paging>
						<span style="margin-left: 10px;">当前页码：{{pageIndex.demo3}}</span>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.demo3"></pre-code>
					</mo-tab>
				</mo-tabs>
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
				pageIndex :{
					demo1 : 3,
					demo2 : 2,
					demo3 : 1
				},
				total : 100,
				demo2Limit : 10,
				activeTab : {
					demo1 : 'demo',
					demo2 : 'demo',
					demo3 : 'demo'
				},
				code
			}	
		},
		methods : {
			demo1Change(page, limit) {
				this.pageIndex.demo1 = page
			},
			demo2Change(page, limit) {
				this.pageIndex.demo2 = page
				this.demo2Limit = limit 
			},
			demo3Change(page, limit) {
				this.pageIndex.demo3 = page
			}
		}
	}
</script>