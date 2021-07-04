<template>
	<view>
		兄弟组件2
		<button type="default" @click="toclick">向兄弟组件一传值按钮</button>
	</view>
</template>

<script>
	export default {
		name: "boxs2",
		data() {
			return {

			};
		},
		methods: {
			toclick() {
				this.$bus.$emit('top', '兄弟之间传值')
			}
		}
	}
</script>

<style>

</style>
