<template>
	<div>
		<button class="mo-button" @click="modal = true">打开对话框</button>
		<mo-modal v-model="modal">
			<template slot="title">Modal</template>
			<template slot="body">这是一个简单的对话框</template>
			<template slot="buttons">
				<button class="mo-button--link" @click="modal = false">关闭</button>
				<button class="mo-button--primary" @click="modal = false">确定</button>
			</template>
		</mo-modal>
	</div>
</template>

<script>
	import MoModal from 'mo/modal'
	export default {
		components : {
			MoModal
		},
		data () {
			return {
				modal : false 
			}
		}
	}
</script>