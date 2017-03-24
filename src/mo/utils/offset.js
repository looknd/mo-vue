const $body = document.body
const $document = document.documentElement
const getElementRect = target => {
	const rect = target.getBoundingClientRect()
	return {
		width : rect.width || target.offsetWidth,
		height: rect.height || target.offsetHeight,
		offset : {
			top  : rect.top + ($body.scrollTop || $document.scrollTop),
			left : rect.left + ($body.scrollLeft || $document.scrollLeft)
		},
		rect
	}
}


export {
	getElementRect
}