<template>
	<li class="dropmenu" :class="{'dropmenu-open' : visible}">
		<a class="dropmenu-target" @click.stop="visible = !visible">
			<slot name="target"></slot>
		</a>
		<ul class="dropmenu-menu">
			<slot name="menu"></slot>
		</ul>
	</li>
</template>
<style lang="scss">
	.dropmenu {
		position: relative;
		a {
			display: block;
			line-height: 24px;
			padding: 8px 16px;
			text-decoration: none;
		}
		> .dropmenu-target {
			font-size: 1rem;
			position: relative;
			color: #333;
		}
		> .dropmenu-menu {
			list-style-type: none;
			padding: 0;
			margin: 0;
			width: 100%;
			display: none;
			li {
				a {
					font-size: 14px;
					color: #666;
					text-decoration: none;
					padding-left: 2rem;
				}
			}
		}
		&.dropmenu-open {
			> .dropmenu-menu {
				display: block;
			}
		}
	}
</style>
<script>
	export default {
		name : 'app-menu',
		props : {
			value : {
				type : Boolean,
				default : true
			}
		},
		data () {
			return {
				visible : this.value
			}
		}
	}
</script>