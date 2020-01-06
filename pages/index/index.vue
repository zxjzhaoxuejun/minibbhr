<template>
	<view class="content">
		<!-- <bw-img-upload style="width:100%" ></bw-img-upload> -->
		<bw-swiper :swiperList="swiperList" style="width:100%"></bw-swiper>
		<view class="girg-list">
			<view class="girg-list-item m-b girg-bg">社保缴纳</view>
			<view class="girg-list-item m-b girg-bg">申请补缴</view>
		</view>
		<view class="girg-list">
			<view class="girg-list-aitem m-b">
				<image src="../../static/city.png" alt="city" class="girg-icon"></image>
				<view>参保城市</view>
			</view>
			<navigator url="../calculator/calculator" class="girg-list-aitem m-b">
				<image src="../../static/calculator.png" class="girg-icon"></image>
				<view>社保计算器</view>
			</navigator>
			<view class="girg-list-aitem m-b">
				<image src="../../static/customer.png" class="girg-icon"></image>
				<view>在线客服</view>
			</view>
		</view>
		<view class="gap"><!-- 间隙 --></view>
		<view class="list-head">
			自助服务
		</view>
		<view class="girg-list no-pad">
			<view class="girg-list-bitem">
				<image src="../../static/read.png" alt="city" class="girg-icon"></image>
				<view>买前必读</view>
			</view>
			<view class="girg-list-bitem">
				<image src="../../static/fw.png" class="girg-icon"></image>
				<view>服务费用</view>
			</view>
		</view>
		
		<view class="girg-list no-pad">
			<view class="girg-list-bitem">
				<image src="../../static/zn.png" alt="city" class="girg-icon"></image>
				<view>购买指南</view>
			</view>
			<view class="girg-list-bitem">
				<image src="../../static/eq.png" class="girg-icon"></image>
				<view>常见问题</view>
			</view>
		</view>
		
		<view class="tel">
			<text>平台热线：</text>
			<text>0755-88886666 18520820070</text>
		</view>
		
		<tab-bar :currentIndex="currentTabIndex" backgroundColor="#fbfbfb" color="#999" selectedColor="#0faeff"></tab-bar>
	</view>
</template>

<script>
import bwSwiper from '@/components/bw-swiper.vue';

export default {
	components: {
		bwSwiper,
	},
	data() {
		return {
			currentTabIndex:0,
			swiperList: [
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
					text: 'www.baidu.com'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
					text: 'www.baidu.com'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
					text: 'www.baidu.com'
				}
			]
		};
	},
	computed: {
		
	},
	onLoad() {},
	methods: {
		swiperClick: function(index) {
			console.log(this.data[index].link);
		}
	}
};
</script>

<style lang="scss">
.content {
	width: 100%;
	height: auto;
	
	.gap{
		background: #f8f8f8;
		width: 100%;
		height: 15px;
	}
	
	.tel{
		background: #f8f8f8;
		padding: 20px 0;
		text-align: center;
		font-size: 12px;
		color: #999999;
		margin-bottom: 50px;
	}
	
	.list-head{
		padding: 15px 20px;
		color: #323232;
		font-size: 14px;
		box-shadow: 0 2px 2px 0 rgba(250,230,255,0.35);
		
		&:before{
			display: inline-block;
			content: '';
			width: 2px;
			height: 14px;
			border-radius: 4px;
			background: #007AFF;
			margin-right: 4px;
			vertical-align: middle;
		}
	}
	
	.girg-list{
		display: flex;
		justify-content:space-around;
		padding: 20rpx;
		
		.girg-list-item{
			background: #ffffff;
			color: #FFFFFF;
			font-size: 12px;
			text-align: center;
			padding: 30rpx 20rpx;
			flex-grow: 1;
			box-shadow: 0 4px 4px 0 rgba(0,122,255,0.35);
			cursor: pointer;
		}
		
		.girg-bg{
			background: #007AFF;
		}
		
		.girg-list-aitem{
			color: #323232;
			font-size: 12px;
			text-align: center;
			padding: 30rpx 20rpx;
			flex-grow: 1;
			cursor: pointer;
			
			.girg-icon{
				width: 28px;
				height: 28px;
			}
		}
		
		.girg-list-bitem{
			display: flex;
			align-items: center;
			justify-content: center;
			color: #323232;
			font-size: 12px;
			text-align: center;
			padding: 30rpx 20rpx;
			flex-grow: 1;
			cursor: pointer;
			
			.girg-icon{
				width: 20px;
				height: 20px;
				margin-right: 6px;
			}
		}
		
		.girg-list-bitem:nth-child(even){
			border-left: 1px #dedede solid;
		}
		
		.m-b{
			margin:0 20rpx;
		}
	}
	
	.no-pad{
		padding: 0;
		border-bottom: 1px #dedede solid;
	}
	
	.no-pad:nth-child(odd){
		border-bottom: none;
	}
}

</style>
