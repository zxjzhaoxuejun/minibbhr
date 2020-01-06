import {
	httpUrl
} from "./http.js";
import {
	baseUrl
} from './constant.js'

/**
 * 参保人地区城市选择
 */
export const getPersonCity = () => {
	return httpUrl({
		url: `${baseUrl}/mapi/service/get_city`
	});
}

/**
 * 社保方案/mapi/service/get_social_project_type
 */
export const getSocialProject = (house_type,social_types,city_id) => {
	return httpUrl({
		url: `${baseUrl}/mapi/service/get_social_project_type?house_type=${house_type}&social_types=${social_types}&city_id=${city_id}`,
	});
}

/**
 *社保+公积金计算结果 
 * city_id
*house_type
*social_types 
*project_type_id
*salary
 */
export const getSocialCalc = (house_type,social_types,city_id,project_type_id,salary) => {
	return httpUrl({
		url: `${baseUrl}/mapi/service/social_calc?house_type=${house_type}&social_types=${social_types}&city_id=${city_id}&salary=${salary}&project_type_id=${project_type_id}`,
	});
}