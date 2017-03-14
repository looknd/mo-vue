<template>
<transition name="layer-fade">
	<div class="mo-layer__wrapper" ref="layer" v-show="open" :style="styles" @click="overlayClick">
			<div class="mo-layer" :style="{'margin-top' : top}" @click.stop>
					<div class="mo-layer__header" ref="title" v-if="(title || $slots && $slots.title)">
						 <h3 class="mo-layer__title">
						 		<slot name="title">{{ title }}</slot>
						 </h3>
					</div>
					<div class="mo-layer__body" ref="body">
						<slot name="body"></slot>
					</div>
					<div class="mo-layer__footer" ref="footer" v-if="$slots && $slots.buttons">
						<slot name="buttons"></slot>
					</div>
			</div>
	</div>
</transition>	
</template>
<script>
	import Layer from './layer'
	import {getZIndex} from './manager'
	export default {
		name : 'MoLayer',
		mixins : [Layer],
		props : {

			//打开时是否可滚动页面
			scrollable : Boolean,

			//标题，也可通过具名slot设置
			title : String,

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
			closeByOverlay : Boolean

		},
		computed : {
			styles () {
				return {
					'z-index' : this.zIndex
				}
			}
		},
		methods : {
		},
		mounted () {
			console.log(this)
		}
	}
</script>
<style lang="scss">
	@import '~scss/import.scss';
	.mo-layer__wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 19900206;
		text-align: center;
		> .mo-layer {
			display: inline-block;
			background-color: #fff;
			box-shadow: 0 1px 3px rgba(0,0,0,.3);
			margin-bottom: 3rem;
			max-width: 80%;
			max-height: 80%;
			overflow: hidden;
			margin-top: 15%;
			position: relative;
			text-align: left;
			> .mo-layer__header {
				padding: rem(20 20 0);
				line-height: 1;
				user-select: none;
			}
			> .mo-layer__body {
				padding: rem(30 20);
			}
			> .mo-layer__footer {
				padding: rem(0 20 20);
				text-align: right;
				user-select: none;
			}
			.mo-layer__title {
				font-size: rem(20);
				line-height: 1;
				margin: 0;
				padding: 0;
			}
		}
	}
	.layer-fade-enter-active {
    animation: dialogFadeIn .26s;
    .mo-layer {
    	backface-visibility: hidden;
    }
  }

  .layer-fade-leave-active {
    animation: dialogFadeOut .2s;
    .mo-layer {
    	backface-visibility: hidden;
    }
  }
   @keyframes dialogFadeIn {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes dialogFadeOut {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -10px, 0);
      opacity: 0;
    }
  }
</style>