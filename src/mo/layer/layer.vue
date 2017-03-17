<template>
	<mo-modal
	v-model="open"
	:scrollable="scrollable" 
	:top="top" 
	:overlay="overlay" 
	:overlayBackground="overlayBackground" 
	:closeByOverlay="closeByOverlay" 
	:closeByEsc="closeByEsc"
	@close="onCancel"
	>
	<template slot="title" v-if="title">{{title}}</template>
	<span slot="body" v-html="content"></span>
	<template slot="buttons" v-if="ensureButton || cancelButton">
		<button type="button" :class="cancelButtonClass" v-if="cancelButton" @click="onCancel">{{cancelButtonText}}</button>
		<button type="button" :class="ensureButtonClass" v-if="ensureButton" @click="onEnsure">{{ensureButtonText}}</button>
	</template>
</mo-modal>
</template>

<script>
	import MoModal from '../modal/'
	export default {
		components : {
			MoModal
		},
		props : {

			visible : Boolean,

			//打开时是否可滚动页面
			scrollable : Boolean,

			//标题
			title : String,

			//内容
			content : String,


			//距离顶部位置
			top : {
				type : String,
				default : '15%'
			},

			//是否显示遮罩
			overlay : {
				type : Boolean,
				default : true
			},

			//遮罩层背景
			overlayBackground : String, 

			//通过遮罩层关闭
			closeByOverlay : {
				type : Boolean,
				default : true
			},

			//通过esc键关闭
			closeByEsc : {
				type : Boolean,
				default : true
			},

			ensureButton : {
				type : Boolean,
				default : true
			},

			cancelButton : {
				type : Boolean,
				default : true
			},

			ensureButtonClass : {
				type : [String, Array],
				default () {
					return 'mo-button--primary'
				}
			},

			cancelButtonClass : {
				type : [String, Array],
				default () {
					return 'mo-button'
				}
			},

			ensureButtonText : {
				type : String,
				default : '确定'
			},

			cancelButtonText : {
				type : String,
				default : '取消'
			},

			ensure : Function,

			cancel : Function,

			autoClose : Boolean,

			autoCloseTime : {
				type : Number,
				default : 0
			}
		},

		data () {
			return {
				open : this.visible, 
				_closeTimer : null
			}
		},

		methods : {
			onCancel () {
				(this.cancel && typeof this.cancel === 'function') && this.cancel()
				this.destroy()
			},
			onEnsure () {
				this.onCancel();
				(this.ensure && typeof this.ensure === 'function') && this.ensure()
			},
			destroy () {
				this.$destroy()
				this.onRemove()
				this._closeTimer && clearTimeout(this._closeTimer)
			},
			onAutoClose () {
				let time = Number(this.autoCloseTime)
				this._closeTimer = setTimeout(this.onCancel, time)
			},
			onRemove () {}
		},

		beforeDestory () {
			this.destroy()
		},

		watch : {
			visible (val) {
				this.open = val
			}
		}
	}
</script>