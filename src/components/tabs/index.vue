<template>
	<div class="app-scroll">
		<h2 class="demo-name">Tabs</h2>
		<h3 class="demo-title"><i class="mo-icon__lightbulb"></i>模式</h3>
		<panel>
			<h4 class="title" slot="title">默认模式</h4>
			<template slot="body">
				<p>不设置（默认）或者设置<code>mo-tabs</code>组件的<code>type</code>属性为<code>panel</code></p>
				<p>用于nav内容简单的选项卡，通过<code>tab</code>属性传递<code>TAB</code>名称。</p>
				<demo :code="examplePaneCode">
					<template slot="demo">
						<example-pane></example-pane>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">插槽模式</h4>
			<template slot="body">
				<p>设置<code>mo-tabs</code>组件的<code>type</code>属性为<code>slot</code></p>
				<p>如果nav中含有复杂的HTML，建议使用插槽模式。</p>
				<demo :code="exampleSlotCode">
					<template slot="demo">
						<example-slot></example-slot>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">导航模式</h4>
			<template slot="body">
				<p>设置<code>mo-tabs</code>组件的<code>type</code>属性为<code>nav</code></p>
				<p>如果仅仅显示一个选下卡式的<code>navBar</code>，而没有相应的内容切换，建议使用导航模式。该模式不会生成内容区域的html</p>
				<demo :code="exampleNavCode">
					<template slot="demo">
						<example-nav></example-nav>
					</template>
				</demo>
			</template>
		</panel>

		<h3 class="demo-title"><i class="mo-icon__palette"></i>样式</h3>
		<panel>
			<h4 class="title" slot="title">选项卡</h4>
			<template slot="body">
				<p>设置<code>mo-tabs</code>组件的<code>className</code>属性为<code>card</code></p>
				<demo :code="exampleCardCode">
					<template slot="demo">
						<example-card></example-card>
					</template>
				</demo>
			</template>
		</panel>

		<panel>
			<h4 class="title" slot="title">导航条</h4>
			<template slot="body">
				<p>设置<code>mo-tabs</code>组件的<code>className</code>属性为<code>nav</code></p>
				<demo :code="exampleStyleNavCode">
					<template slot="demo">
						<example-style-nav></example-style-nav>
					</template>
				</demo>
			</template>
		</panel>

		<h3 class="demo-title"><i class="mo-icon__coding"></i>API</h3>



	</div>
</template>

<script>
	import Panel from '@/view/panel'
	import Demo from '@/view/demo'
	import ExamplePane from './example-pane'
	import examplePaneCode from '!raw-loader!./example-pane'

	import ExampleSlot from './example-slot'
	import exampleSlotCode from '!raw-loader!./example-slot'

	import ExampleNav from './example-nav'
	import exampleNavCode from '!raw-loader!./example-nav'

	import ExampleCard from './example-card'
	import exampleCardCode from '!raw-loader!./example-card'

	import ExampleStyleNav from './example-style-nav'
	import exampleStyleNavCode from '!raw-loader!./example-style-nav'


	export default {
		name : 'tab',
		components : {
			Panel,
			Demo,
			ExamplePane,
			ExampleSlot,
			ExampleNav,
			ExampleCard,
			ExampleStyleNav
		},
		data () {
			return {
				examplePaneCode,
				exampleSlotCode,
				exampleNavCode,
				exampleCardCode,
				exampleStyleNavCode
			}
		}
	}
</script>