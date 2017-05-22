<template>
	<div>
		<a class="sidenav-btn" @click="handleShowNav">a href</a>
	</div>
</template>

<script>
	export default {
        data () {
            return {
            	isShowNav: false,
            }
        },
        props:['data'],
		mounted() {
			
		},
		watch: {
			'isShowNav': function(newVal, oldVal) {
				if(newVal !== '') {
					this.$emit('change', newVal);//触发事件给父组件 @change="handleChildtoParent"
					// 父组件写法
					// handleShowNav(flag) {
					// 	if(flag !== '') this.isShowNav = flag;
					// }
				}
			}
		},
		methods: {
			handleShowNav() {
				this.isShowNav = !this.isShowNav;
			}
		}
	}
</script>