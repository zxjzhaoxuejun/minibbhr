<template>
	<view class="buy-mode">
		<image src="../../static/buy_img.jpg" alt="banner" class="buy-banner"></image>
		<view class="buy-con">
			<view class="title-list">
				<text class="title">社保</text>
				<text class="title-tag">季付</text>
				<text class="title-tag blue-border">半年付</text>
				<image src="../../static/yh_icon.png" class="title-icon"></image>
			</view>
			<view class="price">
				<text>服务费：</text>
				<text class="blod">50元/人/月</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.buy-mode{
	width: 100%;
	font-size: 14px;
	
	.buy-banner{
		width: 100%;
		height: 250upx;
	}
	
	.buy-con{
		padding: 20upx;
	}
	.title-list{
		position: relative;
		display: flex;
		align-items:center;
		
		.title-tag{
			display: inline-block;
			padding: 2px 6px;
			border: 1upx #ff6600 solid;
			border-radius: 4px;
			margin-left: 12px;
			color: #ff6600;
		}
		
		.blue-border{
			border: 1upx #197fee solid;
			color: #197fee;
		}
		
		.title-icon{
			position: absolute;
			right: 0;
			display: inline-block;
			width: 32px;
			height: 32px;
		}
	}
	
	.price{
		color: #ff6600;
		padding: 20upx 0;
	}
	
	.blod{
		font-weight: bold;
	}
}
</style>
