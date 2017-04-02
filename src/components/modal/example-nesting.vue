<template>
	<div>
		<button class="mo-button" @click="modal = true">打开对话框</button>
		<mo-modal v-model="modal">
			<template slot="title">Modal</template>
			<template slot="body">这是一个简单的对话框</template>
			<template slot="buttons">
				<button class="mo-button--link" @click="modal = false">关闭</button>
				<button class="mo-button--primary" @click="modal2 = true">打开对话框二</button>
			</template>
		</mo-modal>
		<mo-modal v-model="modal2" :closeByOverlay="true" :closeByEsc="true">
			<template slot="body">
				我是一个嵌套的对话框
				<p>我改变了遮罩层的层级，将对话框一压在了最下面</p>
				<p>您可以按<code>ESC键</code>或点击遮罩层关闭我</p>
			</template>
			<template slot="buttons">
				<button class="mo-button" @click="modal2 = false">我知道了</button>
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
				modal : false,
				modal2 : false
			}
		}
	}
</script>