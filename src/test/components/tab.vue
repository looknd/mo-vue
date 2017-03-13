<template>
	<div>
		<h2 class="app-title">Tabs</h2>
		<h3 class="demo-title">Demo</h3>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">基本</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.base">
					<mo-tab tab="Demo" name="demo">
						<mo-tabs v-model="demo.demo1" @change="tabChange">
							<mo-tab tab="Tab1" name="tab1">我是TAB1</mo-tab>
							<mo-tab tab="Tab2" name="tab2">我是TAB2</mo-tab>
							<mo-tab tab="Tab3" name="tab3">我是TAB3</mo-tab>
							<mo-tab tab="Tab4" name="tab4" :disabled="true">我是TAB4</mo-tab>
						</mo-tabs>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.base"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">仅nav</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.number">
					<mo-tab tab="Demo" name="demo">
						<mo-tabs v-model="demo.demo2">
							<mo-tab tab="新闻" name="tab1"></mo-tab>
							<mo-tab tab="体育" name="tab2"></mo-tab>
							<mo-tab tab="社会" name="tab3"></mo-tab>
							<mo-tab tab="图片" name="tab4"></mo-tab>
							<mo-tab tab="科技" name="tab5"></mo-tab>
							<mo-tab tab="NBA" name="tab6"></mo-tab>
						</mo-tabs>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.nav"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>



			<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">仅nav(使用<code>is-nav</code>属性和<code>MoTabItem</code>组件)</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.number">
					<mo-tab tab="Demo" name="demo">
						<mo-tabs :is-nav="true">
							<mo-tab-item v-model="demo.demo3" name="tab1" :disabled="true">Tab1</mo-tab-item>
							<mo-tab-item v-model="demo.demo3" name="tab2">Tab2</mo-tab-item>
							<mo-tab-item v-model="demo.demo3" name="tab3"><i>Tab3</i></mo-tab-item>
							<mo-tab-item v-model="demo.demo3" name="tab4"><a>Tab4</a></mo-tab-item>
						</mo-tabs>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<pre-code v-model="code.nav"></pre-code>
					</mo-tab>
				</mo-tabs>
			</main>
		</div>


		<h3 class="demo-title">Api</h3>
	</div>
</template>
<script>
	import PreCode from './pre'
	import MoTabs from 'mo/tabs/tabs'
	import MoTab from 'mo/tabs/tab'
	import MoTabItem from 'mo/tabs/tab-item'
	import * as code from './code/tabs'
	export default {
		components : {
			PreCode,
			MoTabs,
			MoTab,
			MoTabItem
		},
		data () {
			return {
				activeTab : {
					base : 'demo',
					number : 'demo'
				},
				demo : {
					demo1 : 'tab1',
					demo2 : 'tab3',
					demo3 : 'tab2'
				},
				code
			}	
		},
		methods : {
			tabChange (tab) {
				console.log(tab)
			}
		}
	}
</script>