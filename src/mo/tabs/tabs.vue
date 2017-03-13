<style lang="scss">
	@import '~scss/import.scss';
	.mo-tabs {
		@include clearFix;
		.mo-tabs__nav {
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
			.mo-tab__item{
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
		.mo-tabs--contents {
			position: relative;
			overflow: hidden;
			.mo-tabs--body {
				display: none;
			}
		}
	}
</style>
<script>
	import MoTabItems from './tab-items'
	export default {
		name : 'MoTabs',
		components : {
			MoTabItems
		},
		props : {
			value : {},
			activeTab : String,
			isNav : Boolean 
		},
		data () {
			return {
				currentTab : this.value || this.activeTab,
				tabs : []
			}
		},
		watch : {
			value (val) {
				this.setCurrentTab(val)
			},
			activeTab (val) {
				this.setCurrentTab(val)
			}
		},
		methods : {
			tabClickEvent (name) {
				this.setCurrentTab(name)
				this.$emit('change', name)
			},
			setCurrentTab (name) {
				this.currentTab = name
				this.$emit('input', name)
			},
			add (tab) {
				this.tabs.push(tab)
			}
		},
		render (h) {

			if (this.isNav) {
				let nav = h('ul', {
					'class' : 'mo-tabs__nav'
				}, this.$slots.default)
				
				return h('div', {
					'class' : 'mo-tabs',
				}, [nav])
			}

			let navs = h(MoTabItems, {
				props : {
					tabs : this.tabs,
					currentTab : this.currentTab
				},
				on : {
					click : this.tabClickEvent
				}
			})

			let body = h ('div', {
				'class' : 'mo-tabs__contents'
			}, this.$slots.default)


			return h('div', {
				'class' : 'mo-tabs',
			}, [ navs, body ])
		}
	}
</script>