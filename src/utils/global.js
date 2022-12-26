import Taro from '@tarojs/taro'

// 全局变量
const globalData = {
	isIphoneX: false,
	list: [],
}

export function setGlobalData(key, val) {
	globalData[key] = val
	if (key === 'list') Taro.eventCenter.trigger('CHANGE_GLOBAL_LIST')
}

export function getGlobalData(key) {
	return globalData[key]
}
