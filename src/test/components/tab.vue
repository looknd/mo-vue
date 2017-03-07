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
				<h4 class="title"></h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="activeTab.number">
					<mo-tab tab="Demo" name="demo">
						
					</mo-tab>
					<mo-tab tab="Code" name="code">
						<!-- <pre-code v-model="code.number"></pre-code> -->
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
	import * as code from './code/tabs'
	export default {
		components : {
			PreCode,
			MoTabs,
			MoTab
		},
		data () {
			return {
				activeTab : {
					base : 'demo',
					number : 'demo'
				},
				demo : {
					demo1 : 'tab1'
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