<template>
	<div>
		<h2 class="app-title">Layer</h2>
		<h3 class="demo-title">Demo</h3>
		<div class="demo-panel">
			<header class="demo-panel__header">
				<h4 class="title">简单分页</h4>
			</header>
			<main class="demo-panel__body">
				<mo-tabs v-model="demo1Tab">
					<mo-tab tab="Demo" name="demo">
							<button class="mo-button" @click="openLayer">open Layer</button>
							
					</mo-tab>
					<mo-tab tab="Code" name="code">
						
					</mo-tab>
				</mo-tabs>
				<mo-tabs v-model="demo1Tab">
					<mo-tab tab="Demo" name="demo">
						<mo-date min="2017-3-18" :onlyYear="true"></mo-date>
						<!-- <mo-time format="hh:mm" v-model="time"></mo-time> -->
							<!-- <mo-input-number :min="0" :max="10" size="small" width="60px"></mo-input-number> -->
							<mo-date-picker v-model="time" :showToday="false"></mo-date-picker>
					</mo-tab>
					<mo-tab tab="Code" name="code">
						
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
	import MoLayer from 'mo/layer'
	import MoDate from 'mo/datetime/date'
	import MoTime from 'mo/datetime/time'
	import MoInputNumber from 'mo/input-number/main'
	import MoDatePicker from 'mo/datetime/date-picker'
	export default {
		components : {
			PreCode,
			MoTabs,
			MoTab,
			MoDate,
			MoTime,
			MoDatePicker,
			MoInputNumber
		},
		data () {
			return {
				demo1Tab : 'demo',
				demo1Layer : false,
				demo2Layer : false,
				time : new Date()
			}	
		},
		methods : {
			openLayer () {
				MoLayer.confirm('您确定删除吗', () => {
					MoLayer.alert('点击了确定')
				}, () => {MoLayer.toast('点击了取消，自动关闭')})
			}
		},
		mounted () {
		}
	}
</script>