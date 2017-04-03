<template>
	<div>
		<button class="mo-button" @click="alert">alert</button>
		<button class="mo-button" @click="confirm">confirm</button>
		<button class="mo-button" @click="toast">toast</button>
	</div>
</template>

<script>
	import Layer from 'mo/layer'
	export default {
		methods : {
			alert () {
				Layer.alert('我执行成功了！')
			},
			confirm() {
				Layer.confirm('您确定要执行此操作吗？', 
					() => Layer.toast('点击了确定'), 
					() => Layer.toast('点击了取消')
					)
			},
			toast () {
				Layer.toast('我将在2秒后自动关闭')
			}
		}
	}
</script>