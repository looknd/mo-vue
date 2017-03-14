import Vue from 'vue'
import MoOverlay from './overlay'
const Overlay = Vue.extend(MoOverlay)


let zIndex = 19900200

/**
 * get z-index
 */

const getZIndex = () => zIndex = zIndex + 1



const $document = document.documentElement


const Manager = {

	instances: [],
	overlay: false,
	locked : false,

	open (instance) {
		if (!instance || this.instances.indexOf(instance) !== -1) return
		//如果没有遮罩层，就创建一个	
		if (instance.overlay && this.instances.length === 0) {
			this.createOverLay(instance)
		}
		//禁用滚动条
		if (!instance.scrollable) {
			this.disabledScroll()
		}
		this.setZIndex(instance, true)
		this.instances.push(instance)
		this.resetOverlayStyle()
	},

	close (instance) {
		let index = this.instances.indexOf(instance)
    if (index === -1) return
    Vue.nextTick(() => {
      this.instances.splice(index, 1)
      console.log(this.instances)
      if (this.instances.length === 0) {
        this.closeOverlay()
        this.enableScroll()
      }
      this.resetOverlayStyle()
    })
	},

	/**
	 * 创建遮罩层
	 * @param  {Object} instance
	 */
	createOverLay (instance) {
		let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    if (instance.overlayBackground) {
    	overlay.background = instance.overlayBackground
    }
    overlay.show = true
    overlay.zIndex = instance.overlayZindex
    overlay.clickEvent = this.overlayClickEvent.bind(this)
    document.body.appendChild(overlay.$el)
	},

	closeOverlay () {
		if (!this.overlay) return
    let overlay = this.overlay
    overlay.show = false
    this.overlay = null
    setTimeout(() => {
      overlay.$el.remove()
      overlay.$destroy()
    }, 100)
	},

	overlayClickEvent () {
		if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    if (instance.overlayClick) {
      instance.overlayClick()
    }
	},

	resetOverlayStyle () {
		if (!this.overlay || this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
   	if (instance.overlayBackground) {
    	overlay.background = instance.overlayBackground
    }
    this.overlay.zIndex = instance.overlayZIndex
	},


	setZIndex (instance, reset) {
		if (reset) {
				instance.overlayZIndex = getZIndex()
				instance.zIndex = getZIndex()
			} else {
				instance.zIndex = getZIndex()
			}
	},

	/**
	 * 禁用滚动条
	 */
	disabledScroll () {
		if (this.locked) return
		const scrollBarWidth = window.innerWidth - document.body.offsetWidth
		$document.style.overflowY = 'hidden'
		$document.style.paddingRight = `${scrollBarWidth}px`
		this.locked = true
	},

	/**
	 * 启用滚动条
	 * @param  {Object} instance
	 */
	enableScroll (instance) {
		$document.style.overflowY = null
		$document.style.paddingRight = null
		this.locked = false
	}



}



export {
	getZIndex,
	Manager
}