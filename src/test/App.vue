<template>
<div class="app">
	<aside class="app-aside">
		
	</aside>
	<main class="app-main">
	<router-view></router-view>
	</main>
</div>
</template>
<style lang="scss">
	@import '~scss/base.scss';
	.app {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}
</style>
<script>
	export default {
		name : 'App'
	}
</script>