<template>
	<div class="demo-tab-slot">
		<mo-tabs v-model="tab" type="slot">
			<template slot="nav">
				<mo-tab-nav name="tab1">
					<b style="color: #669933"><i class="mo-icon__camera"></i>体育</b>
				</mo-tab-nav>
				<mo-tab-nav name="tab2">
					<b style="color: #3399FF"><i class="mo-icon__timeline"></i>经济</b>
				</mo-tab-nav>
				<mo-tab-nav name="tab3" :disabled="true">
					<b style="color: #990033"><i class="mo-icon__import_contacts"></i>文化</b>
				</mo-tab-nav>
				<mo-tab-nav name="tab4">
					<b style="color: #6633FF"><i class="mo-icon__mobile"></i>数码</b>
				</mo-tab-nav>
				<mo-tab-nav name="tab5">
					<b style="color: #CC0000"><i class="mo-icon__video"></i>社会</b>
				</mo-tab-nav>
			</template>
			<template slot="pane">
				<mo-tab-pane name="tab1">体育板块</mo-tab-pane>
				<mo-tab-pane name="tab2">经济板块</mo-tab-pane>
				<mo-tab-pane name="tab3">文化板块</mo-tab-pane>
				<mo-tab-pane name="tab4">数码板块</mo-tab-pane>
				<mo-tab-pane name="tab5">社会板块</mo-tab-pane>
			</template>>
		</mo-tabs>
	</div>
</template>
<style lang="scss">
	.demo-tab-slot .mo-tab-nav i {
		font-size: 24px;
		vertical-align: middle;
		margin-right: 5px;
		position: relative;
		top: -2px;
	}
</style>
<script>
	import {MoTabs, MoTabNav, MoTabPane} from 'mo/tabs'
	export default {
		name : 'tabs-slot',
		components : {
			MoTabs,
			MoTabNav,
			MoTabPane
		},
		data () {
			return {
				tab : 'tab3'	
			}
		}
	}
</script>