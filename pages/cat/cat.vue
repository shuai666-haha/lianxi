<template>
	<view>
		测试路由
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad() {
			// 接收参数
			console.log(this.$mp.query)
		}
	}
</script>

<style>

</style>
