<template>
	<view>
		<image src="../../static/home.png" mode=""></image>
		<image src="/static/home.png" mode=""></image>
		<image src="@/static/home.png" mode=""></image>
		<!-- 编译器判断--H5显示灰色按钮，小程序显示红色按 -->
		<!-- #ifdef H5 -->
		<button type="default">按钮</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<button type="warn">按钮</button>
		<!-- #endif -->
		<view class="one" @click="show">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			show() {
				// 编译判断js
				// #ifdef H5
				console.log('H5端')
				// #endif
				// #ifdef MP-WEIXIN
				console.log('小程序端')
				// #endif
			}
		}
	}
</script>

<style>
	/* 静态资源引入 */
	/* @import url("/common/common.css"); */

	@import '../../common/common.css';

	.one {
		width: 300rpx;
		height: 300rpx;
		/* 编译判断css--H5端显示橙色-小程序端显示粉色 */
		/* #ifdef H5 */
		background-color: orange;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		background-color: pink;
		/* #endif */
	}
</style>
