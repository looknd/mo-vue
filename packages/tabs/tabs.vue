<script>
	import MoTabNavs from './tab-navs'
	export default {
		name : 'mo-tabs',
		components : {
			MoTabNavs
		},
		props : {
			//当前激活的tab
			value : [String, Number],
			//额外的样式
			className : [String, Array],

			type : {
				type : String,
				default : 'pane' //{slot : 插槽模式， nav : 包裹tab-nav组件, pane : 包裹tab-pane组件}
			}
		},

		data () {
			return {
				activeTab : this.value || null,
				tabs : []
			}
		},

		methods : {
			add (tab) {
				this.tabs.push(tab)
			},
			setCurrentTab (tab) {
				this.activeTab = tab 
				this.$emit('input', tab)
				this.$emit('change', tab)
			},
			/*tabClickEvent (name) {
				this.setCurrentTab(name)
				this.$emit('change', name)
			},*/
		},

		watch : {
			value (val, oldVal) {
				if (val === oldVal) {
					return
				}
				this.setCurrentTab(val)
			}
		},

		render(h) {
			let className = {
				'mo-tabs' : true
			}
			if (this.className) {
				let _className = this.className
				if (typeof _className === 'string') {
					_className = _className.trim().replace(' ', ',').split(',')
				}
				_className.forEach (_class => className[`mo-tabs--${_class}`] = true)
			}

			const slots = this.$slots

			const navSlot = slots.nav || slots.default
			const paneSlot = slots.pane || slots.default
			const type = this.type || 'pane'
			let nav, pane

			if (type === 'slot') {
				nav = h('ul', {
					'class' : 'mo-tabs__nav',
					slot : 'nav'
				}, navSlot)
				pane = h('div', {
					'class' : 'mo-tabs__panes',
					slot : 'pane'
				}, paneSlot)
			} else if (type === 'nav') {
				nav = h('ul', {
					'class' : 'mo-tabs__nav',
				}, navSlot)
			} else {
				nav = h(MoTabNavs, {
					props : {
						tabs : this.tabs,
						currentTab : this.activeTab
					},
					/*on : {
						click : this.tabClickEvent
					}*/
				})
				pane = h('div', {
					'class' : 'mo-tabs__panes',
				}, slots.default)
			}

			return h ('div', {
				'class' : className,
			}, [nav, pane])
		}
	}
</script>

<style lang="scss">
	@import '~scss/import.scss';
	.mo-tabs {
		position: relative;
		.mo-tabs__nav {
			@include clearFix;
			margin: 0;
			padding: 0;
			list-style: none;
			padding: 0;
			margin: 0 0 1rem;
			position: relative;
			user-select: none;
			display: flex;
			justify-content: space-between;
			align-items : center;
			text-align: center;
			max-width: 100%;
			list-style: none;
			border-bottom: 1px solid $color-border;
			.mo-tab-nav {
				line-height: rem(24);
				padding: rem(10);
				text-align: center;
				flex: 1 1 auto;
				cursor: pointer;
				position: relative;
				&.mo-tab--active {
					color: $color-primary;
					&:after {
						content: '';
						width: 100%;
						height: rem(2);
						background-color: $color-primary;
						position: absolute;
						left: 0;
						bottom: -1px;
					}
				}
				&.mo-tab--disabled {
					opacity: .5;
					cursor: not-allowed;
				}
			}
		}
		.mo-tabs__panes {
			position: relative;
			overflow: hidden;
			.mo-tab-pane {
				display: none;
				&.mo-tab--active {
					display: block;
				}
			}
		}

		&.mo-tabs--nav {
			.mo-tabs__nav {
				border: none;
				.mo-tab-nav {
					background-color: $color-primary;
					color: #fff;
					transition: all .12s;
					a {
						color: #fff;
						text-decoration: none;
					}
					&:not(.mo-tab--disabled):hover {
						background-color: rgba($color-primary, .85);
					}
					&.mo-tab--active {
						color: #fff;
						background-color: darken($color-primary, 5%);
						&:after {
							display: none;
						}
					}
				}
			}
		}

		&.mo-tabs--card {
			border: 1px solid $color-border;
			.mo-tabs__nav {
				background-color: $color-light;
				margin-bottom: 0;
				.mo-tab-nav {
					border-left: 1px solid $color-border;
					&:first-child {
						border-left: none;
					}
					&.mo-tab--active {
						transition: all .12s;
						background-color: #fff;
						color: $color-primary;
						&:after {
							background-color: #fff;
						}
					}
				}
			}
			.mo-tabs__panes {
				.mo-tab-pane {
					padding: 1rem;
				}
			}
		}
	}
</style>