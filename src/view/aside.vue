<template>
	<div class="app-aside">
		<nav class="app-aside__nav">
			<ul>
				<app-menu>
					<template slot="target">开始</template>
					<template slot="menu">
						<router-link to="/install" tag="li">
							<a>Install</a>
						</router-link>
					</template>
				</app-menu>
				<app-menu>
					<template slot="target">组件</template>
					<template slot="menu">
						<router-link to="/paging" tag="li">
							<a>Paging</a>
						</router-link>
						<router-link to="/tabs" tag="li">
							<a>Tabs</a>
						</router-link>
						<router-link to="/layer" tag="li">
							<a>Layer</a>
						</router-link>
						<router-link to="/modal" tag="li">
							<a>Modal</a>
						</router-link>
						<router-link to="/input-number" tag="li">
							<a>InputNumber</a>
						</router-link>
					</template>
				</app-menu>
			</ul>
		</nav>
	</div>
</template>

<script>
	import AppMenu from './menu'
	export default {
		name : 'app-aside',
		components : {
			AppMenu
		}

	}
</script>

<style lang="scss">
	@import '~scss/import.scss';
	.app-aside {
		position: fixed;
		width: rem(240);
		top: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
		box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
	}
	.app-aside::-webkit-scrollbar {
		display: none!important;
		width: 0!important;
		height: 0!important;
		-webkit-appearance: none;
		opacity: 0!important
	}
	.app-aside__nav {
		user-select: none;
		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;
			li.active {
				background-color: $color-primary;
				a {
					color: #fff;
				}
			}
		}
	}
</style>