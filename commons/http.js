import axios from 'axios'

// #ifdef H5 
export const httpUrl = (options) => {
	let prams = {
		type: 'GET',
		url: '',
		data: '',
		isLoading: true,
		withCredentials: false,
		header: {
			'Content-Type': 'application/json;charset=utf-8',
		}
	};
	const {
		data,
		url,
		type,
		isLoading,
		header
	} = { ...prams,
		...options
	};
	return new Promise((resolve, reject) => {
		if (isLoading) {
			uni.showLoading({
				title: '请稍等...',
				//是否显示透明蒙层
				mask: true
			})
		}
		axios({
				url,
				data,
				method: type,
				header,
				withCredentials: false,
			}).then((res) => {
				if (isLoading) {
					uni.hideLoading();
				}
				resolve(res)
			}).catch(error => {
				// if (isLoading) {
				// 	uni.hideLoading();
				// }
				reject(error.response.data);
			})
	})
}
// #endif 

// #ifdef APP-PLUS
export const httpUrl = (options) => {
	let prams = {
		type: 'GET',
		url: '',
		data: '',
		isLoading: true,
		withCredentials: false,
		header: {
			'Content-Type': 'application/json;charset=utf-8',
		}
	};
	const {
		data,
		url,
		type,
		isLoading,
		header
	} = { ...prams,
		...options
	};
	return new Promise((resolve, reject) => {
		if (isLoading) {
			uni.showLoading({
				title: '请稍等...',
				//是否显示透明蒙层
				mask: true
			})
		}
		uni.request({
			method: type,
			url,
			data,
			header,
			withCredentials: false,
			crossDomain: true,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err);
				// let code=err.data.code;
				// switch(code){
				// 	case 1000:
				// 		break;
				// 	default:
				// 		break;
				// }
			},
			complete: () => {
				if (isLoading) {
					uni.hideLoading();
				}
			}
		})
	})
}
// #endif
