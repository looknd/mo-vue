<template>
	<ul class="icon-list">
		<li class="icon-item" v-for="icon in icons">
			<mo-icon :value="icon"/>
			<small>{{icon}}</small>
		</li>
	</ul>
</template>
<script>
	import MoIcon from 'mo/icon'
	export default {
		components : {
			MoIcon
		},
		data () {
			return {
				icons : 'clock_fill,clock,warning_fill,warning,help_fill,help,add_fill,add,remove_fill,remove,close_fill,close,check,plus,minus,error,right,arrow_left,arrow_right,arrow_up,arrow_down,first_page,last_page,unfold_less,unfold_more,skip_prev,skip_next,swap_horiz,swap_vert,fast_forward,fast_rewind,apps,view_comfy,reorder,menu,more_horiz,more_vert,stop,pause,play,desktop,laptop,mobile,tablet,email_fill,email,thumb_down,thumb_up,favorite_fill,favorite,star_fill,star,bill_fill,bill,turned_fill,turned,visibility,visibility_off,cloud_upload,cloud_download,person,people,person_add,group_add,speaker,speaker_off,sms,chat_fill,chat,question,edit,delete,quote,cart_add,cart,date,restore,home,settings,link,share,search,zoom_in,zoom_out,power,palette,colorize,room,print,lock_fill,lock,verified,send,queue,library_books,description,receipt,flag,public,pie_chart,timeline,equalizer,tune,attachment,refresh,replay,telephone,camera,code,coding,folder_fill,folder,fullscreen,fullscreen_exit,headset,voice,photo_camera,video,image,import_contacts,layers,lightbulb,tag,undo,redo,repeat,reply,reply_all,storage,weekend'.split(',')
			}
		}
	}
</script>
<style lang="scss">
	@import '~scss/import'; 
	.icon-list {
		display: flex;
		flex-flow: row wrap;
		margin: 2rem; 
		padding: 1px 0 0 1px;
		list-style: none;
		.icon-item {
			width: 5rem;
			height: 5rem;
			border: 1px solid $color-border;
			display: flex;
			flex-flow: column;
			align-items: center;
			justify-content : center;
			margin-top: -1px;
			margin-left: -1px;
			position: relative; 
			background-color: #fff;
			
			small {
				margin-top: .5rem;
			}
			&:hover {
				transition: all .12s;
				z-index: 1;
				transform: scale(1.5);
				background-color: $color-primary;
				border-color: $color-primary;
				color: #fff;
				box-shadow: $box-shadow;
			}
		}
	}
</style>