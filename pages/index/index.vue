<template>
	<view>
		<boxs></boxs>
		<boxstwo></boxstwo>
		<button type="default" @click="toSetsorg">本地存储</button>
		<button type="default" @click="toGetsorg">获取本地存储</button>
		<navigator url="../cat/cat">
			<button type="default">跳转</button>
		</navigator>
		<button type="default" @click="tocs">跳转传参测试</button>
	</view>
</template>

<script>
	import url from '../../utils/config.js'
	import boxs from '../../components/boxs/boxs.vue'
	import boxstwo from '../../components/boxstwo/boxstwo.vue'
	export default {
		components: {
			boxs,
			boxstwo
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(url)
			// 获取全局变量
			let app = getApp()
			// 也可以更改值
			app.globalData.userInfo.username = "root"
			console.log(app.globalData, 'globalData')
			// 查看开发环境
			console.log(process.env.NODE_ENV)
		},
		onShow() {
			// 运行期判断
			// 获取系统
			let getinfo = uni.getSystemInfoSync().platform
			switch (getinfo) {
				case 'ios':
					console.log('ios系统')
					break;
				case 'android':
					console.log('android系统')
					break;
				case 'devtools':
					console.log('小程序端')
					break;
				default:
					console.log('其他平台')
			}
		},
		methods: {
			// 设置缓存数据
			toSetsorg() {
				// 异步
				// uni.setStorage({
				// 	key: 'hcinfo',
				// 	data: '测试缓存数据'
				// })
				// 同步
				uni.setStorageSync("hcSyncinfo", '设置同步')
			},
			// 获取缓存数据
			toGetsorg() {
				// 异步
				// uni.getStorage({
				// 	key: 'hcinfo',
				// 	success(res) {
				// 		console.log(res)
				// 	}
				// })
				// 同步
				let rst = uni.getStorageSync('hcSyncinfo')
				console.log(rst)
			},
			tocs() {
				uni.navigateTo({
					url: "../cat/cat?username=张三&pwd=123"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
