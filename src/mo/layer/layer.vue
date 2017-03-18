<template>
	<mo-modal
	v-model="open"
	:scrollable="scrollable" 
	:top="top"
	:classes="classes" 
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


<style lang="scss">
@import '~scss/import.scss';
	.mo-modal__wrapper {
		.mo-modal {
			&.mo-modal--alert {
				.mo-modal__body {
					font-size: 1rem;
				}
			}
			&.mo-modal--confirm {
				.mo-modal__body {
					font-size: 1rem;
				}
			}
			&.mo-modal--toast {
				background-color: rgba(#000, .6);
				color: #fff;
				border-radius: 2px;
				min-width: 6rem;
				width: auto;
				text-align: center;
				.mo-modal__body {
					padding: rem(12 20);
				}
			}
		}

	}
</style>


<script>
	import MoModal from '../modal/'
	import {isFunction} from '../utils'
	export default {
		components : {
			MoModal
		},
		props : {

			visible : Boolean,

			//额外的样式
			classes : [String, Array],

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
			closeByOverlay : Boolean,

			//通过esc键关闭
			closeByEsc : Boolean,

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
				this.destroy()
				isFunction(this.cancel) && this.cancel()
			},
			onEnsure () {
				this.onCancel()
				if (isFunction(this.ensure)) {
					this.ensure()
				}
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