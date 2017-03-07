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
			box-shadow: 0 1px 6px rgba(#000,.12), 0 1px 4px rgba(#000,.12);
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
			margin: 2rem 0 1rem 0;
		}
		.demo-panel {
			margin-top: 2rem;
			box-shadow: 0 1px 6px rgba(#000,.12), 0 1px 4px rgba(#000,.12);
			&:nth-of-type(1) {
				margin-top: 0;
			}
			.demo-panel__header {
				padding: 1rem;
				border-bottom: 1px solid #ccc;
				.title {
					margin: 0;
					padding-left: 1rem;
					border-left: 4px solid $color-primary;
				}
			}
			.demo-panel__body {
				padding: 1rem;
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