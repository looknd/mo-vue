let zIndex = 19900206

/**
 * get z-index
 */

const getZIndex = () => zIndex = zIndex + 1



const Manager = {

	instances: [],

	open (instance) {
		if (!instance || this.instances.indexOf(instance) !== -1) return
		this.instances.push (instance)
	}
}



export {
	getZIndex,
	Manager
}