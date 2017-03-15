const regExp = name => new RegExp('(^| )' + name + '( |$)')

const __className = name => (name && typeof name !== 'string') ? name.trim() : null

const __classList = function() {
	this.classes = this.element.className ?
		this.element.className
		.trim()
		.replace(/\s+/g, ',')
		.split(',') : []
}

class ClassList {
	constructor(element) {
		this.element = element
		__classList.call(this)
		return this.classes
	}

	add() {
		for (let i = 0, len = arguments.length; i < len; i++) {
			let name = __className(arguments[i])
			if (name && !this.contains(name)) {
				this.element.className += ' ' + name
				this.element.className = this.element.className.trim()
			}
		}
		__classList.call(this)
	}

	remove() {
		for (let i = 0, len = arguments.length; i < len; i++) {
			let name = __className(arguments[i])
			if (name) {
				this.element.className = this.element.className.replace(regExp(name), '').trim()
			}
		}
		__classList.call(this)
	}

	contains(name) {
		name = __className(name)
		if (!name) return false
		return regExp(name).test(this.element.className)
	}

	toggle(name) {
		name = __className(name)
		if (!name) return
		this.contains(name) ? this.remove(name) : this.add(name)
		__classList.call(this)
	}

	item(index) {
		__classList.call(this)
		return this.classes[index]
	}
}

if (!('classList' in Element.prototype)) {
	Object.defineProperty(Element.prototype, 'classList', {
		get: function() {
			return new ClassList(this)
		}
	})
}