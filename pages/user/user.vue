<template>
    <view class="page">
		<view class="logo" @click="goLogin" :hover-class="!hasLogin ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{hasLogin ? userInfo.cname : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!hasLogin">
					<uni-icons type="arrowright" size="20" color="#fff"></uni-icons>
				</text>
			</view>
		</view>
		
		<uni-list class="center-list">
			<navigator class="grid-item" url="../details/index" hover-class="navigator-hover">
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="帐号管理" />
			</navigator>
			<navigator class="grid-item" url="../details/index" hover-class="navigator-hover">
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon2" title="新消息通知" />
			</navigator>
		</uni-list>
		<uni-list class="center-list">
			<navigator class="grid-item" url="../details/index" hover-class="navigator-hover">
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon3" title="帮助与反馈" />
			</navigator>
			<navigator class="grid-item" url="../details/index" hover-class="navigator-hover">
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon4" title="关于我们" />
			</navigator>
		</uni-list>
		<uni-list class="center-list">
			<navigator class="grid-item" url="../details/index" hover-class="navigator-hover">
				<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon5" title="软件更新" />
			</navigator>
		</uni-list>
		
		
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
		<tab-bar :currentIndex="currentTabIndex"></tab-bar>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
	import {uniListItem,uniList,uniIcons,uniNavBar} from '@dcloudio/uni-ui';

    export default {
		data() {
			return {
				currentTabIndex:2,
				login: false,
				avatarUrl: "../../static/avatar.png",
				uerInfo: {},
				extraIcon1: {
					color: '#0faeff',
					size: '22',
					type: 'locked'
				},
				extraIcon2: {
					color: '#0faeff',
					size: '22',
					type: 'chatboxes'
				},
				extraIcon3: {
					color: '#0faeff',
					size: '22',
					type: 'help'
				},
				extraIcon4: {
					color: '#0faeff',
					size: '22',
					type: 'contact'
				},
				extraIcon5: {
					color: '#0faeff',
					size: '22',
					type: 'info'
				},
				extraIcon6: {
					color: '#4cd964',
					size: '22',
					type: 'chatboxes'
				}
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin','userInfo'])
        },
		components:{uniList,uniListItem,uniIcons,uniNavBar},
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() { 
                /**
                 * 如果需要强制登录跳转回登录页面
                 */		

            }
        }
    }
</script>

<style lang="scss">
	
	.page{
		background-color: #f8f8f8;
	}
	.logo {
		display: flex;
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #0faeff;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		
		.logo-img {
			width: 150upx;
			height: 150upx;
			border-radius: 150upx;
		}
		
		.logo-title {
			display: flex;
			height: 150upx;
			flex: 1;
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			margin-left: 20upx;
		}
		
		.uer-name {
			height: 60upx;
			line-height: 60upx;
			font-size: 38upx;
			color: #FFFFFF;
		}
		
		.go-login.navigat-arrow {
			font-size: 38upx;
			color: #FFFFFF;
		}
		
	}

	.logo-hover {
		opacity: 0.8;
	}

	
	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}
</style>
