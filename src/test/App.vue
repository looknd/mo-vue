<template>
	<div class="app">
		<app-aside></app-aside>
		<main class="app-main">
			<div class="app-wrapper">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>
<style lang="scss">
	@import '~scss/base.scss';
	.app {
		> .app-aside {
			width: 240px;
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			overflow-y: auto;
			box-shadow: 0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.12);
		}
		> .app-main {
			padding-left: 240px;
			min-height: 100vh;
			@include clearFix;
		}
		.app-wrapper {
			margin: 1rem 2rem;
		}
	}
	.app-main {
		.app-title {
			margin-bottom: 1rem;
			padding-bottom: 1rem;
			border-bottom: 1px solid #ccc;
			font-size: 1.5rem;
			font-weight: bold;
		}
		.demo-title {
			margin: 1rem 0;
		}
		.demo-panel {
			margin-top: 1rem;
			&:nth-of-type(1) {
				margin-top: 0;
			}
		}
	}
</style>
<script>
	import AppAside from './aside'
	export default {
		name : 'App',
		components : {
			AppAside
		}
	}
</script>