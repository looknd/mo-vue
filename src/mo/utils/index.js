/**
 * 拷贝源对象到目标对象
 * @param  {Object} target 目标对象
 * @return {Object}      
 */
export const extend = Object.assign || function(target = {}) {
	target = Object(target)
	for (let i = 1, len = arguments.length; i < len; i++) {
		let source = arguments[i]
		if (source != null) {
			for (let key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key]
				}
			}
		}
	}
	return target
}
