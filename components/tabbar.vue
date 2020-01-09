<template>
	<view class="os-tab">
		<block v-for="(item, index) in tabList" :key="index">
			<view class="os-navigator" :class="pageIndex == index ? 'on' : ''" @tap="switchTab(item.pagePath)">
				<view class="icon">
					<image :src="item.iconPath" class="tab-icon" v-if="pageIndex != index"></image>
					<image :src="item.selectPath" class="tab-icon" v-if="pageIndex == index"></image>
				</view>
				<view class="text" :style="pageIndex == index ? { color:selectedColor } : { color:color }">{{ item.name }}</view>
			</view>
		</block>
	</view>
</template>

<script>
import { uniIcons} from '@dcloudio/uni-ui';

export default {
	props: {
		currentIndex: { type: [Number, String], default: 0 },
		backgroundColor: { type: String, default: '#fbfbfb' },
		color: { type:String, default: '#999' },
		selectedColor: { type: String, default: '#0faeff' },
		badge:{type: [Number, String], default: 1 }
	},
	components: { uniIcons},
	data() {
		return {
			tabList: [
				{
					pagePath: '../index/index',
					name: '首页',
					iconPath: '../../static/home.png',
					selectPath:'../../static/home_c.png'
				},
				{
					pagePath: '../buy/buy',
					name:'缴费',
					iconPath: '../../static/pay.png',
					selectPath:'../../static/pay_c.png'
				},
				{
					pagePath: '../user/user',
					name: '我的',
					iconPath: '../../static/user.png',
					selectPath:'../../static/user_c.png'
				}	
			],
			pageIndex:this.currentIndex
		};
	},
	methods: {
		switchTab(path) {
			uni.navigateTo({
			    url: path
			});
		}
	}
};
</script>

<style lang="scss">
	@import '~@/uni.scss';
	.os-tab{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content:space-around;
		align-items: center;
		padding: 6upx 0;
		background: #fff;
		z-index: 100;
		
		.text{
			font-size: $uni-font-size-base;
			line-height: 18px;
		}
		
		.icon{
			position: relative;
			line-height: 18px;
			text-align: center;
			
			.uni-badge{
				position: absolute;
				top: 0;
				right: -6px;
				width: 14px;
				height: 14px;
				line-height: 14px;
				text-align: center;
				display: inline-block;
				border-radius: 50%;
				background: red;
				color: #fff;
				font-size: 10px;
			}
		}
		
		.tab-icon{
			width: 22px;
			height: 22px;
		}
		
	}
</style>
