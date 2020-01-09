<template>
	<view class="calculator-mode">
		<view class="content-top">
			<view class="list-mode">
				<view class="list-name">参保城市</view>
				<view class="list-select">
					<picker :value="cityIndex" data-name="city" :range="city" range-key="city_shortname" class="picker" @change="bindSelectChange">
						<view class="uni-input">{{ city[cityIndex].city_shortname }}</view>
						<uni-icons type="arrowdown" size="20" color="#999"></uni-icons>
					</picker>
				</view>
			</view>

			<view class="list-mode">
				<view class="list-name">选择户籍</view>
				<view class="list-select">
					<picker :value="censusIndex" data-name="census" :range="census" range-key="name" class="picker" @change="bindSelectChange">
						<view class="uni-input">{{ census[censusIndex].name }}</view>
						<uni-icons type="arrowdown" size="20" color="#999"></uni-icons>
					</picker>
				</view>
			</view>

			<view class="list-mode">
				<view class="list-name">参保类型</view>
				<view class="list-select">
					<picker :value="protectIndex" data-name="protect" :range="protect" range-key="name" class="picker" @change="bindSelectChange">
						<view class="uni-input">{{ protect[protectIndex].name }}</view>
						<uni-icons type="arrowdown" size="20" color="#999"></uni-icons>
					</picker>
				</view>
			</view>

			<view class="list-mode">
				<view class="list-name">社保方案</view>
				<view class="list-select">
					<picker :value="schemeIndex" data-name="scheme" :range="scheme" range-key="type_name" class="picker" @change="bindSelectChange">
						<view class="uni-input" @tap="binkClick">{{ scheme[schemeIndex].type_name }}</view>
						<uni-icons type="arrowdown" size="20" color="#999" @tap="binkClick"></uni-icons>
					</picker>
				</view>
			</view>

			<view class="list-mode">
				<view class="list-name">社保基数</view>
				<view class="list-input">
					<input type="number" v-model="baseValue" class="input" :placeholder="getDefaultValue" @change="checkInputChange" />
					<checkbox-group v-if="getDefaultValue != '请输入'" class="check-box" @change="checkboxChange">
						<label>
							<checkbox value="1" :checked="isBase" style="transform:scale(0.6)" />
							最低基数
						</label>
					</checkbox-group>
				</view>
			</view>

			<view class="uni-padding-wrap uni-common-mt"><button type="primary" @tap="handleSubmit">开始计算</button></view>
		</view>

		<view v-if="resultList">
			<view class="res-title">计算结果</view>
			<view class="content-top">
				<view class="list-mode">
					<view class="list-name">参保城市：</view>
					<view class="list-input"><text>{{this.city[this.cityIndex].city_shortname}}</text></view>
				</view>
				<view class="list-mode">
					<view class="list-name">参保类型：</view>
					<view class="list-input"><text>{{this.protect[this.protectIndex].name}}</text></view>
				</view>
				<view class="list-mode">
					<view class="list-name">社保方案：</view>
					<view class="list-input"><text>{{this.scheme[this.schemeIndex].type_name}}</text></view>
				</view>
				<view class="list-mode">
					<view class="list-name">社保基数：</view>
					<view class="list-input"><text>{{this.baseValue}}</text></view>
				</view>
			</view>
			
			<view class="res-list res-bg">
				<text class="res-list-item">类型</text>
				<text class="res-list-item">个人(%)</text>
				<text class="res-list-item">个人缴纳</text>
				<text class="res-list-item">企业(%)</text>
				<text class="res-list-item">企业缴纳</text>
			</view>
			
			<view class="res-list" v-if="isType">
				<text class="res-list-item">公积金</text>
				<text class="res-list-item">{{toDecimal(resultList.amount_fund_staff_rate*100,2)}}%</text>
				<text class="res-list-item">{{toDecimal(resultList.amount_fund_staff,2)}}</text>
				<text class="res-list-item">{{toDecimal(resultList.amount_fund_ent_rate*100,2)}}%</text>
				<text class="res-list-item">{{toDecimal(resultList.amount_fund_ent,2)}}</text>
			</view>
			
			<view v-if="!isType">
				<view class="res-list">
					<text class="res-list-item">养老保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_social_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_social_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_social_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_social_ent}}</text>
				</view>
				
				<view class="res-list">
					<text class="res-list-item">失业保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_lose_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_lose_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_lose_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_lose_ent}}</text>
				</view>
				
				<view class="res-list">
					<text class="res-list-item">工伤保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_injury_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_injury_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_injury_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_injury_ent}}</text>
				</view>
				
				<view class="res-list">
					<text class="res-list-item">生育保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_born_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_born_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_born_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_born_ent}}</text>
				</view>
				
				<view class="res-list">
					<text class="res-list-item">医疗保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_medical_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_medical_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_medical_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_medical_ent}}</text>
				</view>
				
				<view class="res-list">
					<text class="res-list-item">残保险</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_disability_staff_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_disability_staff}}</text>
					<text class="res-list-item">{{toDecimal(resultList.amount_disability_ent_rate*100,2)}}%</text>
					<text class="res-list-item">{{resultList.amount_disability_ent}}</text>
				</view>
			</view>
			
			<view class="res-list">
				<text class="res-list-item y-bg">合计：</text>
				<text class="res-list-item"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item y-bg">￥{{resultList.ent_staff_amount}}</text>
			</view>
			
			<view class="res-list">
				<text class="res-list-item y-bg"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item">个人缴纳：</text>
				<text class="res-list-item">￥{{resultList.staff_amount}}</text>
			</view>
			
			<view class="res-list">
				<text class="res-list-item y-bg"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item"></text>
				<text class="res-list-item">企业缴纳：</text>
				<text class="res-list-item">￥{{resultList.ent_amount}}</text>
			</view>
				
		</view>
	</view>
</template>

<script>
import { uniIcons } from '@dcloudio/uni-ui';
import { getPersonCity, getSocialProject,getSocialCalc } from '../../commons/api.js';
export default {
	data() {
		return {
			cityIndex: 0,
			city: [{ city_id: 1, city_shortname: '请选择', base_begin: '', base_end: '' }],
			censusIndex: 0,
			census: [{ id: 0, name: '请选择' }, { id: 1, name: '本地城镇' }, { id: 2, name: '本地农村' }, { id: 3, name: '外地城镇' }, { id: 4, name: '外地农村' }],
			protectIndex: 0,
			protect: [{ id: 0, name: '请选择' }, { id: 1, name: '社保' }, { id: 2, name: '公积金' }],
			schemeIndex: 0,
			scheme: [{ id: '0', type_name: '请选择', base_begin: '', base_end: '', house_type: '' }],
			isBase: false,
			baseValue: '',
			resultList:null,
			isType:false
		};
	},
	components: { uniIcons },
	computed: {
		getDefaultValue() {
			if (this.city[this.cityIndex].base_begin) {
				return this.city[this.cityIndex].base_begin + '-' + this.city[this.cityIndex].base_end;
			} else {
				return '请输入';
			}
		}
	},
	methods: {
		toDecimal(val, num){
		  let f = parseFloat(val);
		  if (isNaN(f)) {
		    return;
		  }
		  val = val.toString();
		  let newStr = val.split(".");
		  if (newStr[0] !== "0") {
		    let reg = new RegExp("([0]*)([1-9]+[0-9]+)", "g");
		    newStr[0] = newStr[0].replace(reg, "$2");
		  }
		  if (newStr.length > 1) {
		    val = newStr[0].substr(0, 9) + "." + newStr[1].substr(0, num);
		  } else {
		    val = newStr[0].substr(0, 9) + ".00";
		  }
		  f = val;
		  return f;
		},
		binkClick() {
			if (!this.cityIndex) {
				uni.showToast({
					title: '请选择参保城市！',
					icon: 'none'
				});
				return;
			}

			if (!this.censusIndex) {
				uni.showToast({
					title: '请选择参保户籍！',
					icon: 'none'
				});
				return;
			}

			if (!this.protectIndex) {
				uni.showToast({
					title: '请选择参保类型！',
					icon: 'none'
				});
				return;
			}
			this.initFa();
		},
		initFa(){
			this.schemeIndex=0;
			this.resultList=null;
			if(this.cityIndex&&this.protectIndex&&this.censusIndex){
				getSocialProject(this.census[this.censusIndex].id, this.protect[this.protectIndex].id, this.city[this.cityIndex].city_id).then(res => {
					if (res.data.status == '1') {
						this.scheme =[{ id: '0', type_name: '请选择', base_begin: '', base_end: '', house_type: '' }];
						this.scheme = [...this.scheme,...res.data.result];
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			}else{
				this.scheme =[{ id: '0', type_name: '请选择', base_begin: '', base_end: '', house_type: '' }];
			}
		},
		bindSelectChange(e) {
			// console.log('picker发送选择改变，携带值为', e);
			const obj = e.currentTarget.dataset.name;
			switch (obj) {
				case 'city':
					console.log(e.target.value);
					this.cityIndex = e.target.value;
					this.initFa();
					break;
				case 'protect':
					this.protectIndex = e.target.value;
					this.initFa();
					break;
				case 'census':
					this.censusIndex = e.target.value;
					this.initFa();
					break;
				case 'scheme':
					this.schemeIndex = e.target.value;
					break;
				default:
					break;
			}
		},
		handleSubmit() {
			//开始计算
			if (!this.cityIndex) {
				uni.showToast({
					title: '请选择参保城市！',
					icon: 'none'
				});
				return;
			}

			if (!this.censusIndex) {
				uni.showToast({
					title: '请选择参保户籍！',
					icon: 'none'
				});
				return;
			}

			if (!this.protectIndex) {
				uni.showToast({
					title: '请选择参保类型！',
					icon: 'none'
				});
				return;
			}

			if (!this.schemeIndex) {
				uni.showToast({
					title: '请选择参保方案！',
					icon: 'none'
				});
				return;
			}

			if (!this.baseValue) {
				uni.showToast({
					title: '请输入参保基数！',
					icon: 'none'
				});
				return;
			}
			getSocialCalc(this.census[this.censusIndex].id, this.protect[this.protectIndex].id, this.city[this.cityIndex].city_id,this.scheme[this.schemeIndex].id,this.baseValue).then(res=>{
				if (res.data.status == '1') {
					if(this.protectIndex==2){
						this.isType=true;
					}else if(this.protectIndex==1){
						this.isType=false;
					}
					this.resultList =res.data.result;
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					});
				}
			})
			
		},
		checkboxChange: function(e) {
			this.resultList=null;
			if (e.detail.value == '1') {
				this.isBase = true;
				this.baseValue = this.city[this.cityIndex].base_begin;
			} else {
				this.isBase = false;
				this.baseValue = '';
			}
		},
		checkInputChange(){
			this.resultList=null;
			this.isBase = false;
		}
	},
	onLoad() {
		getPersonCity().then(res => {
			if (res.data.status == '1') {
				this.city = [...this.city, ...res.data.result];
			} else {
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				});
			}
		});
	}
};
</script>

<style lang="scss">
.calculator-mode {
	padding: 20upx 0;
	font-size: 14px;

	.content-top {
		padding: 0 20upx;
	}

	.res-list {
		display: flex;
		align-items: center;
		padding: 20upx 0;
		font-size: 13px;
		border-bottom: 1px #dedede solid;

		.res-list-item {
			display: inline-block;
			width: 20%;
			text-align: center;
		}

		.y-bg {
			color: #ff6600;
			font-size: 15px;
		}
	}

	.res-bg {
		background: #f8f8f8;
	}

	.res-title {
		margin-top: 30px;
		padding: 30upx 20upx;
		background: #f8f8f8;
		font-size: 16px;
	}

	.list-mode {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 24upx 0;
		border-bottom: 1px #dedede solid;

		.list-name {
			width: 30%;
			color: #323232;
		}

		.list-select,
		.list-input {
			position: relative;
			display: flex;
			justify-content: space-between;
			width: 70%;

			.picker {
				width: 100%;
			}

			.check-box {
				width: 50%;
			}
			
			.input{
				width: 50%;
			}
		}

		.uni-icons {
			position: absolute;
			right: 0;
			top: 0;
		}
	}

	.uni-common-mt {
		margin: 40upx auto 0 auto;
		width: 60%;
	}
}
</style>
