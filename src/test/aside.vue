<template>
	<aside class="app-aside">
		<nav class="app-aside__nav">
			<ul>
				<drop-menu>
					<template slot="target">开始</template>
					<template slot="menu">
						<router-link to="/install" tag="li">
							<a>Install</a>
						</router-link>
					</template>
				</drop-menu>
				<drop-menu>
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
					</template>
				</drop-menu>
			</ul>
		</nav>
	</aside>
</template>

<style lang="scss">
	@import '~scss/import.scss';
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

<script>
import DropMenu from './dropmenu'
	export default {
		name : 'AppAside',
		components : {
			DropMenu
		}
	}
</script>