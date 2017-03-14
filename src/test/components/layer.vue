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
							<button class="mo-button" @click="demo1Layer = true">open Layer</button>
							<mo-layer v-model="demo1Layer" title="MoLayer">
								<template slot="body">
									我是个弹出层，我该如何呢？好烦啊<br/>
									啊啊啊啊
								</template>
							</mo-layer>
							<mo-layer v-model="demo2Layer" title="MoLayer">
								<template slot="body">
									我是个弹出层，我该如何呢？好烦啊<br/>
									啊啊啊啊
								</template>
							</mo-layer>
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
	import MoLayer from 'mo/layer/layer'
	export default {
		components : {
			PreCode,
			MoTabs,
			MoTab,
			MoLayer
		},
		data () {
			return {
				demo1Tab : 'demo',
				demo1Layer : false,
				demo2Layer : false
			}	
		},
		methods : {
			
		}
	}
</script>