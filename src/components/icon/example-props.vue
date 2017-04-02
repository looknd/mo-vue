<template>
	<div>
		颜色：
		<p>
			<mo-icon value="apps" color="#CC0066"/>
			<mo-icon value="reorder" color="#CC3300"/>
			<mo-icon value="desktop" color="#3366FF"/>
			<mo-icon value="home" color="#339933"/>
		</p>
		尺寸：
		<p>
			<mo-icon value="home" size="16px"/>
			<mo-icon value="home" size="24px"/>
			<mo-icon value="home" size="32px"/>
			<mo-icon value="home" size="48px"/>
			<mo-icon value="home" size="64px"/>
		</p>
	</div>
</template>

<script>
	import MoIcon from 'mo/icon'
	export default {
		components : {
			MoIcon
		},
	}	
</script>