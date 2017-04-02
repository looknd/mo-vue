<template>
	<div class="app-scroll">
		<h2 class="demo-name">Paging</h2>
		<h3 class="demo-title"><i class="mo-icon__lightbulb"></i>模式</h3>
		<panel>
			<h4 class="title" slot="title">完整模式</h4>
			<template slot="body">
				<demo :code="exampleFullCode">
					<template slot="demo">
						<example-full></example-full>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">自定义模式</h4>
			<template slot="body">
				<demo :code="exampleCustomCode">
					<template slot="demo">
						<example-custom></example-custom>
					</template>
				</demo>
			</template>
		</panel>

		<panel>
			<h4 class="title" slot="title">极简模式</h4>
			<template slot="body">
				<demo :code="exampleMinimalistCode">
					<template slot="demo">
						<example-minimalist></example-minimalist>
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
	import ExampleFull from './example-full'
	import exampleFullCode from '!raw-loader!./example-full'

	import ExampleCustom from './example-custom'
	import exampleCustomCode from '!raw-loader!./example-custom'


	import ExampleMinimalist from './example-minimalist'
	import exampleMinimalistCode from '!raw-loader!./example-minimalist'

	

	export default {
		components : {
			Panel,
			Demo,
			ExampleFull,
			ExampleCustom,
			ExampleMinimalist
		},
		data () {
			return {
				exampleFullCode,
				exampleCustomCode,
				exampleMinimalistCode
			}
		}
	}
</script>