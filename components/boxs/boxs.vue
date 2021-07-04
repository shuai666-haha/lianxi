<template>
	<view>
		兄弟组件接收兄弟组件二传的值：{{getMsg}}
	</view>
</template>

<script>
	export default {
		name: "boxs",
		data() {
			return {
				getMsg: ''
			};
		},
		mounted() {
			// 注册事件
			this.$bus.$on('top', param => {
				// console.log(param) //接收传递来的值
				this.getMsg = param
			})
		}
	}
</script>

<style>

</style>
