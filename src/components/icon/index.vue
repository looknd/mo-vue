<template>
	<div class="app-scroll">
		<h2 class="demo-name">Icon</h2>
		<h3 class="demo-title"><i class="mo-icon__lightbulb"></i>示例</h3>
		<panel>
			<h4 class="title" slot="title">全部图标</h4>
			<template slot="body">
				<demo :code="exampleCode">
					<template slot="demo">
						<example></example>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">颜色和尺寸</h4>
			<template slot="body">
				<demo :code="examplePropsCode">
					<template slot="demo">
						<example-props></example-props>
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
	import Example from './example'
	import exampleCode from '!raw-loader!./example'


	import ExampleProps from './example-props'
	import examplePropsCode from '!raw-loader!./example-props'

	export default {
		components : {
			Panel,
			Demo,
			Example,
			ExampleProps
		},
		data () {
			return {
				exampleCode,
				examplePropsCode
			}
		}
	}
</script>