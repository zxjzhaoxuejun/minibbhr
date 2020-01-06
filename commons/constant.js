//请求返回code的值，统一用字符串处理
export const CODE_VAL = "0";

//环境配置
export const NODE_ENV = "TEST";
const envUrl = (() => {
  let baseUrl;
  switch (NODE_ENV) {
    case "DEV":
      baseUrl = "https://api.baobaohr.cn";
      break;
    case "TEST":
      baseUrl = "https://api.baobaohr.cn";
      break;
    case "UAT":
      baseUrl = "http://120.77.124.173";
      break;

    case "ONLINE":
      baseUrl = "https://api.baobaohr.cn";
      break;

    default:
      break;
  }
  return { baseUrl};
})();
export const { baseUrl} = envUrl;

//判断是否登录控制
export const isLogin=(hasLogin,forcedLogin)=>{
	if (!hasLogin) {
	    uni.showModal({
	        title: '未登录',
	        content: '您未登录，需要登录后才能继续',
	        /**
	         * 如果需要强制登录，不显示取消按钮
	         */
	        showCancel: !forcedLogin,
	        success: (res) => {
	            if (res.confirm) {
					/**
					 * 如果需要强制登录，使用reLaunch方式
					 */
	                if (forcedLogin) {
	                    uni.reLaunch({
	                        url: '../login/login'
	                    });
	                } else {
	                    uni.navigateTo({
	                        url: '../login/login'
	                    });
	                }
	            }
	        }
	    });
	}
}

/**
 * 控制小数位数
 * @param {数值} val
 * @param {保留小数位} num
 */
export const toDecimal = (val, num) => {
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
};


/**
 * 格式化金额：每三位数字之间添加","
 * @param {数值} number
 */
export const convert = number => {
  if (!number) {
    return;
  }
  number = number.toString();
  if (number.length <= 3) {
    return number === "" ? "0" : number;
  }

  let mod = number.length % 3;
  let output = mod === 0 ? "" : number.substring(0, mod);

  for (let i = 0; i < Math.floor(number.length / 3); i++) {
    if (mod === 0 && i === 0) {
      output += number.substring(mod + 3 * i, mod + 3 * i + 3);
    } else {
      output += "," + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
  }

  return output;
};