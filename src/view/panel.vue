<template>
	<section class="demo-panel">
		<header class="demo-panel__header">
			<slot name="title"></slot>
		</header>
		<main class="demo-panel__body">
			<slot name="body"></slot>
		</main>
	</section>
</template>

<style lang="scss">
 @import '~scss/import.scss';
	.demo-panel {
		margin-top: 2rem;
    box-shadow: $box-shadow;
    .demo-panel__header {
    	padding: 1rem;
    	border-bottom: 1px solid $color-border;
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
</style>