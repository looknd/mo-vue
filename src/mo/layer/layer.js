import {
	Manager,
	getZIndex
} from './manager'

const $body = document.body

export default {
	props: {
		value: Boolean,

	},
	data() {
		return {
			open: this.value,
			overlayZindex: getZIndex(),
			zIndex: getZIndex()
		}
	},
	methods: {
		overlayClick () {
			if (this.closeByOverlay) {
				this.hide('overlay')
			}
		},
		hide (from) {
			Manager.close(this)
			this.open = false
			this.$emit('input', false)
			this.$emit('close', from)
		},
	},
	mounted() {
		if (this.overlay && this.open) {
			Manager.open(this)
		}
		$body.appendChild(this.$refs.layer)
	},
	updated() {
		if (!this.overlay) {
			Manager.setZIndex(this)
		}
	},
	beforeDestroy () {
		Manager.close(this)
		$body.removeChild(this.$refs.layer)
	},
	watch: {
		value(val, old) {
			this.open = val
			if (val === old) return
				if (val) {
					Manager.open(this)
				} else {
					Manager.close(this)
				}
			}
		}
	}