<template>
	<div class="app-scroll">
		<h2 class="demo-name">InputNumber</h2>
		<h3 class="demo-title"><i class="mo-icon__lightbulb"></i>模式</h3>
		<panel>
			<h4 class="title" slot="title">默认</h4>
			<template slot="body">
				<demo :code="exampleCode">
					<template slot="demo">
						<example></example>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">只读并设置步调</h4>
			<template slot="body">
				<p>通过<code>step</code>属性，可以设置步调</p>
				<demo :code="exampleReadonlyCode">
					<template slot="demo">
						<example-readonly></example-readonly>
					</template>
				</demo>
			</template>
		</panel>
		<panel>
			<h4 class="title" slot="title">设置范围</h4>
			<template slot="body">
				<p>通过<code>min</code>和<code>max</code>属性，可以设置最小值和最大值</p>
				<p>如果输入值超出范围，将在<code>change</code>后更新</p>
				<demo :code="exampleRangeCode">
					<template slot="demo">
						<example-range></example-range>
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
	import ExampleReadonly from './example-readonly'
	import exampleReadonlyCode from '!raw-loader!./example-readonly'
	import ExampleRange from './example-range'
	import exampleRangeCode from '!raw-loader!./example-range'
	

	export default {
		components : {
			Panel,
			Demo,
			Example,
			ExampleReadonly,
			ExampleRange,
		},
		data () {
			return {
				exampleCode,
				exampleReadonlyCode,
				exampleRangeCode
			}
		}
	}
</script>