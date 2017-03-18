const isObject = obj => obj !== null && typeof obj === 'object'

const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

const isFunction = obj => typeof obj === 'function'





/**
 * 拷贝源对象到目标对象
 * @param  {Object} target 目标对象
 * @return {Object}      
 */
const extend = Object.assign || function(target = {}) {
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


const decodeHtml = string => {
	if (!string) return ''
	return string.trim().replace(/&(lt|gt|nbsp|amp|quot);/ig, (all, char) => {
		return {
			'lt': '<',
			'gt': '>',
			'nbsp': ' ',
			'amp': '&',
			'quot': '"'
		}[char]
	})
}



export {
	isObject,
	isPlainObject,
	isFunction,
	extend,
	decodeHtml
}