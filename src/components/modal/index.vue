<template>
	<div class="app-scroll">
		<h2 class="demo-name">Modal</h2>
		<h3 class="demo-title"><i class="mo-icon__lightbulb"></i>示例</h3>
		<panel>
			<h4 class="title" slot="title">简单使用</h4>
			<template slot="body">
				<demo :code="exampleCode">
					<template slot="demo">
						<example></example>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">嵌套使用</h4>
			<template slot="body">
				<demo :code="exampleNestingCode">
					<template slot="demo">
						<example-nesting></example-nesting>
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
	import ExampleNesting from './example-nesting'
	import exampleNestingCode from '!raw-loader!./example-nesting'

	
	

	export default {
		components : {
			Panel,
			Demo,
			Example,
			ExampleNesting,
		},
		data () {
			return {
				exampleCode,
				exampleNestingCode
			}
		}
	}
</script>